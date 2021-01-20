const badge: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-badge',
    source: 'MTDM',
    props: [
        {
            key: 'value',
            types: [ 'string', 'number' ],
            options: [],
            detail: '显示值',
            documentation: ''
        },
        {
            key: 'max',
            types: [ 'number' ],
            default: '最大值',
            options: [],
            detail: '最大值',
            documentation: "超过最大值会显示 '{max}+'"
        },
        {
            key: 'dot',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '小圆点',
            documentation: ''
        },
        {
            key: 'hidden',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否显示',
            documentation: ''
        }
    ],
    events: [],
    detail: '徽章',
    documentation: '单个复选框允许用户对单个称述语句设置真/假值，多个复选框使用户在一组相互独立的选项中选择一或多项。',
    snippets: {
        tag: 'mtdm-badge',
        attrs: {
            'value': ''
        }
    }
};

export default badge;
