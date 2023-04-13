import React, { useEffect, useState } from 'react';
import './App.css';
import Products from './components/Products';
import ProductLoadingComponent from './components/ProductLoading';
import axiosInstance from './axios';

function App() {
	const ProductLoading = ProductLoadingComponent(Products);
	const [appState, setAppState] = useState({
		loading: false,
		products: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, products: allPosts });
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