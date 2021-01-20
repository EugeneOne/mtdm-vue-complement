const rate: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-rate',
    source: 'MTDM',
    props: [
        {
            key: 'value',
            types: [ 'number' ],
            default: 0,
            options: [],
            detail: '显示选中数量',
            documentation: ''
        },
        {
            key: 'count',
            types: [ 'number' ],
            default: 5,
            options: [],
            detail: '图标总数',
            documentation: ''
        },
        {
            key: 'size',
            types: [ 'number', 'string' ],
            default: 30,
            options: [],
            detail: '图标大小',
            documentation: '% / em / px / rem'
        },
        {
            key: 'allow-half',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否允许半选',
            documentation: ''
        },
        {
            key: 'readonly',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否为只读状态',
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
            key: 'icon',
            types: [ 'string' ],
            default: 'mtdmicon-star',
            options: [],
            detail: '选中时的图标类名',
            documentation: ''
        },
        {
            key: 'void-icon',
            types: [ 'string' ],
            default: 'mtdmicon-star',
            options: [],
            detail: '未选中时的图标类名',
            documentation: ''
        },
        {
            key: 'disabled-icon',
            types: [ 'string' ],
            default: 'mtdmicon-star',
            options: [],
            detail: '禁用时的图标类名',
            documentation: ''
        },
        {
            key: 'color',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '选中时图标的颜色',
            documentation: ''
        },
        {
            key: 'void-color',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '禁用时的图未选中时的图标颜色标类名',
            documentation: ''
        },
        {
            key: 'disabled-color',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '禁用时的图标颜色',
            documentation: ''
        },
    ],
    events: [
        {
            key: 'change',
            detail: '当前分值变化时触发的事件',
            documentation: '回调value：Number (当前分值)'
        }
    ],
    detail: '评分',
    documentation: '评论系统图形化呈现。',
    snippets: {
        tag: 'mtdm-rate',
        attrs: {
            'v-model': '',
            '@change': ''
        }
    }
};

export default rate;
