import React from 'react'

const ProductCard = ({price,name,image,description}) => {
  return (
    
    <div className='p-4 py-4 shadow-xl rounded-xl' >
      <img src={image} alt='img' style={{height:"300px",width:"300px",display:"block",margin:"auto"}} className=''/>
      <p className='text-xl'>{name}</p>
      <p>{price}</p>
    </div>
    
  )
}

export default ProductCard
