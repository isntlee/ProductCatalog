import React, { useEffect, useState } from 'react';
import './App.css';
import Products from './components/bread/Products';
import ProductLoadingComponent from './components/products/ProductLoading';
import axiosInstance from './axios';

function Bread() {
    console.log(' ')
    console.log('Bread - got here')
    console.log(' ')
	const ProductLoading = ProductLoadingComponent(Products);
	const [appState, setAppState] = useState({
		loading: true,
		products: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allProducts = res.data;
			setAppState({ loading: false, products: allProducts });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
		<div className="App">
			<h1>Latest Films</h1>
			<ProductLoading isLoading={appState.loading} products={appState.products} />
		</div>
	);
}
export default Bread;