var React = require("react");
var TodoList = require("TodoList")

var TodoApp = React.createClass({

    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: "Walk the dog"
                },
                {
                    id: 2,
                    text: "Eat a cookie"
                },
                {
                    id: 3,
                    text: "Drink some coffee"
                },
                {
                    id: 4,
                    text: "Watch some movies"
                },
            ]
        }
    },
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
            </div>
        );
    }
});

module.exports = TodoApp;