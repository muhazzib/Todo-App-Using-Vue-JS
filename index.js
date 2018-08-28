new Vue({
    el: '#shoppingList',
    data: {
        header: '',
        AddButton: 'Add',
        todos: [],
        EditIndex: undefined,
        isActive: false
    },
    methods: {
        AddTodo: function () {
            if (this.header) {
                if (this.AddButton === 'Add') {
                    this.todos.push(this.header)
                    this.header = ''
                }
                else {
                    this.todos.splice(this.EditIndex, 1, this.header)
                    this.header = ''
                    this.AddButton = 'Add'
                    this.EditIndex = undefined
                    this.isActive = false
                }
            }
        },
        Edit: function (todo) {
            const ItmIndex = this.todos.indexOf(todo);
            this.header = todo
            this.AddButton = 'Save'
            this.EditIndex = ItmIndex
            this.isActive = true

        },
        Delete: function (todo) {
            const ItmIndex = this.todos.indexOf(todo);
            this.todos.splice(ItmIndex, 1)
        }
    }
})