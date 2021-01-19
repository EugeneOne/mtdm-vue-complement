const calendar: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-calendar',
    source: 'MTDM',
    props: [
        {
            key: 'type',
            types: [ 'string' ],
            default: 'single',
            detail: '选择类型',
            options: [
                {
                    value: 'single',
                    detail: '单选',
                },
                {
                    value: 'multiple',
                    detail: '多选',
                },
                {
                    value: 'range',
                    detail: '时间区间',
                }
            ],
            documentation: ''
        },
        {
            key: 'title',
            types: [ 'string' ],
            default: '选择日期',
            detail: '日历标题',
            documentation: ""
        },
        {
            key: 'min-date',
            types: [ 'date' ],
            default: '',
            detail: '可选的最小日期',
            documentation: "默认当前日期"
        },
        {
            key: 'max-date',
            types: [ 'date' ],
            default: '',
            detail: '可选的最大日期',
            documentation: "可选的最大日期"
        },
        {
            key: 'default-date',
            types: [ 'data' ],
            default: '',
            detail: '默认选中的日期',
            documentation: 'type为multiple或range时为数组'
        },
        {
            key: 'formatter',
            types: [ 'day' ],
            default: '',
            detail: '日期格式化函数',
            documentation: `formatter (day, {getNextDay, compareDay}) {
                // 一些特定计算和初始可以放到方法外，避免频繁执行
                const now = new Date();
                const nextDay = getNextDay(now);
    
                if (compareDay(day.date, now) === 0) {
                    day.text = '今天';
                } else if (compareDay(day.date, nextDay) === 0) {
                    day.text = '明天';
                }
            }`
        },
        {
            key: 'show-mark',
            types: [ 'boolean' ],
            default: false,
            detail: '是否显示月份背景水印',
            documentation: ''
        },
        {
            key: 'show-title',
            types: [ 'boolean' ],
            default: true,
            detail: '是否展示日历标题',
            documentation: ''
        },
        {
            key: 'show-subtitle',
            types: [ 'boolean' ],
            default: false,
            detail: '是否展示日历副标题（年月）',
            documentation: ''
        },
        {
            key: 'show-confirm',
            types: [ 'boolean' ],
            default: true,
            detail: '是否展示确认按钮',
            documentation: ''
        },
        {
            key: 'confirm-text',
            types: [ 'string' ],
            default: '确定',
            detail: '确认按钮的文字',
            documentation: ''
        },
        {
            key: 'confirm-disabled-text',
            types: [ 'string' ],
            default: '确定',
            detail: '确认按钮处于禁用状态时的文字',
            documentation: ''
        },
        {
            key: 'show-holiday',
            types: [ 'boolean' ],
            default: false,
            detail: '是否显示节假日',
            documentation: ''
        },
        {
            key: 'show-vacation',
            types: [ 'boolean' ],
            default: false,
            detail: '是否显示假/班标识',
            documentation: ''
        },
        {
            key: 'position',
            types: [ 'string' ],
            default: false,
            detail: '弹出位置',
            options: [
                {
                    value: 'top',
                    detail: '上',
                },
                {
                    value: 'right',
                    detail: '右',
                },
                {
                    value: 'left',
                    detail: '左',
                },
                {
                    value: 'bottom',
                    detail: '底部',
                }
            ],
            documentation: 'top；right；left；bottom'
        },
        {
            key: 'fullscreen',
            types: [ 'boolean' ],
            default: false,
            detail: '弹出是否全屏',
            documentation: ''
        },
        {
            key: 'show-close-icon',
            types: [ 'boolean' ],
            default: true,
            detail: '弹出是否显示关闭Icon',
            documentation: ''
        },
        {
            key: 'round',
            types: [ 'boolean' ],
            default: true,
            detail: '是否显示圆角弹窗',
            documentation: ''
        },
        {
            key: 'close-on-click-overlay',
            types: [ 'boolean' ],
            default: true,
            detail: '是否在点击遮罩层后关闭',
            documentation: ''
        },
        {
            key: 'close-on-click-confirm',
            types: [ 'boolean' ],
            default: true,
            detail: '是否在点击确定后关闭',
            documentation: ''
        },
        {
            key: 'max-range',
            types: [ 'number', 'string' ],
            default: '',
            detail: '日期区间最多可选天数，默认无限制',
            documentation: '当 Canlendar 的 type 为 range 时，支持'
        },
        {
            key: 'range-prompt',
            types: [ 'string' ],
            default: '',
            detail: '范围选择超过最多可选天数时的提示文案',
            documentation: '当 Canlendar 的 type 为 range 时，支持\n日期最多选择[n]天，“[n]”会自动替换成max-range值'
        },
        {
            key: 'allow-same-day',
            types: [ 'boolean' ],
            default: false,
            detail: '是否允许日期范围的起止时间为同一天',
            documentation: '当 Canlendar 的 type 为 range 时，支持'
        },
        {
            key: 'start-selected-tip',
            types: [ 'string' ],
            default: '',
            detail: '选中日期的tip提示',
            documentation: '当 Canlendar 的 type 为 range 时，支持'
        },
        {
            key: 'end-selected-tip',
            types: [ 'string' ],
            default: '',
            detail: '选中日期的tip提示',
            documentation: '当 Canlendar 的 type 为 range 时，支持\n“[n]”会自动替换实际天数，“[n-1]”会自动替换实际晚数'
        },
        {
            key: 'max-range',
            types: [ 'number', 'string' ],
            default: '',
            detail: '日期区间最多可选天数，默认无限制',
            documentation: '当 Canlendar 的 type 为 multiple 时，支持'
        },
        {
            key: 'range-prompt',
            types: [ 'string' ],
            default: '',
            detail: '范围选择超过最多可选天数时的提示文案',
            documentation: '当 Canlendar 的 type 为 multiple 时，支持\n日期最多选择[n]天，“[n]”会自动替换成max-range值'
        }
    ],
    events: [
        {
            key: 'select',
            detail: '点击任意日期时触发',
            documentation: 'value: Date | Date[]'
        },
        {
            key: 'select',
            detail: '日期选择完成后触发',
            documentation: '若show-confirm为true，则点击确认按钮后触发\nvalue: Date | Date[]'
        },
        {
            key: 'open',
            detail: '打开弹窗时触发',
            documentation: ''
        },
        {
            key: 'close',
            detail: '关闭弹窗时触发',
            documentation: ''
        }
    ],
    detail: '日历',
    documentation: '用于选择日期。',
    snippets: {
        tag: 'mtdm-calendar',
        attrs: {
            'v-model': '',
            ':formatter': '',
            ':showHoliday': 'true',
            ':showVacation': 'true',
            '@confirm': ''
        }
    }
};

export default calendar;
