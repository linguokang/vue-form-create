

<template>
    <div id="app">
        <vue-form-create :options="options"></vue-form-create>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            options: {
                formProps: {
                    "label-width": "80"
                },
                style: {
                    width: "800px"
                },
                formData: {
                    accout: "fweg",
                    pwd: "gqw",
                    radio: "",
                    radioGroup: "",
                    checkbox: "",
                    checkboxGroup: [],
                    switch: "",
                    city: "",
                    slider: [0, 100],
                    date: "",
                    datetime: "",
                    time:""
                },
                rowProps: {
                    justify: "center"
                },
                formItem: [
                    {
                        type: "input",
                        key: "accout",
                        label: "账号",
                        props: {
                            placeholder: "请输入账号..."
                            // disabled:true
                        },
                        rules: {
                            required: true,
                            message: "请输入账号",
                            trigger: "blur"
                        },
                        style: {
                            // width: '300px',
                        },
                        events: {
                            change: () => {
                                console.log(3634);
                            }
                        }
                    },
                    {
                        type: "input",
                        key: "pwd",
                        label: "密码",
                        props: {
                            placeholder: "请输入账号..."
                        },
                        rules: {
                            required: true,
                            message: "请输入密码",
                            trigger: "blur"
                        }
                    },
                    {
                        type: "button",
                        text: "按钮",
                        props: {
                            type: "danger",
                            // loading:true
                            icon: "el-icon-edit"
                        },
                        events: {
                            click: () => {
                                console.log(3634);
                            }
                        }
                    },
                    {
                        type: "icon",
                        className: "el-icon-edit"
                    },
                    {
                        type: "radio",
                        key: "radio",
                        text: "Radio",
                        // props: {
                        //     value: true
                        // },
                        label: "单选框"
                    },
                    {
                        type: "radioGroup",
                        label: "水果",
                        key: "radioGroup",
                        props: {
                            type: "button"
                        },
                        children: [
                            {
                                disabled: true,
                                label: "香蕉"
                            },
                            {
                                label: "苹果"
                            },
                            {
                                label: "西瓜"
                            }
                        ]
                    },
                    {
                        type: "checkbox",
                        label: "水果",
                        key: "checkbox",
                        props: {
                            // type: "button"
                            // disabled:true
                        }
                    },
                    {
                        type: "checkboxGroup",
                        label: "水果",
                        key: "checkboxGroup",
                        children: [
                            {
                                disabled: true,
                                label: "香蕉"
                            },
                            {
                                label: "苹果"
                            },
                            {
                                label: "西瓜"
                            }
                        ]
                    },
                    {
                        type: "switch",
                        // label: "大",
                        key: "switch",
                        props: {
                            size: "large",
                            "active-text": "按月付费",
                            "inactive-text": "按年付费"
                        }
                    },
                    {
                        type: "select",
                        key: "city",
                        children: [
                            {
                                type: "optionGroup",
                                label: "城市",
                                children: [
                                    {
                                        value: "tj",
                                        label: "天津"
                                    }
                                ]
                            },
                            {
                                value: "shenzhen",
                                disabled: true,
                                label: "深圳"
                            },
                            {
                                label: "韶关",
                                value: "shaoguan"
                            }
                        ]
                    },
                    {
                        type: "slider",
                        // label: "滑块",
                        key: "slider",
                        props: {
                            range: true
                        }
                    },
                    {
                        key: "date",
                        type: "date",
                        props: {
                            type: "daterange"
                        }
                    },
                    {
                        key: "datetime",
                        type: "date",
                        props: {
                            type: "datetime"
                        }
                    },
                    {
                        key: "time",
                        type: "time"
                    }
                ],
                submit: {
                    className: "btn-container",
                    text: "提交",
                    props: {
                        type: "primary"
                    },
                    col: {
                        span: 3
                    },
                    success(formData) {
                        alert(JSON.stringify(formData));
                    },
                    fail(formData) {
                        alert("验证失败");
                    }
                },
                reset: {
                    className: "btn-container",
                    text: "重置",
                    col: {
                        span: 3
                    }
                }
            }
        };
    },
    components: {}
};
</script>

<style lang="scss">
</style>
