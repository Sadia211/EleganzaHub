import React from 'react';
import Banner from '../../Shared/Banner';
import Navbar from '../../Shared/Navbar';
import Brands from '../Brands/Brands';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Featured from '../../Shared/Featured';
const Home = () => {
   const feature=useLoaderData()
    const brand=useLoaderData()
    return (
       
        <div className='mx-0'>
            <div className='sticky'><Navbar ></Navbar></div>
            
            <Banner></Banner>

            <h2 className='text-5xl font-vollkorn text-center py-10'>Brands</h2>
            <div className='grid grid-cols-3 gap-2 py-4 mx-5'>
            {brand.map(brands=><Brands
    key={brands.id}
    brand={brands}
    ></Brands>)}</div>
    <h2 className='text-5xl font-vollkorn text-center py-10'>Featured Products</h2>
    <div className='grid grid-cols-3 gap-2 py-4 mx-5'>
            {feature.slice(0, 3).map(features=><Featured
    key={features.id}
    feature={features}
    ></Featured>)}</div>
        <Footer></Footer>
        </div>
    );
};

export default Home;