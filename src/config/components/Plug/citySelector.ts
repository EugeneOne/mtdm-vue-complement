const citySelector: MTDMComponentDesc = {
    type: 'normal',
    name: 'plug-city-selector',
    source: 'Plug',
    props: [
        {
            key: 'aliasName',
            types: [ 'string' ],
            options: [],
            detail: '全量城市列表',
            documentation: 'list 中，每个城市 object 中用于展示的字段，一般为城市名称。'
        },
        {
            key: 'aliasSort',
            types: [ 'string' ],
            options: [],
            detail: '城市 list 排序 key',
            documentation: '对于全量城市列表 list，若 list 中传入的数据为数组结构，则按照本字段声明的城市数据结构字段分组及排序。'
        },
        {
            key: 'list',
            types: [ 'string' ],
            options: [],
            detail: '城市全量列表',
            documentation: '用于展示组件末尾的 A-Z 城市选择区。可传入 A-Z 分组好的 Object 数据结构，也可传入一个 Array，组件将按照指定的 aliasSort 进行分组。'
        },
        {
            key: 'groupList',
            types: [ 'string' ],
            options: [],
            detail: '附加列表',
            documentation: '位于全量列表上方，仅为数组展示，不分组。[{ title: ..., list: [], aliasName: ..., aliasIcon: ... }]aliasIcon 为城市名称前展示的 icon 的对应字段。'
        }
    ],
    events: [
        {
            key: 'select',
            detail: '点击某个城市，返回选中的城市项',
            documentation: ''
        }
    ],
    detail: '城市选择器',
    documentation: '',
    snippets: {
        tag: 'plug-city-selector',
        attrs: {
            'alias-sort': '',
            'alias-name': '',
            'list': '',
            '@select': ''
        }
    }
};

export default citySelector;
