var React = require("react");
var TodoList = require("TodoList")
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({

    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: "",
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
            ],
            
        }
    },
    handleAddTodo: function(text) {
        alert("new todo " + text);
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;