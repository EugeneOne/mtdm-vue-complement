import {
    CancellationToken, CompletionItemProvider, ProviderResult,
    TextDocument, Position, CompletionItem, CompletionList, CompletionItemKind,
    SnippetString
} from 'vscode';
import mtdmConfig from '../config/index';
import { html_beautify } from 'js-beautify';
import { getTextBeforePosition, getConfig, notInTemplate } from '../utils/index';

export default class TagCompletionProvider implements CompletionItemProvider {
    quotes: string = '"'; // 单引号 | 双引号
    size: number = 2;
    wrapAttributes: 'auto' | 'force' | 'force-expand-multiline' | 'force-aligned' | 'aligned-multiple' = 'force-expand-multiline';
    tagStartReg = /<([\w]*)$/;

    buildTagSuggestion (mtdmComponentDesc: MTDMComponentDesc) {
        const tagSnippets = mtdmComponentDesc.snippets;
        const build = (tagDesc: TagSnippets) => {
            // 如果是文本，直接返回文本
            if (tagDesc.text) {
                return tagDesc.text;
            }
            let html = `<${tagDesc.tag}>`;
            // 处理属性
            if (tagDesc.attrs) {
                const attrs = tagDesc.attrs;
                Object.keys(attrs).forEach((attrName: string) => {
                    if (attrs[attrName] === null) {
                        // 无值属性，例如：<input disabled></input>
                        html += ` ${attrName}`;
                    } else {
                        // 添加属性 例如 value="123"
                        html += ` ${attrName}=${this.quotes}${attrs[attrName]}${this.quotes}`;
                    }
                });
            }
            // 如果是自闭合标签
            if (tagDesc.selfClose) {
                html += '/>';
                return html;
            }
            html += '>';
            // 如果存在子dom
            if (tagDesc.children) {
                tagDesc.children.forEach((child: TagSnippets) => {
                    html += build(child);
                });
            }
            html += `</${tagDesc.tag}>`;
            return html;
        };

        // 格式化代码
        let snippets = html_beautify(build(tagSnippets), {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            indent_size: this.size,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            wrap_attributes: this.wrapAttributes
        });

        // 去掉头部<，因为这个字符由用户已经输入
        const _snippets = snippets.slice(1);

        return {
            label: mtdmComponentDesc.name, // 补全项的名字
            sortText: `0${mtdmComponentDesc.sort || ''}${mtdmComponentDesc.name}`, // 补全项展示排序规则
            insertText: new SnippetString(_snippets), // 选中后插入的字符串或代码片段（SnippetString 生成代码片段模板）
            kind: CompletionItemKind.Class, // 补全项类型
            detail: `[${mtdmComponentDesc.source}]${mtdmComponentDesc.detail || mtdmComponentDesc.name}`, // 补全项的信息
            documentation: (mtdmComponentDesc.documentation || '') + '\n' + new SnippetString(snippets).value // 补全项的注释
        };
    }

    // 暴露的provider方法
    provideCompletionItems (document: TextDocument, position: Position, token: CancellationToken): ProviderResult<CompletionItem[] | CompletionList> {
        this.quotes = getConfig('double-quotes') ? '"' : "'";
        this.size = getConfig('indent-size') || 2;

        const txt = getTextBeforePosition(document, position);

        if (this.tagStartReg.test(txt) && !notInTemplate(document, position)) {
            return mtdmConfig.normalComponents.map((item: MTDMComponentDesc) => {
                return this.buildTagSuggestion(item);
            });
        }
    }
}