import React from 'react';
import { Link } from 'react-router-dom';

const Featured = ({ feature }) => {
  

  const{featured}=feature
  return (
          
 
   
    <div className="card w-80 bg-white border-2 hover:border-t-4 rounded-none py-4 ">
<figure className="px-10 h-56">
  <img src={featured} />
</figure>
<div className="card-body items-center text-center">
  


  </div>
</div>
   
  );
};

export default Featured;
