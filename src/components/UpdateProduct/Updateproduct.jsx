import React from 'react';
import Swal from 'sweetalert2'
import Navbar from '../../Shared/Navbar';
import { useLoaderData } from 'react-router-dom';
const Updateproduct = () => {
    const product=useLoaderData();

    console.log("Product Data:", product);
    const  { _id,image,name,  brandname,type, price, shortdescription, rating }=product;
    const handleupdate = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const name = form.name.value;
        const brandname = form. brandname.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortdescription= form.shortdescription.value;
        const rating = form.rating.value;
const updatedproduct={ image,name,  brandname,type, price, shortdescription, rating }
        

        console.log(updatedproduct);

        // send data to the server
      fetch(`: https://brandshop-server-phto3igz1-sadia211s-projects.vercel.app/product/${_id}`, 
      {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedproduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
        }
    
    return (
        <div>
        <Navbar></Navbar>
        <div className="bg-white font-vollkorn p-16 border">
            <h2 className="text-3xl font-extrabold text-center pb-4">Update</h2>
            <form onSubmit={handleupdate}>
                {/* form name and quantity row */}
                <div className="grid grid-cols-2 gap-4 py-4">
                <div className="form-control  ">
                        <label className="label">
                            <span className="label-text text-xl">Product Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" defaultValue={image} placeholder="Product image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl"> Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandname" defaultValue={brandname}placeholder="Brand name" className="input input-bordered w-full" />
                        </label>
                    </div>
                
              
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price}placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                
                
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shortdescription" defaultValue={shortdescription}placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div></div>
                    <div className="form-control items-center py-4">
                        <label className="label">
                            <span className="label-text text-xl">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating"defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                
                <input type="submit" value="Add Product" className="btn btn-block" />

            </form>
        </div>
        </div>
    
    );
};

export default Updateproduct;