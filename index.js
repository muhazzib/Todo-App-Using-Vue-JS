new Vue({
    el: '#shoppingList',
    data: {
        header: '',
        AddButton: 'Add',
        todos: [],
        EditIndex: undefined,
        isActive: false
    },
    created: function () {
        const LocalObject = JSON.parse(localStorage.getItem('todo'))
        if (LocalObject) {
            if (typeof (LocalObject === 'object')) {
                this.todos = LocalObject
            }
        }
    },
    methods: {
        AddTodo: function () {
            if (this.header) {
                if (this.AddButton === 'Add') {
                    this.todos.push(this.header)
                    this.header = ''
                    localStorage.setItem('todo', JSON.stringify(this.todos))
                }
                else {
                    this.todos.splice(this.EditIndex, 1, this.header)
                    this.header = ''
                    this.AddButton = 'Add'
                    this.EditIndex = undefined
                    this.isActive = false
                    localStorage.setItem('todo', JSON.stringify(this.todos))
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
            this.header = ''
            this.AddButton = 'Add'
            this.EditIndex = undefined
            this.isActive = false
            localStorage.setItem('todo', JSON.stringify(this.todos))
        }
    }
})