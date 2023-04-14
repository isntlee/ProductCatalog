import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import IndvProduct from './components/products/IndvProduct'
import Search from './components/products/Search'
import Bread from './Bread';
import Create from './components/bread/Create';


const routing = (
	<Router>
		<React.StrictMode>
			<Header />
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/product/:slug" component={IndvProduct} />
					<Route path="/search/" component={Search} />
					<Route path="/bread" component={Bread} />
					<Route path="/bread/create" component={Create} />
					{/* <Route path="/bread/edit/:id" component={Edit} />
					<Route path="/bread/delete/:id" component={Delete} /> */}
				</Switch>
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

