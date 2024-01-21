import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Productcard = ({ product, addToCart, deleteFromCart }) => {
  const { _id, image, name, brandname, type, price, shortdescription, rating } = product;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 20 }} />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          <figure><img src={image} alt="Movie" /></figure>
          
                    <h2 className="card-title">{name}</h2>
                    <p>{brandname}</p>
                    <p>{type}</p>
                    <p> Price:{price}</p>
                    <p>{shortdescription}</p>
                    
               
                  
          </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => addToCart(product)} className='card-btn'>
          Add to cart
        </Button>
        <Button
          className='btn btn-error py-2 mx-5'
          onClick={() => deleteFromCart(_id)}
        >
          Delete
        </Button>
        <Button size='small'><Link to={'/update'}>Update</Link></Button>
       
        <Button size='small'>View</Button>
      </CardActions>
    </Card>
  );
};

export default Productcard;
