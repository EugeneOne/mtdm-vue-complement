const checkbox: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-checkbox',
    source: 'MTDM',
    props: [
        {
            key: 'disabled',
            types: [ 'boolean' ],
            default: false,
            detail: '禁用',
            documentation: '设置是否禁用'
        },
        {
            key: 'checked',
            types: [ 'boolean' ],
            default: false,
            detail: '初始状态，是否选中',
            documentation: '设置初始状态，选中'
        },
        {
            key: 'label',
            types: [ 'string', 'number' ],
            default: '',
            detail: '文本',
            documentation: '设置选项文本'
        },
        {
            key: 'name',
            types: [ 'string', 'number' ],
            default: '',
            detail: 'checkbox的唯一标识',
            documentation: '设置唯一标志'
        },
        {
            key: 'icon-position',
            types: [ 'string' ],
            default: false,
            options: [
                {
                    value: 'left',
                    detail: '左',
                },
                {
                    value: 'right',
                    detail: '右',
                },
            ],
            detail: '选中图标的位置',
            documentation: '设置选中图标的位置'
        },
    ],
    events: [
        {
            key: 'change',
            detail: '值改变',
            documentation: '回调参数：选中的值'
        },
    ],
    detail: '复选框item',
    documentation: '单个复选框允许用户对单个称述语句设置真/假值。',
    snippets: {
        tag: 'mtdm-checkbox',
        attrs: {
            'label': '多选项',
        },
    }
};

export default checkbox;
