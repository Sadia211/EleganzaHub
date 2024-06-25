import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Productcard from '../components/Productcard/Productcard';
import FeaturedCard from './FeaturedCard';
const Featured = () => {
  const { brandname } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(`Fetching products for brand: ${brandname}`);
        const response = await fetch("https://brands-server.vercel.app/product");
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
      <div className='mb-10 mx-20'>
        <div className='grid grid-cols-3 gap-2 py-4 mx-20'>
          {products.slice(0, 3).map((product) => (
            <FeaturedCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
