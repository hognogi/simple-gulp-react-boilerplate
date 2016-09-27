/*Bootstrap Classes*/
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;


var AppDispatcher  = require('../dispatcher/AppDispatcher');




var Component = React.createClass({

	getInitialState : function(){

		return {
			counter : this.props.counter
		};
	},

	componentWillReceiveProps : function(nextProps) {
		//this is triggered when the data is propagated from the parent automatically

		//this.props : initial attributes of the component
		//this.state : previous state of the component
		//nextProps : updated attributes

		this.setState({
			counter: nextProps.counter
		})
	},

	render: function() {
		return (
			<Row>
				<Col xs={12} className="component">
					
					cmponent content <br />
					counter: {this.state.counter} <br />
					<button onClick={this._updateCounter}>button</button>

				</Col>
			</Row>
		);
	},


	_updateCounter : function(){

		AppDispatcher.dispatch({
			actionType: 'updateCounter'
		});

	}

});


module.exports = Component;
