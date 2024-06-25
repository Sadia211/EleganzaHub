import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FeaturedCard = ({ product, products, setProducts }) => {
  const { _id, image, name, brandname, type, price, shortdescription, rating } = product;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {brandname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shortdescription}
        </Typography>
      </CardContent>
      <CardActions>
        {/* Add any buttons or actions here */}
      </CardActions>
    </Card>
  );
};

export default FeaturedCard;
