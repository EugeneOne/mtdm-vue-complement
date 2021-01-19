const cascader: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-cascader',
    source: 'MTDM',
    props: [
        {
            key: 'options',
            types: [ 'array' ],
            default: 0,
            detail: '分类显示所需数据',
            documentation: ''
        },
        {
            key: 'structKeys',
            types: [ 'object' ],
            default: '',
            detail: '自定义选项的Key',
            documentation: "{label: 'label', value: 'value', children: 'children'}"
        },
        {
            key: 'value',
            types: [ 'array' ],
            default: [],
            detail: '选中节点的数组',
            documentation: '节点对应的nodeKey，默认为index(索引)'
        },
        {
            key: 'nodeKey',
            types: [ 'string' ],
            default: '',
            detail: '分类节点用来作为唯一标识的属性',
            documentation: '整个分类里应该是唯一的'
        },
        {
            key: 'flexCols',
            types: [ 'array' ],
            default: [1, 1, 1],
            detail: '每一列宽度占比',
            documentation: ''
        },
        {
            key: 'customStyle',
            types: [ 'object' ],
            default: {},
            detail: '自定义级联外层样式',
            documentation: ''
        },
        {
            key: 'customItemStyle',
            types: [ 'object' ],
            default: 'top',
            detail: '自定义节点样式',
            documentation: ''
        },
        {
            key: 'loadData',
            types: [ 'funtion' ],
            default: '',
            detail: '异步function(option, resolve)',
            documentation: 'option包含点击的节点值，所在分类的index(索引)和在分类的index(索引)。resolve相当于回调，该回调接收一个数组参数'
        },
    ],
    events: [
        {
            key: 'change',
            detail: '任一节点被点击时触发',
            documentation: '共三个参数，依次为:\n点击的节点值\n是否是叶子节点(isLeaf)\n所选数据数据和上级数据的索引关系(array)'
        },
    ],
    detail: '级联',
    documentation: '用于从一组相关联的数据集合进行选择，用多级分类进行分割。',
    snippets: {
        tag: 'mtdm-cascader',
        attrs: {
            ':options': '',
            '@change': '',
        },
    }
};

export default cascader;
