import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios.get('https://staging.fastor.in/v1/m/restaurant?city_id=118')
      .then(response => {
        setProducts(response.data); // Assuming the API returns an array of products
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {/* {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

