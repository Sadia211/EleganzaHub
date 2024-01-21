import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Navbar from '../../Shared/Navbar';
import Productcard from '../Productcard/Productcard';
import { useState } from 'react';


const Products = () => {
  const loadedProduct = useLoaderData();
  const [products, setproduct] = useState(loadedProduct);
  const [selectedProducts, setSelectedProducts] = useState([]);
  //The selectedProducts state is an array that holds the products selected by the user

  const handleAddToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    //setSelectedProducts([...selectedProducts, product]) is used to update the selectedProducts state. 
    //It adds the current product to the existing array of selected products.
   
  };
  const handleDeleteFromCart = (productId) => {
    const updatedSelectedProducts = selectedProducts.filter((product) => product._id !== productId);
    setSelectedProducts(updatedSelectedProducts);
  };

    return (<div> <Navbar></Navbar>
        <div className='m-10 flex'>
         
      
      <h1 className='text-6xl text-center my-20 text-purple-600'> </h1>
      <div className='grid md:grid-cols-4 gap-2'>
        {
          products.map(product => <Productcard
            key={product._id}
            product={product}
            products={products}
            setproduct={setproduct}
            addToCart={handleAddToCart}// Productcard component, when the "Add to Cart" button is clicked (onClick={() => addToCart(product)}), it invokes the addToCart function from the props, passing the current product.
            deleteFromCart={handleDeleteFromCart}
          ></Productcard>)
        }
      </div>
      <div className='mx-10 added-products border-2 w-72 font-vollkorn h-auto'>
        <h2 className='text-2xl'>My cart:</h2>
        <ul>
          {selectedProducts.map((product) => (
            <li key={product._id}>{product.name}
            <button onClick={() => handleDeleteFromCart(product._id)}className="btn btn-error py-2 mx-5">Delete </button></li>
          ))}
        </ul>
      </div>
    </div></div>
    );
};

export default Products;
