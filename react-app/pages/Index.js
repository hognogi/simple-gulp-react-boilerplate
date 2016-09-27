/*Bootstrap Classes*/
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Component = require('../components/Component.js');

var AppDispatcher  = require('../dispatcher/AppDispatcher');

var Store = require('../stores/Store.js');



var Index = React.createClass({

	getInitialState : function(){
		this.Store = new Store();

		return {
			content : "somevariable ",
			counter : this.Store.getCounter()
		};
	},

	render: function() {


		return (
			<Grid>

				<div className="container">
				

					<h1>React Hello World</h1>

					{this.state.content}

					<Component counter={this.state.counter}/>
		
				</div>
			</Grid>
		);
	},



	_onStoreUpdate : function(){
		this.setState({
			content : "somevariable Updated",
			counter : this.Store.getCounter()
		});
	},






	//Connect this root component to the store events
	componentDidMount : function(){
		this.Store.addUpdateListener(this._onStoreUpdate);
	},
	componentWillUnmount : function(){
		this.Store.removeUpdateListener(this._onStoreUpdate);
	}
});
module.exports = Index;
