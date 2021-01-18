const checkboxGoup: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-checkbox-group',
    source: 'MTDM',
    props: [
        {
            key: 'max',
            types: ['number'],
            default: false,
            detail: '最大可选数量',
            documentation: '设置最大可选数量'
        },
        {
            key: 'min',
            types: ['number'],
            default: false,
            detail: '最小选中数量',
            documentation: '设置最小选中数量'
        },
        {
            key: 'icon-position',
            types: ['string'],
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
            detail: '组内图标的位置',
            documentation: '设置组内图标的位置'
        },
    ],
    events: [
        {
            key: 'change',
            detail: '值改变',
            documentation: '回调参数：选中的值'
        },
    ],
    detail: '复选框Goup',
    documentation: '单个复选框允许用户对单个称述语句设置真/假值。',
    snippets: {
        tag: 'mtdm-checkbox-group',
        attrs: {
            'v-model': '',
            '@change': ''
        },
        children: [
            {
                tag: 'mtdm-checkbox',
                attrs: {
                    name: '',
                    label: ''
                }
            }
        ]
    }
};

export default checkboxGoup;
