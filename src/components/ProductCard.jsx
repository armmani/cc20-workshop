import React, { useState } from 'react'

function ProductCard(props) {
  const [showDesc, setShowDesc] = useState(false)
  const { addToCart, productItem: { id, category, description, image, price, rating, title } } = props
  return (
    <div className="card bg-base-100 w-65 shadow-sm px-1 py-2">
      <figure className='h-40'>
        <img className='h-full'
          src={image}
          alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='text-gray-400'>{category}</p>
        <p className={`cursor-pointer ${showDesc ? '' : 'line-clamp-3'}`}
          onClick={() => setShowDesc(prv => !prv)}
        >{description}</p>
        <p className='text-blue-500'>$ {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-success"
            onClick={() => addToCart(id, title, price)}
          >Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard