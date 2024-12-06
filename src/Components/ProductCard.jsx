import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Card sx={{width: 345,m:1 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={product.thumbnail}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {product.category}          
        </Typography>
        <Typography variant="Subtitle" sx={{ color: 'text.secondary' }}></Typography>
        {product.price}
      </CardContent>
      <CardActions>
      <Chip color="success" icon={<StarBorderIcon />} label={product.rating}/>

      <Button size="small" component={Link} to={`/product-details/${product?.id}`}>VIEW</Button> 
      </CardActions>
    </Card>
  );
}
