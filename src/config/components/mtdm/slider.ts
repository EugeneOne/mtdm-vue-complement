const slider: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-slider',
    source: 'MTDM',
    props: [
        {
            key: 'value',
            types: [ 'number' ],
            default: 0,
            detail: '当前输入的值',
            documentation: '可使用 v-model'
        },
        {
            key: 'min',
            types: [ 'number' ],
            default: 0,
            detail: '最小值',
            documentation: ''
        },
        {
            key: 'max',
            types: [ 'number' ],
            default: 0,
            detail: '最大值',
            documentation: ''
        },
        {
            key: 'disabled',
            types: [ 'boolean' ],
            default: false,
            detail: '是否禁用',
            documentation: ''
        },
        {
            key: 'range',
            types: [ 'boolean' ],
            default: false,
            detail: '是否为范围滑块',
            documentation: ''
        },
        {
            key: 'marks',
            types: [ 'object' ],
            default: '',
            detail: '刻度标记',
            documentation: '{ [key: number]: string } \nkey 的类型必须为 number 且取值在闭区间 [min, max] 内'
        },
        {
            key: 'marks-position',
            types: [ 'string' ],
            default: 'top',
            detail: '刻度标记的位置',
            options: [
                {
                    value: 'top',
                    detail: '上',
                },
                {
                    value: 'bottom',
                    detail: '下',
                }
            ],
            documentation: ''
        },
        {
            key: 'show-tip',
            types: [ 'boolean' ],
            default: false,
            detail: '是否展示当前值tip气泡',
            documentation: ''
        },
        {
            key: 'tip-class',
            types: [ 'string' ],
            default: '',
            detail: '自定义 tip 气泡的 class',
            documentation: ''
        },
        {
            key: 'show-tip-arrow',
            types: [ 'boolean' ],
            default: true,
            detail: '是否显示气泡的箭头',
            documentation: ''
        },
        {
            key: 'tip-formatter',
            types: [ 'string' ],
            default: '',
            detail: '自定义 tip 显示的内容',
            documentation: 'function (value) => string'
        },
    ],
    events: [
        {
            key: 'input',
            detail: '拖动过程中触发',
            documentation: ''
        },
        {
            key: 'change',
            detail: '拖动结束后触发',
            documentation: ''
        },
    ],
    detail: '滑块',
    documentation: '用于在一个数值区间内进行数值选择，并展示当前值。',
    snippets: {
        tag: 'mtdm-slider',
        attrs: {
            'v-model': '',
            ':step': 100,
            ':max': 500,
            ':marks': '',
            '@change': '',
            '@input': ''
        },
    }
};

export default slider;
