import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';
import PrivateRoute from '../routes/Private/PrivateRoute';
const Productcard = ({ product, products, setProducts }) => {
  const { _id, image, name, brandname, type, price, shortdescription, rating } = product;
  
  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brands-server.vercel.app/product/id/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'The Product has been deleted.',
                'success'
              );
              const remaining = products.filter(cof => cof._id !== _id);
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 20 }} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <figure><img src={image} alt="Movie" /></figure>
          <h2 className="card-title">{name}</h2>
          <p>{brandname}</p>
          <p>{type}</p>
          <p>Price: {price}</p>
          <p>{shortdescription}</p>
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button
          className='btn btn-error py-2 mx-5'
          onClick={() => handleDelete(_id)}
        >
          Delete
        </Button>
        
      
        <Button size='small'><Link to={`/update/${_id}`}>Update</Link></Button>
      </CardActions>
    </Card>
  );
};

export default Productcard;
