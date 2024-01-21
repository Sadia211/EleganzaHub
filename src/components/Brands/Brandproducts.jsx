import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';

const Brandproducts = () => {
    const { name } = useParams();
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/product`);
            const data = await response.json();
            setBrands(data);
        };

        fetchData();
    }, [name]);

 


    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-white px-20'>
                <h2 className='text-3xl text-black font-serif text-center py-10'>{name}</h2>
                <img className='mx-auto max-w-2xl' src={brands.image} alt={brands.name} />

                <p className='text-black font-serif text-center py-10 mx-10'></p>
            </div>
        </div>
    );
};

export default Brandproducts;
