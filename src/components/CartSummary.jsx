import React from 'react'
import CartItem from './CartItem'

function CartSummary(props) {
  const { carts, decQuantity, addToCart } = props
  const total = carts.reduce( (a,c) => a+=c.price*c.quantity, 0)
  const vat = total * 0.07
  const finalTotal = total + vat
  return (
    <div className='w-1/3 bg-orange-400'>
      <h2 className='text-2xl rounded py-2 text-slate-600'>Cart Item :</h2>
      {carts.length === 0 && <p className='text-red-700'>EMPTY CART</p>}
      <div className="flex flex-col gap-2">
        {carts.map(el => (
          <CartItem key={el.id} item={el} decQuantity={decQuantity} addToCart={addToCart} />
        ))}
      </div>
      { carts.length >0 && (
        <>
        <div className="divider">SUMMARY</div>
      <div className="flex justify-betwwn px-1.5 flex-1">
        <p className='font-bold'>Total</p>
        <p>$ {total.toFixed(2)}</p>
      </div>
      <div className="flex justify-betwwn px-1.5 flex-1">
        <p className='font-bold'>VAT</p>
        <p>$ {vat.toFixed(2)}</p>
      </div>
      <div className="flex justify-betwwn px-1.5 flex-1">
        <p className='font-bold'>Final Total</p>
        <p>$ {finalTotal.toFixed(2)}</p>
      </div>
        </>
      )}
    </div>
  )
}

export default CartSummary