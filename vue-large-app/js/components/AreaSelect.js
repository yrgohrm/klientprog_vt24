export default {
    name: "AreaSelect",
    emits: ['area-selected'],
    props: {
        areas: Array
    },
    methods: {
        selectChange(event) {
            if (event.target.value) {
                this.$emit('area-selected', event.target.value)
            }
        }
    },
    template: `
        <select v-show="areas" @change="selectChange"> <!-- "areas" will be converted to a boolean. null, undefined and [] are all falsy -->
            <option value="">Please select an area</option>
            <option v-for="a of areas" :value="a.name">{{a.name}}</option>
        </select>`
}