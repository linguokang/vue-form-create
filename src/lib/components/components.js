const componentObj = {
    input: generateInputComponent,
    // button: generateButtonComponent,
    // buttonGroup: generateButtonGroupComponent,
    // reset: generateResetComponent,
    // submit: generateSubmitComponent,
    // icon: generateIconComponent,
    // radio: generateRadioComponent,
    // radioGroup: generateRadioGroupComponent,
    // checkbox: generateCheckboxComponent,
    // checkboxGroup: generateCheckboxGroupComponent,
    // switch: generateSwitchComponent,
    // select: generateSelectComponent,
    // slider: generateSliderComponent,
    // date: generateDateComponent,
    // time: generateTimeComponent,
    // cascader: generateCascaderComponent,
    // inputNumber: generateInputNumberComponent,
    // rate: generateRateComponent,
    // upload: generateUploadComponent,
    // colorPicker: generateColorPickerComponent,
    col: generateColComponent,
    formItem: generateFormItemComponent,
    submit: generateSubmitComponent,
    reset: generateResetComponent,
}

function generateInputComponent(h,formData = {},obj){
    const key = obj.key? obj.key : ''
    return h('el-input',{
        props:{
            value: key? formData[key] : '',
            ...obj.props
        },
        style: obj.style,
        on:{
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    })
}

function generateColComponent(h, obj, component) {
    return h('el-col', {
        props: {
            ...obj.col
        },
    }, [component])
}


function generateFormItemComponent(h, obj, component) {
    return h('el-form-item', {
        class: obj.className,
        props: {
            label: obj.label,
            rules: obj.rules,
            prop: obj.key? obj.key : '',
            'label-width':obj['label-width'] || obj['labelWidth'],
            error: obj.error,
            'show-message': obj['show-message'] || obj['showMessage'],
        }
    }, [component])
}

function generateSubmitComponent(h,formData = {},obj,vm){
    return h('el-button',{
        props:obj.props,
        on:{
            click(){
                vm.$refs['form'].validate((valid) => {
                    if (valid) {
                        obj.success.call(vm, formData)
                    } else {
                        obj.fail.call(vm, formData)
                    }
                })
            }
        }
    },[obj.text])
}   

function generateResetComponent(h,formData = {},obj,vm){
    return h('el-button',{
        class: obj.className,
        props:{
            ...obj.props
        },
        on:{
            click(){
                vm.$refs['form'].resetFields()
            }
        }
    },[obj.text])
}   


export default componentObj