import React from 'react';
import { Link } from 'react-router-dom';

const Brands = ({ brand }) => {
  const { id, name, image, brandname } = brand;

  return (
    <Link to={`/product/${encodeURIComponent(name)}`} className="block mb-4 w-80 mx-auto relative group">
      <div className="card bg-white border-2 rounded-lg overflow-hidden transform transition duration-300 ease-in-out group-hover:shadow-xl group-hover:bg-opacity-75">
        <figure className="px-10 pt-5 h-72 relative">
          <img src={image} alt={`${name} Logo`} className="object-contain h-full w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="text-white text-xl">View Products</span>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Brands;
