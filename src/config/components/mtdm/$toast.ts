const params: FuncSnippetsParam[] = [
    {
        key: 'type',
        document: '提示类型',
        types: ['string'],
        default: ''
    },
    {
        key: 'message',
        document: '提示内容',
        types: ['string'],
        default: ''
    },
    {
        key: 'icon',
        document: '图标类名',
        types: ['string'],
        default: ''
    }
]

const $toast: any = {
    toast: {
        type: 'function',
        name: 'toast',
        prefix: '$mtdm.toast',
        source: 'MTDM',
        detail: '小提示',
        documentation: '通过 this.$mtdm.toast 来直接调用组件',
        snippets: {
            funcName: 'toast',
            params:
                params
                    .filter(i => ['type', 'message'].includes(i.key)) as FuncSnippetsParam[]
        } as FuncSnippets

    } as MTDMFuncComponentDesc,
};

export default $toast;
