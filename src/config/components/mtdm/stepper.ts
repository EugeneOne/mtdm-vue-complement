const stepper: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-stepper',
    source: 'MTDM',
    props: [
        {
            key: 'value',
            types: [ 'number' ],
            options: [],
            detail: '当前输入的值',
            documentation: '可以使用 v-model'
        },
        {
            key: 'type',
            types: [ 'string' ],
            default: 'circular-solid',
            options: [
                {
                    value: 'circular-solid',
                    detail: '圆形',
                },
                {
                    value: 'square-solid',
                    detail: '方形',
                },
                {
                    value: 'circular-hollow',
                    detail: '线型圆形',
                },
                {
                    value: 'square-hollow',
                    detail: '线型方形',
                },
                {
                    value: 'square-join-hollow',
                    detail: '连体方形',
                },
                {
                    value: 'circular-join-hollow',
                    detail: '连体胶囊',
                }
            ],
            detail: '计数器样式类型',
            documentation: ''
        },
        {
            key: 'disabled',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否为禁用状态',
            documentation: ''
        },
        {
            key: 'inputable',
            types: [ 'boolean' ],
            default: true,
            options: [],
            detail: '是否可手动输入',
            documentation: ''
        },
        {
            key: 'integer',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否只能输入整数',
            documentation: ''
        },
        {
            key: 'max',
            types: [ 'number' ],
            options: [],
            detail: '最大值',
            documentation: ''
        },
        {
            key: 'min',
            types: [ 'number' ],
            options: [],
            detail: '最小值',
            documentation: ''
        },
        {
            key: 'step',
            types: [ 'number' ],
            options: [],
            detail: '每次加或减的数目',
            documentation: ''
        },
        {
            key: 'long-press',
            types: [ 'boolean' ],
            default: true,
            options: [],
            detail: '是否开启长按',
            documentation: ''
        },
        {
            key: 'decimal-length',
            types: [ 'number', 'string' ],
            default: 'mtdmicon-star',
            options: [],
            detail: '小数位数',
            documentation: ''
        },
        {
            key: 'minus-btn-type',
            types: [ 'string' ],
            default: '',
            options: [
                {
                    value: 'primary',
                    detail: '',
                },
                {
                    value: 'secondary',
                    detail: '',
                }
            ],
            detail: '减号按钮类型',
            documentation: ''
        },
        {
            key: 'plus-btn-type',
            types: [ 'string' ],
            default: '',
            options: [
                {
                    value: 'primary',
                    detail: '',
                },
                {
                    value: 'secondary',
                    detail: '',
                }
            ],
            detail: '加号按钮类型',
            documentation: ''
        }
    ],
    events: [
        {
            key: 'change',
            detail: '当值发生改变时触发',
            documentation: 'newValue: 当前值, oldValue: 改变前的值'
        },
        {
            key: 'out-of-range',
            detail: '交互操作时(手动输入、-减少、+增加)校验，超出[min, max]则触发',
            documentation: 'action: 交互操作, outOfRangeValue: 超过的值, currentValue: 当前值；其中action为increase, decrease'
        },
        {
            key: 'only-integer',
            detail: '与integer属性搭配使用，当输入小数时触发',
            documentation: ''
        },
        {
            key: 'decrease',
            detail: '增加+时触发',
            documentation: 'value: 当前值'
        },
        {
            key: 'increase',
            detail: '减少-时触发',
            documentation: 'value: 当前值'
        }
    ],
    detail: '计数器',
    documentation: '用户可对某特定商品进行增减操作，可支持手动输入。',
    snippets: {
        tag: 'mtdm-stepper',
        attrs: {
            'v-model': ''
        }
    }
};

export default stepper;
