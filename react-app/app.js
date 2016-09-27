var IndexPage = require('./pages/index.js');



// not using an ES6 transpiler
var Router = ReactRouter.Router;
var Route = ReactRouter.Route; 
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;




  ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="*" component={IndexPage}></Route>
	</Router>,
  document.getElementById('react-app')
);
