import React, { Fragment } from 'react'
import carddesign from './CartPageUI.module.css'
const CartPageUI = () => {
  const dummy = [
    {
    id:1,
  title:'sushi',
  description:'Finest Fish and Veggies',
  price : '$22.99'
  },
    {
    id:2,
  title:'sushi',
  description:'Finest Fish and Veggies',
  price : '$22.99'
  },
    {
    id:3,
  title:'sushi',
  description:'Finest Fish and Veggies',
  price : '$22.99'
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
        <form className={carddesign.formdesign}>
          <label  htmlFor ="amount"><b>Amount &nbsp;</b></label>
          <input className={carddesign.number} type='number' value={1}/><br/>
          <button className={carddesign.btn}type='button'>+Add</button>
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