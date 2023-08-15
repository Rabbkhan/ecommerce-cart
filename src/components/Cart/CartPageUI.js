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
        <form className={carddesign.formdesign}>
          <label  htmlFor ="amount"><b>Amount &nbsp;</b></label>
          <input className={carddesign.number} type='number' min={1} max={5} /><br/>
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