import {
    CancellationToken, CompletionItemProvider, ProviderResult,
    TextDocument, Position, CompletionItem, CompletionList, CompletionItemKind,
    SnippetString
} from 'vscode';
import mtdConfig from '../config/index'
import { js_beautify } from 'js-beautify'
import { getTextBeforePosition, getPreTagAndAttrAndEvent, getConfig, notInTemplate, notInScript } from '../utils/index';

export default class AttrCompletionProvider implements CompletionItemProvider {
    quotes = getConfig('sample-quotes') ? "'" : '"'; // 单引号 | 双引号
    size: number = 2;
    wrapAttributes: 'auto' | 'force' | 'force-expand-multiline' | 'force-aligned' | 'aligned-multiple' = 'force-expand-multiline';
    // eslint-disable-next-line @typescript-eslint/naming-convention
    // IS_ATTR = /\s((:|(v-bind:))?)(\w-)*$/;

    buildFuncComponentSuggestion (funDesc: MTDMFuncComponentDesc) {
        const funSnippets = funDesc.snippets;
        let snippets = `this.\\$mtd.${funSnippets.funcName}({`;
        const params = funSnippets.params
        params.forEach((param: FuncSnippetsParam) => {
            snippets += `${param.key}: ${this.quotes}${param.default}${this.quotes},`
        });
        if (params.length) {
            snippets = snippets.substr(0, snippets.length - 1);
        }
        snippets += '})';

        snippets = js_beautify(snippets, {
            indent_size: this.size
        })

        return {
            label: `$${funDesc.name}\t[${funDesc.source}]`, // 补全项的名字
            sortText: `0${funDesc.sort || ''}${funDesc.name}`, // 补全项展示排序规则
            insertText: new SnippetString(snippets), // 选中后插入的字符串或代码片段（SnippetString 生成代码片段模板）
            kind: CompletionItemKind.Property, // 补全项类型
            detail: `[${funDesc.source}]${funDesc.detail || funDesc.name}`, // 补全项的信息
            documentation: (funDesc.documentation || '') + '\n' + new SnippetString(snippets).value // 补全项的注释
        };
    }

    // 暴露的provider方法
    provideCompletionItems (document: TextDocument, position: Position, token: CancellationToken): ProviderResult<CompletionItem[] | CompletionList> {
        this.quotes = getConfig('sample-quotes') ? "'" : '"';
        this.size = getConfig('indent-size') || 2;

        const txt = getTextBeforePosition(document, position);

        if (!notInScript(document, position)) {
            return mtdConfig.funcComponents.map((item: MTDMFuncComponentDesc) => {
                return this.buildFuncComponentSuggestion(item)
              })
        }

        return []
    }
}