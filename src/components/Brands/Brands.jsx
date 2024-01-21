import React from 'react';
import { Link } from 'react-router-dom';
const Brands = ({brand}) => {

    const{id,name,image,brandname}=brand
    return (
            
   
      <Link to={`/products/${brandname}`} >
      <div className="card w-96 bg-white border-2 hover:border-t-4 rounded-none py-4 ">
  <figure className="px-10 pt-5 h-72">
    <img src={image} />
  </figure>
  <div className="card-body items-center text-center">
    

  
    </div>
  </div>
      </Link>
   

       
    );
};

export default Brands;