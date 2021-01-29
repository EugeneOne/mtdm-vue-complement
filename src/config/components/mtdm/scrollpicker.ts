const scrollpicker: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-scrollpicker',
    source: 'MTDM',
    props: [
        {
            key: 'options',
            types: ['array', 'object'],
            default: [],
            options: [],
            detail: '选项数组，配置每一列显示的数据',
            documentation: '成员为Array或Object'
        },
        {
            key: 'nodeKey',
            types: ['string'],
            default: '',
            options: [],
            detail: '选项的唯一标识',
            documentation: '若不配置则通过数组下标唯一确定选项'
        },
        {
            key: 'alias',
            types: ['object'],
            options: [],
            detail: '自定义选项文案/值的键的名称',
            documentation: "{labelKey: 'label', valueKey: 'value'}"
        },
        {
            key: 'value',
            types: ['array'],
            options: [],
            detail: '配置默认选中项，默认为选项下标构成的数组',
            documentation: '配置nodeKey后，可通过值来配置'
        },
        {
            key: 'title',
            types: ['string'],
            options: [],
            detail: '展示标题',
            documentation: ''
        },
        {
            key: 'confirm-text',
            types: ['string'],
            default: '完成',
            options: [],
            detail: '确认按钮文案',
            documentation: ''
        },
        {
            key: 'cancel-text',
            types: ['string'],
            default: '取消',
            options: [],
            detail: '取消按钮文案',
            documentation: ''
        },
        {
            key: 'item-height',
            types: ['string', 'number'],
            default: '48px',
            options: [],
            detail: '选项高度，如48px/2.4rem等',
            documentation: '若传递数字或数字型字符串，单位缺省为px'
        },
        {
            key: 'visible-item-count',
            types: ['string', 'number'],
            default: 5,
            options: [],
            detail: '可见的选项个数',
            documentation: ''
        }
    ],
    events: [
        {
            key: 'change',
            detail: '各列滚动后触发',
            documentation: '回调：值, 下标, 所属列, 原始值'
        },
        {
            key: 'confirm',
            detail: '点击完成按钮时触发',
            documentation: '回调：[选中的值], [选中的下标], [选中的原始值]'
        },
        {
            key: 'cancel',
            detail: '点击取消按钮时触发',
            documentation: ''
        }
    ],
    detail: '滚动选择',
    documentation: '',
    snippets: {
        tag: 'mtdm-scrollpicker',
        attrs: {
            'v-model': '',
            'title': '',
            ':options': '',
            ':value': '',
            '@change': '',
            '@confirm': ''
        }
    }
};

export default scrollpicker;
