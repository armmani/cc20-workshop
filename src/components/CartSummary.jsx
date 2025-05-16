import React from 'react'
import CartItem from './CartItem'

function CartSummary() {
  return (
    <div className='w-1/3 bg-orange-400'>
      <h2>Cart Item :</h2>
      <CartItem />
    </div>
  )
}

export default CartSummary