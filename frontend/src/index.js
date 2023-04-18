import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import IndvProduct from './components/products/IndvProduct'
import Search from './components/products/Search'
import Bread from './Bread';
import Create from './components/bread/Create';
import Edit from './components/bread/Edit';
import Delete from './components/bread/Delete';


const routing = (
	<Router>
		<React.StrictMode>
			<Header />
				<Switch>
				<Route exact path="/" render={() => <App />} />
				<Route path="/bread" render={() => <Bread />} />
				<Route path="/create" render={() => <Create />} />
				<Route path="/edit/:id" render={(props) => <Edit {...props} />} />
				<Route path="/delete/:id" render={(props) => <Delete {...props} />} />
				<Route path="/product/:slug" render={(props) => <IndvProduct {...props} />} />
				<Route path="/search/" render={() => <Search />} />
				<Route render={() => <Redirect to="/" />} />
				</Switch>
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

