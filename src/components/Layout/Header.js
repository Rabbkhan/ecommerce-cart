import React, { Fragment } from 'react'
import classes from  './Header.module.css'
import banner from '../../images/banner.jpg'
const cart= '0';
const Header = () => {

  return (
    <Fragment>
<header className={classes.header}>
<div className={classes.logo}>
    ReacMeals
</div>
<div className='cart'>
    Your cart {cart}
</div>
    </header>
    <div className={classes.banner}>
<img src={banner}/>
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

