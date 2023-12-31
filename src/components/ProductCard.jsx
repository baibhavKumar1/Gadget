/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({ item }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isHover, setIsHover] = useState(false)
  // const addToCart = (e) => {
  //   console.log(e.target)
  // }

  return (
    <div className='p-4 py-4 shadow-xl border rounded-xl' onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ position: 'relative' }}>
      <img src={item.image} alt='img' style={{ height: "300px", width: "300px", display: "block", margin: "auto" }} className='border' />
      <p className='text-xl font-semibold font-mono'>{item.name}</p>
      <p>{item.price}</p>
      <button className='border bg-rose-300 rounded-full p-2' onClick={() => { navigate('/product/2') }}>View Details</button>
      {isHover && (
        <div
          style={{
            position: 'absolute',
            top: '0%',
            width: '200px',
            zIndex: '3',
            left: '50%',
            border: '1px solid #ccc',
            padding: '10px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      )}
    </div>

  )
}

export default ProductCard
