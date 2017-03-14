var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');
var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		};
	},
	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos);
	},
	handleAddTodo: function(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		});
	},
	handleToggle: function(id) {
		var updatedTogos = this.state.todos.map((todo) => {
			if (id === todo.id) {
				todo.completed = !todo.completed;
			};

			return todo;
		});

		this.setState({
			todos: updatedTogos
		});
	},
	handleSearch: function(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	render: function() {
		var {todos, showCompleted, searchText} = this.state;
		var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
			<div>
				<Search onSearch={this.handleSearch}/>
				<TodoList todos={filterTodos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
});

module.exports = TodoApp;