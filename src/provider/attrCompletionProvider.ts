import {
    CancellationToken, CompletionItemProvider, ProviderResult,
    TextDocument, Position, CompletionItem, CompletionList, CompletionItemKind,
    SnippetString
} from 'vscode';
import mtdConfig from '../config/index'
import { getTextBeforePosition, getPreTagAndAttrAndEvent, getConfig, notInTemplate } from '../utils/index';

export default class AttrCompletionProvider implements CompletionItemProvider {
    quotes = getConfig('sample-quotes') ? "'" : '"'; // 单引号 | 双引号
    // eslint-disable-next-line @typescript-eslint/naming-convention
    IS_ATTR = /\s((:|(v-bind:))?)(\w-)*$/;

    buildAttrSuggestion (attrDesc: PropDesc, completeEqualSign: boolean, source: string) {
        let insertText = '';

        // if (attrDesc.types && attrDesc.types[0] === 'boolean' && !completeEqualSign) {
        //     insertText = `${attrDesc.key}`
        // } else {
        //     insertText = `${attrDesc.key}=${this.quotes}\$\{0:${attrDesc.default || ''}\}${this.quotes}`
        // }
        insertText = `${attrDesc.key}=${this.quotes}$1${this.quotes}`;

        return {
            label: `${attrDesc.key}\t[${source}]`, // 补全项的名字
            sortText: `0${attrDesc.sort || ''}${attrDesc.key}`, // 补全项展示排序规则
            insertText: new SnippetString(insertText), // 选中后插入的字符串或代码片段（SnippetString 生成代码片段模板）
            kind: CompletionItemKind.Property, // 补全项类型
            detail: `[${source}]${attrDesc.detail || attrDesc.key}`, // 补全项的信息
            documentation: (attrDesc.documentation || '') + '\n' + new SnippetString(insertText).value // 补全项的注释
        };
    }

    // 暴露的provider方法
    provideCompletionItems (document: TextDocument, position: Position, token: CancellationToken): ProviderResult<CompletionItem[] | CompletionList> {
        this.quotes = getConfig('sample-quotes') ? "'" : '"';

        const txt = getTextBeforePosition(document, position);
        const match = this.IS_ATTR.exec(txt);

        // attrs包括了event
        const { tag, attrs: existAttrs } = getPreTagAndAttrAndEvent(document, position);

        if (tag && !notInTemplate(document, position)) {
            const tagInfo = mtdConfig.normalComponents.filter((item: MTDMComponentDesc) => item.name === tag)[0] || { events: [] };
            const attrs: PropDesc[] = tagInfo.props || [];
            const attrsSuggestion: Array<any> = [];
            const completeEqualSign = true;
            attrs.forEach((item: PropDesc) => {
                if (!existAttrs[item.key]) {
                    attrsSuggestion.push(this.buildAttrSuggestion(item, completeEqualSign, tagInfo.source))
                }
            })
            return attrsSuggestion
        }

        return []
    }
}