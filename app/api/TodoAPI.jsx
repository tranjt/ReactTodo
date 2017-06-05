
var $ = require("jquery");

module.exports = {
   
    filterTodos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;

        //filter by showCompleted
        filteredTodos = todos.filter((todo)=>{
            return !todo.completed || showCompleted;
        });

        //Filter by searchText
        if (searchText.length > 0) {
            filteredTodos = filteredTodos.filter((todo)=>{
                var text = todo.text.toLowerCase();
                if (text.indexOf(searchText) >= 0) {
                    return true;
                }
            })
        };

        //Sort todo with non-completed first
        filteredTodos.sort((a, b)=> {
            if (!a.completed  && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }            
        });

        return filteredTodos;
    }
};