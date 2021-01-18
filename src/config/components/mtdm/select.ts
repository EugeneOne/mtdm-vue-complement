const select: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-switch',
    source: 'MTDM',
    props: [
        {
            key: 'mode',
            types: [ 'string' ],
            default: 'single',
            options: [
                {
                    value: 'single',
                    detail: '单选',
                },
                {
                    value: 'multiple',
                    detail: '多选',
                }
            ],
            detail: '选择模式',
            documentation: 'single；multiple'
        },
        {
            key: 'size',
            types: [ 'string' ],
            default: 'middle',
            options: [
                {
                    value: 'middle',
                    detail: '正常',
                },
                {
                    value: 'small',
                    detail: '小',
                }
            ],
            detail: '选择框尺寸',
            documentation: 'middle；small'
        },
        {
            key: 'type',
            types: [ 'string' ],
            default: 'line',
            options: [
                {
                    value: 'line',
                    detail: '线型',
                },
                {
                    value: 'face',
                    detail: '面型',
                }
            ],
            detail: '选择框类型',
            documentation: 'line；face'
        },
        {
            key: 'mark',
            types: [ 'boolean' ],
            default: 'false',
            options: [],
            detail: '选中时的图标样式',
            documentation: 'mark为true时，勾选状态下会进行√标记'
        },
        {
            key: 'column-num',
            types: [ 'number' ],
            default: 3,
            options: [],
            detail: '用于控制等分宽度时的列数',
            documentation: '用于控制等分宽度时的列数'
        },
        {
            key: 'auto-width',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '可通过设置该属性置为动态宽度',
            documentation: '缺省为等分宽度'
        },
        {
            key: 'wrap',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '动态宽度时，是否超出折行',
            documentation: '动态宽度时，是否超出折行'
        }
    ],
    events: [
        {
            key: 'select',
            detail: '选项被点击时触发',
            documentation: '返回点击的选项'
        }
    ],
    detail: '选择框',
    documentation: '用于在多个选项中选择一项或多项。',
    snippets: {
        tag: 'mtdm-select',
        attrs: {
            'v-model': ''
        },
        children: [
            {
                tag: 'mtdm-option'
            }
        ]
    }
};

export default select;
