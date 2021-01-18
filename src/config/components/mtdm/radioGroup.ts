const radioGroup: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-radio-group',
    source: 'MTDM',
    props: [
        {
            key: 'icon-position',
            types: [ 'string' ],
            default: '',
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
            detail: '组内图标的位置',
            documentation: '设置组内图标的位置'
        },
    ],
    events: [
        {
            key: 'change',
            detail: '值改变',
            documentation: '回调参数：name(对应的选项唯一标志)'
        },
    ],
    detail: '单选框上层group',
    documentation: '用于在多个互斥的选项中选择一项，成组出现。',
    snippets: {
        tag: 'mtdm-radio-group',
        attrs: {
            'v-model': '',
            '@change': '' 
        },
        children: [
            {
                tag: 'mtdm-radio',
                attrs: {
                    name: '',
                    label: '单选项'
                }
            }
        ]
    }
};

export default radioGroup;
