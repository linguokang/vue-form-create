const componentObj = {
    input: generateInputComponent,
    button: generateButtonComponent,
    icon: generateIconComponent,
    radio: generateRadioComponent,
    radioGroup: generateRadioGroupComponent,
    checkbox: generateCheckboxComponent,
    checkboxGroup: generateCheckboxGroupComponent,
    switch: generateSwitchComponent,
    select: generateSelectComponent,
    slider: generateSliderComponent,
    date: generateDateComponent,
    time: generateTimeComponent,
    col: generateColComponent,
    formItem: generateFormItemComponent,
    submit: generateSubmitComponent,
    reset: generateResetComponent,
}

function generateInputComponent(h, formData = {}, obj) {
    const key = obj.key ? obj.key : ''
    return h('el-input', {
        props: {
            value: key ? formData[key] : '',
            ...obj.props
        },
        style: obj.style,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    })
}

function generateButtonComponent(h, formData = {}, obj) {
    return h('el-button', {
        props: obj.props,
        slot: obj.slot,
        style: obj.style,
        on: obj.events
    }, [obj.text])
}

function generateIconComponent(h, formData = {}, obj) {
    return h('i', {
        class:obj.className,
        style: obj.style,
    })
}

function generateColComponent(h, obj, component) {
    return h('el-col', {
        props: {
            ...obj.col
        },
    }, [component])
}

function generateRadioComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    return h('el-radio', {
        props: {
            value: key? formData[key] : false,
            ...obj.props
        },
        style: obj.style,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    }, [obj.text])
}

function generateRadioGroupComponent(h, formData = {}, obj) {
    let components = []
    const key = obj.key? obj.key : ''
    let radioType = obj.props.type == "button" ? "el-radio-button" : "el-radio"
    if (obj.children) {
        components = obj.children.map(child => {
            return h(radioType, {
                props: child.props? child.props : child
            }, [child.text])
        })
    }

    return h('el-radio-group', {
        props: {
            value: key? formData[key] : '',
            ...obj.props
        },
        style: obj.style,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    }, [components])
}

function generateCheckboxComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    return h('el-checkbox', {
        props: {
            value: key? formData[key] : '',
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    }, [obj.text])

}

function generateCheckboxGroupComponent(h, formData = {}, obj, vm) {
    let components = []
    const key = obj.key? obj.key : ''

    if (obj.children) {
        components = obj.children.map(child => {
            return h('el-checkbox', {
                props: child.props? child.props : child
            }, [child.text])
        })
    }

    return h('el-checkbox-group', {
        props: {
            value: key? formData[key] : [],
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    }, [components])
}

function generateSwitchComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    return h('el-switch', {
        props: {
            value: key? formData[key] : false,
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        },
    })
}

function generateSelectComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    let components = []

    if (obj.children) {
        components = obj.children.map(item => {
            if (item.type == 'optionGroup') {
                return h('el-option-group', {
                    props: item.props? item.props : item
                }, item.children.map(child => {
                    return h('el-option', {
                        props: child.props? child.props : child
                    })
                }))
            } else {
                return h('el-option', {
                    props: item.props? item.props : item,
                })
            }
        })
    }
    
    return h('el-select', {
        props: {
            value: formData[key],
            ...obj.props
        },
        style: obj.style,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        },
        slot: obj.slot
    }, components)
}

function generateSliderComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    return h('el-slider', {
        props: {
            value: formData[key],
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    })
}

function generateDateComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''
    const type = obj.props.type
    return h('el-date-picker', {
        props: {
            value: key? formData[key] : '',
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(date) {
                if (key) {
                    if (type.includes('datetime')) {
                        if (Array.isArray(date)) {
                            formData[key] = date? date.map(item => item? item.toLocaleDateString() 
                                                  + ' ' + item.toTimeString().split(' ')[0] : '') : []
                        } else {
                            formData[key] = date? date.toLocaleDateString() + ' ' + date.toTimeString().split(' ')[0] : ''
                        }
                    } else {
                        if (Array.isArray(date)) {
                            formData[key] = date? date.map(item => item? item.toLocaleDateString() : '') : []
                        } else {
                            formData[key] = date? date.toLocaleDateString() : ''
                        }
                    }
                }
            },
        }
    })
}

function generateTimeComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    return h('el-time-select', {
        props: {
            value: key? formData[key] : '',
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    })
}






function generateFormItemComponent(h, obj, component) {
    return h('el-form-item', {
        class: obj.className,
        props: {
            label: obj.label,
            rules: obj.rules,
            prop: obj.key ? obj.key : '',
            'label-width': obj['label-width'] || obj['labelWidth'],
            error: obj.error,
            'show-message': obj['show-message'] || obj['showMessage'],
        }
    }, [component])
}

function generateSubmitComponent(h, formData = {}, obj, vm) {
    return h('el-button', {
        props: obj.props,
        on: {
            click() {
                vm.$refs['form'].validate((valid) => {
                    if (valid) {
                        obj.success.call(vm, formData)
                    } else {
                        obj.fail.call(vm, formData)
                    }
                })
            }
        }
    }, [obj.text])
}

function generateResetComponent(h, formData = {}, obj, vm) {
    return h('el-button', {
        class: obj.className,
        props: {
            ...obj.props
        },
        on: {
            click() {
                vm.$refs['form'].resetFields()
            }
        }
    }, [obj.text])
}


export default componentObj