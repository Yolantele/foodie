import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Product.css';
import ShoppingList from './../../ShoppingList/ShoppingList';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class Product extends Component {
  constructor(props){
    super(props);
    }

  createNotification(){
    NotificationManager.success('Successfully added to list');
  };

  addToWishlist = (product) => {
    // <ShoppingList  prod={product.id}/>
    axios.post('/api/addwishlist', {
        id: this.props.id
    })
    .then(function(response) {
    })
    .catch(function(error) {
    });
  }

  render(){
    return(
      <div className="Product">
        <img style={{width: 165, height: 165}} src={this.props.image} alt={"product"}></img>
        <br />
        {this.props.name}<br />
        £{this.props.price} for {this.props.quantity}<br />
        {this.props.description}, {this.props.date}<br />
        <button className='btn btn-danger'
          onClick={() => {this.createNotification('success')
          this.addToWishlist(this.props)}}>Add to Shopping List
        </button>
      <NotificationContainer/>
      </div>
    )
  }
};


export default Product;
