const formItem: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-form-item',
    source: 'MTDM',
    props: [
        {
            key: 'label',
            types: [ 'string' ],
            default: '',
            detail: '主标签值',
            documentation: ''
        },
        {
            key: 'sub-title',
            types: [ 'string' ],
            default: '',
            detail: '副标签值',
            documentation: ''
        },
        {
            key: 'border',
            types: [ 'boolean' ],
            default: false,
            detail: '是否有下边界',
            documentation: ''
        },
        {
            key: 'required',
            types: [ 'boolean' ],
            default: false,
            detail: '是否为必填项',
            documentation: '若为true则触发非空校验，且标题前方展示红色星号'
        },
        {
            key: 'required-message',
            types: [ 'string' ],
            default: '不能为空',
            detail: '必填校验错误时的展示信息',
            documentation: '缺省将校验所有的子FormItem'
        },
        {
            key: 'rules',
            types: [ 'array' ],
            default: [],
            detail: '基于async-validator的校验规则',
            documentation: '若不为空，则在组件失去焦点时触发校验；校验未通过会进行错误提示'
        },
        {
            key: 'invalid',
            types: [ 'boolean' ],
            default: false,
            detail: '校验项是否标红',
            documentation: '若为true, 则文本内容标红'
        }
    ],
    events: [
        {
            key: 'input',
            detail: '输入框值发生变化时触发',
            documentation: ''
        },
        {
            key: 'focus',
            detail: '输入框获得焦点时触发',
            documentation: ''
        },
        {
            key: 'blur',
            detail: '输入框失去焦点时触发',
            documentation: ''
        },
    ],
    detail: '表单',
    documentation: '单条表单项',
    snippets: {
        tag: 'mtdm-form-item',
        attrs: {
            'v-model': '',
            label: ''
        },
    }
};

export default formItem;
