import React from 'react';
import Swal from 'sweetalert2'
import Navbar from '../../Shared/Navbar';
           
const Addproduct = () => {
    const handleAddproduct = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const name = form.name.value;
        const brandname = form. brandname.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortdescription= form.shortdescription.value;
        const rating = form.rating.value;

        const newProduct = { image,name,  brandname,type, price, shortdescription, rating }

        console.log(newProduct);

        // send data to the server
      {fetch(': https://brandshop-server-phto3igz1-sadia211s-projects.vercel.app/product', 
      {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
        }
    }

    return (
        <div>
        <Navbar></Navbar>
        <div className="bg-white font-vollkorn p-16 border">
            <h2 className="text-3xl font-extrabold text-center pb-4">Add a Product</h2>
            <form onSubmit={handleAddproduct}>
                {/* form name and quantity row */}
                <div className="grid grid-cols-2 gap-4 py-4">
                <div className="form-control  ">
                        <label className="label">
                            <span className="label-text text-xl">Product Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Product image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl"> Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandname" placeholder="Brand name" className="input input-bordered w-full" />
                        </label>
                    </div>
                
              
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                
                
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shortdescription" placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div></div>
                    <div className="form-control items-center py-4">
                        <label className="label">
                            <span className="label-text text-xl">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                
                <input type="submit" value="Add Product" className="btn btn-block" />

            </form>
        </div>
        </div>
    );
};


    


export default Addproduct;