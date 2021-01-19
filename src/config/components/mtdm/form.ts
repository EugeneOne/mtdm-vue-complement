const form: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-form',
    source: 'MTDM',
    props: [
        {
            key: 'vertical',
            types: [ 'boolean' ],
            default: false,
            detail: '控制FormItem标题和内容是否各自独占一行',
            documentation: ''
        },
        {
            key: 'show-required',
            types: [ 'boolean' ],
            default: false,
            detail: '控制FormItem必填项标题前方展示红色星号',
            documentation: ''
        },
        {
            key: 'invalid',
            types: [ 'boolean' ],
            default: false,
            detail: '控制FormItem校验错误时，输入内容是否标红',
            documentation: ''
        },
        {
            key: 'validate-first',
            types: [ 'boolean' ],
            default: false,
            detail: '表单校验时，出现第一个错误后是否停止校验',
            documentation: '缺省将校验所有的子FormItem'
        },
    ],
    events: [
        {
            key: 'validate',
            detail: '校验完成时触发',
            documentation: ''
        },
        {
            key: 'clearValidate',
            detail: '校验错误信息清空完成时触发',
            documentation: ''
        },
        {
            key: 'reset',
            detail: '表单重置完成时触发',
            documentation: ''
        },
    ],
    detail: '表单',
    documentation: '由单行输入、多行输入、不可修改表单、主副标题、必填表单、表单报错、开关、单选框、多选框等控件组成，用以收集、校验、提交数据。',
    snippets: {
        tag: 'mtdm-form',
        attrs: {},
        children: [
            {
                tag: 'mtdm-form-item',
                attrs: {
                    'v-model': '',
                    label: '',
                }
            }
        ]
    }
};

export default form;
