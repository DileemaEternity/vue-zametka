const App = {
    data() {
        return {
            placeholderString: "Введите список заметок",
            title: "Список заметок",
            inputValue: "",
            notes: ["Заметка 1", "Заметка 2"]
        }
    },
    methods: {
        addHandler() {
            if (this.inputValue !== "") {
                this.notes.push(this.inputValue)
                this.inputValue = ""
            }
        },
        doubleCount() {
            console.log("doubleCount")
            return this.notes.length * 2
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx, event) {
            this.notes.splice(idx, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            console.log("doubleCountComputed")
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 25) {
                this.inputValue = ""
            }
            console.log("input Value change", value)
        }
    }
}

Vue.createApp(App).mount('#app')
