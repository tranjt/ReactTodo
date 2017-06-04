var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var AddTodo = React.createClass({

    handleSubmit: function(event){
        event.preventDefault();
        var todoText = this.refs.todoText.value;
        var {dispatch} = this.props;

        if (todoText.length > 0) {
            this.refs.todoText.value = "";            
            dispatch(actions.startAddTodo(todoText));
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

export default connect()(AddTodo);