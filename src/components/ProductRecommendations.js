// components/ProductRecommendations.js
import React from 'react';
import { Link } from 'react-router-dom';

const recommendedProducts = [
    { id: 1, name: 'Producto A', price: 19.99 },
    { id: 2, name: 'Producto B', price: 29.99 },
    { id: 3, name: 'Producto C', price: 39.99 },
    { id: 4, name: 'Producto D', price: 24.99 },
    { id: 5, name: 'Producto E', price: 44.99 },
    { id: 6, name: 'Producto F', price: 14.99 },
    { id: 7, name: 'Producto G', price: 34.99 },
    { id: 8, name: 'Producto H', price: 54.99 },
    { id: 9, name: 'Producto I', price: 64.99 },
    { id: 10, name: 'Producto J', price: 74.99 },
    { id: 11, name: 'Producto K', price: 84.99 },
    { id: 12, name: 'Producto L', price: 94.99 },
    { id: 13, name: 'Producto M', price: 104.99 },
    { id: 14, name: 'Producto N', price: 114.99 },
    { id: 15, name: 'Producto O', price: 124.99 },
];



const ProductRecommendations = () => {
    return (
        <div className="container recommendations">
            <h2 className="mb-4">Productos Recomendados</h2>
            <div className="product-list row">
                {recommendedProducts.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <div className="product-item shadow p-3 bg-white rounded">
                            <h5 className="product-name">{product.name}</h5>
                            <p className="product-price">${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/dashboard" className="btn btn-custom mt-4">Volver al Panel de Control</Link>
        </div>
    );
};

export default ProductRecommendations;