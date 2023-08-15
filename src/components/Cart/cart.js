import React from 'react';
import classes from './cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const CartItems = (
    <ul className={classes.cartitems}>
      {[{ id: 1, name: 'sushi', amount: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {CartItems}
      <div className={classes.wrapping}>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
