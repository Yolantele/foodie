import React from 'react';
import axios from 'axios';
import './Product.css';

const Product = (props) => {

  function addToWishlist(product){
    axios.post('/api/addwishlist', {
        id: `${product.id}`
    })
    .then(function(response) {
    })
    .catch(function(error) {
    });
  }

  return (

    <div className='Product'>
    <img style={{width: 90, height: 90}} src={props.image} alt={"product"}></img>
    <p>{props.name}</p>
    <p>Quantity: {props.quantity}</p>
    <p>Price: £{props.price}</p>
    <p>Description: {props.description}</p>
    {/* <p>Date: {props.date}</p> */}
    <button onClick={() => addToWishlist(props)}>Add to shopping list</button>
    </div>
  )
};

export default Product;
