import {useState} from 'react'

const ProductCard = ({price,name,image,description}) => {
  const [isHover,setIsHover] =useState(false)
  return (
    <div className='p-4 py-4 shadow-xl rounded-xl' onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    style={{ position: 'relative' }}>
      <img src={image} alt='img' style={{height:"300px",width:"300px",display:"block",margin:"auto"}} className=''/>
      <p className='text-xl'>{name}</p>
      <p>{price}</p>
      <button className='border border-rose-300'>Take a look</button>
      {isHover && (
        <div
          style={{
            position: 'absolute',
            top: '0%',
            width:'200px',
            zIndex:'3',
            left: '50%',
            border: '1px solid #ccc',
            padding: '10px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <p>{description}</p>
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      )}
    </div>
    
  )
}

export default ProductCard
