import {
    CancellationToken, CompletionItemProvider, ProviderResult,
    TextDocument, Position, CompletionItem, CompletionList, CompletionItemKind,
    SnippetString
} from 'vscode';
import mtdConfig from '../config/index';
import { getTextBeforePosition, getPreTagAndAttrAndEvent, getConfig, notInTemplate, getPreTag } from '../utils/index';

export default class AttrValueCompletionProvider implements CompletionItemProvider {
    IS_ATTR_VALUE = /((v-bind:)|:)?([\w-]+)=['"][^'"]*$/;

    buildAttrValueSuggestion(attrOptionDesc: AttrOptionDesc, source: string) {
        const insertText = attrOptionDesc.value;
        return {
            label: attrOptionDesc.value, // 补全项的名字
            sortText: attrOptionDesc.value, // 补全项展示排序规则
            insertText: new SnippetString(insertText), // 选中后插入的字符串或代码片段（SnippetString 生成代码片段模板）
            kind: CompletionItemKind.Value, // 补全项类型
            detail: `[${source}]${attrOptionDesc.detail || attrOptionDesc.value}`, // 补全项的信息
            documentation: (attrOptionDesc.documentation || '') + '\n' + new SnippetString(insertText).value // 补全项的注释
        };
    }

    provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<CompletionItem[] | CompletionList> {
        const tag = getPreTag(document, position);
        const txt = getTextBeforePosition(document, position);
        const match = this.IS_ATTR_VALUE.exec(txt) || [];
        const tagName = match[3];
        if (tag && tagName && !notInTemplate(document, position)) {
            const tagInfo = mtdConfig.normalComponents.filter((item: MTDMComponentDesc) => item.name === tag)[0] || { props: [] };
            const attr: PropDesc = tagInfo.props.filter((item: PropDesc) => item.key === tagName)[0] || { options: [] };
            const options = attr.options || [];
            const completeEqualSign = true;
            return options.map((option: AttrOptionDesc) => this.buildAttrValueSuggestion(option, tagInfo.source));
        }

        return [];
    }
}