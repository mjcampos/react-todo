var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
	render: function() {
		var {id, text, completed, createdAt, completedAt} = this.props;
		var renderedDate = () => {
			var message = 'Created ';
			var timestamp = createdAt;

			if (completed) {
				message = 'Completed ';
				timestamp = completedAt;
			};

			return message + moment.unix(timestamp).format('MMM do YYYY @ h:mm a');
		};

		return (
			<div onClick={() => {
				this.props.onToggle(id);
			}}>
				<input type="checkbox" checked={completed}/>
				<p>{text}</p>
				<p>{renderedDate()}</p>
			</div>
		);
	}
});

module.exports = Todo;