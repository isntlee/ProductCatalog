import React from 'react';

function ProductLoading(Component) {
	return function ProductLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<p style={{ fontSize: '25px' }}>
				Data loading...
			</p>
		);
	};
}
export default ProductLoading;