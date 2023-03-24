import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import IndvProduct from './components/IndvProduct'

const routing = (
	<Router>
		<React.StrictMode>
			<Header />
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/product/:slug" component={IndvProduct} />
				</Switch>
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

