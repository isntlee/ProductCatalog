import React, { useEffect, useState } from 'react';
import './App.css';
import Products from './components/Products';
import ProductLoadingComponent from './components/ProductLoading';

function App() {
	const ProductLoading = ProductLoadingComponent(Products);
	const [appState, setAppState] = useState({
		loading: false,
		products: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:8000/api/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((products) => {
				setAppState({ loading: false, products: products });
			});
	}, [setAppState]);
	return (
		<div className="App">
			<h1>Latest Products</h1>
			<ProductLoading isLoading={appState.loading} products={appState.products} />
		</div>
	);
}
export default App;