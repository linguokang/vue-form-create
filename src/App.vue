

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
                    pwd: "gqw"
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
                            placeholder: "请输入账号...",
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
                        alert('验证失败')
                    }
                },
                reset: {
                    className: "btn-container",
                    text: "重置",
                    col: {
                        span: 3
                    },
                }
            }
        };
    },
    components: {}
};
</script>

<style lang="scss">
</style>
