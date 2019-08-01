import componentObj from './components.js'

export default {
    name: 'vueFormCreate',
    props: {
        options: {
            type: Object,
            required: true
        }
    },
    render(h) {
        const options = this.options
        const formData = options.formData

        if (!options.formItem) {
            return h('div')
        }
        
        const components = options.formItem.map(item => {
            let func = componentObj[item.type]
            let subComponent = func? func.call(this, h, formData, item, this) : null
            let component = componentObj.formItem(h, item, subComponent)

            return componentObj.col(h, item, component)
        })

        if (options.submit) {
            processSubmitOrReset(components, h, formData, options.submit, this, 'submit')
        }

        if (options.reset) {
            processSubmitOrReset(components, h, formData, options.reset, this, 'reset')
        }

        return h('el-form', {
            ref: 'form',
            props: {
                ref: "form",
                model: formData,
                ...options.formProps,
            },
            style:{
                ...options.style,
            },
            class: 'vue-generate-form'
        }, [
            h('el-row', {
                props: options.rowProps 
            }, components)
        ])
    },
}

function processSubmitOrReset(components, h, formData, obj, vm, type) {
    let subComponent = componentObj[type](h, formData, obj, vm)
    let component = componentObj.formItem(h, obj, subComponent)
    components.push(componentObj.col(h, obj, component))
}