import React, { Fragment, useState, useContext } from "react";
import classes from "./Header.module.css";
import Banner from "../../images/banner.jpg";
import Cart from "../Cart/cart";
import CartContext from "../context/notes/cartContext";

// const cart = "0";
const Header = (props) => {
  const cartCtx= useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber+item.amount;

  },0)
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>ReactMeals</div>
        <button className={classes.cart} onClick={openPopup}>
          Your cart {numberOfCartItems}
        </button>
        <Cart isOpen={isPopupOpen} onClose={closePopup} />
      </header>
      <div className={classes.banner}>
        <img src={Banner} alt="banenr" />
      </div>
      <div className={classes.card}>
        <h3 className={classes.h3}>Delicious Food, Delivered To You</h3>
        <p>
          Choose your favorite meal from our broad selection of avaible meals
          and enjoy a Delicious lunch or dinner at home .
        </p>
        <p>
          Choose your favorite meal from our broad selection of avaible meals
          and enjoy a Delicious lunch or dinner at home .
        </p>
      </div>
    </Fragment>
  );
};

export default Header;
