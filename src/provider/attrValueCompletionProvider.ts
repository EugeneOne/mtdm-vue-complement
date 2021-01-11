import {
    CancellationToken, CompletionItemProvider, ProviderResult,
    TextDocument, Position, CompletionItem, CompletionList, CompletionItemKind,
    SnippetString
} from 'vscode';
import mtdConfig from '../config/index'

export default class AttrValue