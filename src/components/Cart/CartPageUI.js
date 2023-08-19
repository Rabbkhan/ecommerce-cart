import React, { Fragment, useRef, useState } from 'react'
import carddesign from './CartPageUI.module.css'

const CartPageUI = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
 const amountInputRef = useRef();

  const submitHandler = e =>{
   e.preventDefault();
const enteredAmount = amountInputRef.current.value;
const enteredAmountNumber = +enteredAmount;
if(enteredAmount.trim().length ===0 ||
 enteredAmountNumber<1 || enteredAmountNumber>5){
  setAmountIsValid(false);
  return;
 }
 props.onAddToCart(enteredAmountNumber)
  }
  const dummy = [
    {
    id:1,
  title:'sushi',
  description:'Finest Fish and Veggies',
  price : '$22.99'
  },
    {
    id:2,
  title:'biriyani',
  description:'Finest met and rice',
  price : '$21.99'
  },
    {
    id:3,
  title:'chicken kosa',
  description:'Finest met and rice',
  price : '$24.99'
  }
]

  return (

<Fragment>
  <div className={carddesign.itemcard}>
    <div>
      
      {dummy.map(item => (
        <li  className={carddesign.listing}key={item.id}>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p className={carddesign.dollar}>{item.price}</p>

        <form className={carddesign.formdesign} onSubmit={submitHandler}>
          <label  htmlFor ="amount"><b>Amount &nbsp;</b></label>
          <input ref={amountInputRef} className={carddesign.number} type='number' min={1} max={5} /><br/>
          <button className={carddesign.btn}type='button'>+Add</button>
          {!amountIsValid && <p>Please enter a valid amount(1-5)</p> }
        </form>
        <hr></hr>

         </li>
        ))}
    </div>
    
    
  </div>
</Fragment>
    )
}

export default CartPageUI