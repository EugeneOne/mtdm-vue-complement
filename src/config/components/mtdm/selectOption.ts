const selectOption: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-option',
    source: 'MTDM',
    props: [
        {
            key: 'value',
            types: [ 'any' ],
            default: '',
            options: [],
            detail: '选项的值',
            documentation: '选项的值'
        },
        {
            key: 'label',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '选项的展示文本',
            documentation: '选项的展示文本'
        },
        {
            key: 'icon',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '展示图标',
            documentation: '展示图标'
        },
        {
            key: 'disabled',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '禁用',
            documentation: '设置是否禁用'
        }
    ],
    events: [],
    detail: '选择框选项',
    documentation: '用于在多个选项中选择一项或多项。',
    snippets: {
        tag: 'mtdm-option',
        attrs: {},
    }
};

export default selectOption;
