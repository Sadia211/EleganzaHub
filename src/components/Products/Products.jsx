import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import Productcard from '../Productcard/Productcard';

const Products = () => {
  const { brandname } = useParams();
  const [products, setProducts] = useState([]);
  const { _id, image, name, type, price, shortdescription, rating } = products;
  
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(`Fetching products for brand: ${brandname}`);
        const response = await fetch(`https://brands-server.vercel.app/product/brand/${encodeURIComponent(brandname)}`);
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched products:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [brandname]);

 
  return (
    <div>
      <Navbar></Navbar>
      <div className='m-10'>
      <h1 className='text-5xl font-vollkorn text-center py-10'>{brandname}</h1>
        <div className='grid md:grid-cols-4 gap-2'>
       
          {products.length === 0 ? (
           <h1 className='text-2xl font-vollkorn text-center py-10 items-center'>Oops!No products found for {brandname}</h1>
          ) : (
           
            products.map((product) => (
              <Productcard
              
                key={product._id}
                product={product}
                
            
                
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
