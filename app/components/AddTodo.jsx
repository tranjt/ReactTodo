var React = require("react");

var AddTodo = React.createClass({

    handleSubmit: function(event){
        event.preventDefault();
        var text = this.refs.todoText.value;

        if (text.length > 0) {
            this.refs.todoText.value = "";
            this.props.onAddTodo(text);
        } else {
            this.refs.todoText.focus();
        }
    },

    render: function() {


        return(
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add new todo" ref="todoText"/>
                    <button className="button expanded" type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;