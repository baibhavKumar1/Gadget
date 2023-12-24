import { useState,useEffect } from "react";
import ProductCard from "./ProductCard";
import {useSelector,useDispatch} from 'react-redux'
const Shoes = () => {
    const [data, setData] = useState([]);
    const product = useSelector((store)=>store.ProductReducer.data)
    console.log(product);
  // useEffect(() => {
  //   const url = '/db.json';
  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((jsonData) => {
  //       setData(jsonData.shoes);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);
  return (
    <div className="grid grid-cols-4 grid-flow-rows">
        {data.map((item) => (
          <div key={item.id} style={{margin:"auto",marginBottom:"30px", borderRadius:"20px"}}  className="bg-white w-max">
          <ProductCard {...item}/>
          </div>
        ))}
      </div>
  )
}

export default Shoes

