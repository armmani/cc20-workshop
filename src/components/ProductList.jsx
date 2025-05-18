import { useState } from 'react'
import ProductCard from './ProductCard'

function ProductList(props) {
  const { products, addToCart } = props
  console.log(products[0])
  return (
    <div className='w-2/3 bg-blue-900 px-4'>
      <h2 className='text-white text-2xl py-2'>Product List</h2>
      <div className="flex gap-3 flex-wrap">
        {products.map(el => (
          <ProductCard key={el.id} productItem={el} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default ProductList