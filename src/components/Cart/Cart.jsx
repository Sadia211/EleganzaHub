import React from 'react';
import Productcard from '../Productcard/Productcard';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';
const Cart = () => {
    const loadedProduct = useLoaderData();
  const [products, setproduct] = useState(loadedProduct);
  const [selectedProducts, setSelectedProducts] = useState([]);
    return (
       
      <div className='mx-10 added-products border-2 w-72 font-vollkorn'>
        <h2 className='text-2xl'>My cart:</h2>
        <ul>
          {selectedProducts.map((product) => (
            <li key={product._id}>{product.name}
            <button onClick={() => handleDeleteFromCart(product._id)}className="btn btn-error py-2 mx-5">Delete </button></li>
          ))}
        </ul>
      </div>
    );
};

export default Cart;            