const input: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-input',
    source: 'MTDM',
    props: [
        {
            key: 'type',
            types: [ 'string' ],
            default: '',
            options: [
                {
                    value: 'textarea',
                    detail: '',
                },
                {
                    value: 'password',
                    detail: '密码',
                },
                {
                    value: 'number',
                    detail: '数字',
                }
            ],
            detail: '输入框类型，可支持原生',
            documentation: 'textarea；password；number等'
        },
        {
            key: 'maxlength',
            types: [ 'number' ],
            default: '',
            options: [],
            detail: '可输入最大长度',
            documentation: ''
        },
        {
            key: 'position',
            types: [ 'string' ],
            default: 'left',
            options: [
                {
                    value: 'left',
                    detail: '',
                },
                {
                    value: 'right',
                    detail: '',
                },
                {
                    value: 'center',
                    detail: '',
                }
            ],
            detail: '文本内容对齐方式',
            documentation: 'left；right；center'
        },
        {
            key: 'readonly',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否只读',
            documentation: ''
        },
        {
            key: 'disabled',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否为禁用状态',
            documentation: ''
        },
        {
            key: 'autosize',
            types: [ 'boolean', 'object' ],
            default: false,
            options: [],
            detail: 'textarea专用',
            documentation: '是否可拓展输入框'
        },
        {
            key: 'placeholder',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '原生属性: 文本框提示文案',
            documentation: ''
        },
        {
            key: 'clearable',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否显示清除图标',
            documentation: ''
        },
        {
            key: 'show-password',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '密码是否可见',
            documentation: '仅对type=password的文本框有效；若为true, 则可以通过右侧图标控制是否明文展示'
        },
        {
            key: 'show-letter',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否显示剩余字数',
            documentation: ''
        },
        {
            key: 'show-percent',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否显示输入字符百分比',
            documentation: ''
        }
    ],
    events: [
        {
            key: 'input',
            detail: '在输入框内容发生改变时触发',
            documentation: '返回当前输入的值'
        },
        {
            key: 'clear',
            detail: '当点击清空按钮时触发',
            documentation: ''
        },
        {
            key: 'focus',
            detail: '获取焦点时触发',
            documentation: ''
        },
        {
            key: 'blur',
            detail: '失去焦点时触发',
            documentation: ''
        }
    ],
    detail: '输入框',
    documentation: '指允许用户在区域内输入文本、数值等内容的组件。',
    snippets: {
        tag: 'mtdm-input',
        attrs: {
            'v-model': '',
            'placeholder': '' 
        }
    }
};

export default input;
