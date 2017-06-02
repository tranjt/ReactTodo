
var $ = require("jquery");

module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem("todos", JSON.stringify(todos));
            return todos;
        }
    },

    getTodos: function() {
         var stringTodo = localStorage.getItem("todos");         
         var todos = [];
         try {
            todos = JSON.parse(stringTodo);
         } catch (error) {
             
         }

         return $.isArray(todos) ? todos : [];
          
    }
};