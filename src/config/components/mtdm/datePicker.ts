const datePicker: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-scrollpicker',
    source: 'MTDM',
    props: [
        {
            key: 'value',
            types: ['number', 'date', 'array'],
            default: [],
            options: [],
            detail: '缺省选中时间',
            documentation: '日期值缺省为当天0:00:00 000'
        },
        {
            key: 'start-column',
            types: ['string'],
            default: 'year',
            options: [],
            detail: '时间起始维度',
            documentation: ''
        },
        {
            key: 'column-count',
            types: ['number'],
            default: 3,
            options: [],
            detail: '时间维度的跨度',
            documentation: ""
        },
        {
            key: 'min',
            types: ['number', 'date', 'array'],
            options: [],
            detail: '日期区间最小值',
            documentation: '日期值缺省为当天0:00:00 000'
        },
        {
            key: 'max',
            types: ['number', 'date', 'array'],
            options: [],
            detail: '日期区间最大值',
            documentation: '日期值缺省为当天0:00:00 000'
        },
        {
            key: 'is-hour12',
            types: ['boolean'],
            default: false,
            options: [],
            detail: '是否12小时制',
            documentation: '仅当start-column为hour时生效'
        },
        {
            key: 'filter',
            types: ['funtion'],
            default: '',
            options: [],
            detail: '选项过滤器',
            documentation: ''
        },
        {
            key: 'formatter',
            types: ['funtion'],
            default: '',
            options: [],
            detail: '选项展示格式化',
            documentation: '缺省会为相应时间维度加上单位：年/月/日/时/分/秒'
        },
        {
            key: 'title',
            types: ['string'],
            default: '',
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
            default: '完成',
            options: [],
            detail: '取消按钮文案',
            documentation: ''
        },
        {
            key: 'item-height',
            types: ['string', 'number'],
            default: 48,
            options: [],
            detail: '选项高度',
            documentation: '单位px'
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
            key: 'confirm',
            detail: '点击完成按钮时触发',
            documentation: '回调：[选中的值], [选中时间对应的Date数据]'
        },
        {
            key: 'cancel',
            detail: '点击取消按钮时触发',
            documentation: ''
        }
    ],
    detail: '时间选择',
    documentation: '用于选择时间或者日期',
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

export default datePicker;
