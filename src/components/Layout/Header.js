import React, { Fragment } from 'react'
import classes from  './Header.module.css'
import Banner from '../../images/banner.jpg'
const cart= '0';
const Header = () => {

  return (
    <Fragment>
<header className={classes.header}>
<div className={classes.logo}>
    ReactMeals
</div>
<button className={classes.cart}>
    Your cart {cart}
</button>
    </header>
    <div className={classes.banner}>
<img src={Banner} alt='banenr'/>
    </div>
    <div className={classes.card}>
        <h3 className={classes.h3}>Delicious Food, Delivered To You</h3>
        <p>Choose your favorite meal from our broad selection of avaible meals and enjoy a Delicious lunch or dinner at home .</p>
        <p>Choose your favorite meal from our broad selection of avaible meals and enjoy a Delicious lunch or dinner at home .</p>
    </div>
    </Fragment>
     )
}


export default Header;

