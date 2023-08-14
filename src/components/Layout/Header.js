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
    </Fragment>
     )
}


export default Header;

