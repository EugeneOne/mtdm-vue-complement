const $switch: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-switch',
    source: 'MTDM',
    props: [
        {
            key: 'disabled',
            types: [ 'boolean' ],
            default: '',
            options: [],
            detail: '禁用状态',
            documentation: '设置是否为禁用状态'
        },
    ],
    events: [
        {
            key: 'change',
            detail: '开关变化时触发',
            documentation: '返回当前的状态'
        }
    ],
    detail: '开关',
    documentation: '是用于触发一个行动并形成决策的组件。',
    snippets: {
        tag: 'mtdm-switch',
        attrs: {
            'v-model': ''
        }
    }
};

export default $switch;
