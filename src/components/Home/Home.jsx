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
<div className='mt-20'>
            <h2 className='text-5xl font-vollkorn text-center py-10'>Get yours from your favorite brand</h2>
            <div className='grid grid-cols-3 gap-2 py-4 mx-20'>
            {brand.map(brands=><Brands
    key={brands.id}
    brand={brands}
    ></Brands>)}</div></div>


<div className='flex mx-20 items-center mt-20' >
    <div className='h-76 w-96 mx-10 border-4'> <img src='https://i.ibb.co/ZzcCFZp/pexels-recepcelikphoto-18601568.jpg'/></div>
        <div> <h2 className='text-5xl font-vollkorn  py-10'>Elevate your style with us</h2>
        <p>Discover the art of sophistication with our curated fashion collection. Redefine elegance and elevate your style effortlessly.</p>
        </div>
        
   
    </div>



<div className='mt-20 '>
    <h2 className='text-5xl font-vollkorn text-center py-10'>Featured Products</h2>
    
    <Featured></Featured>
    
   
    </div>
   
        <Footer></Footer>
        </div>
    );
};

export default Home;