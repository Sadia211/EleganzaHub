import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Navbar from '../../Shared/Navbar';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const productData = useLoaderData();

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (productData) {
            setProduct(productData);
            setIsLoading(false);
        } else {
            setIsError(true);
        }
    }, [productData]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading product data.</div>;
    }

    const { _id, image, name, brandname, type, price, shortdescription, rating } = product;

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortdescription = form.shortdescription.value;
        const rating = form.rating.value;
        const updatedProduct = {
            _id, image, name, brandname, type, price, shortdescription, rating
        };

        console.log('Updating product with ID:', _id);

        // send data to the server
        fetch(`https://brands-server.vercel.app/product/id/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                } else {
                    Swal.fire({
                        title: 'No changes made',
                        text: 'No changes were made to the product',
                        icon: 'info',
                        confirmButtonText: 'OK',
                    });
                }
            })
            .catch(error => {
                console.error('Error updating product:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update product',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    };

    return (
        <div>
            <Navbar />
            <div className="bg-white font-vollkorn p-16 border">
                <h2 className="text-3xl font-extrabold text-center pb-4">Update Product</h2>
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-2 gap-4 py-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Product Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" defaultValue={image} placeholder="Product image" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandname" defaultValue={brandname} placeholder="Brand name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
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
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="shortdescription" defaultValue={shortdescription} placeholder="Short description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control items-center py-4">
                        <label className="label">
                            <span className="label-text text-xl">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Update Product" className="btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
