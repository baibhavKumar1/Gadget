import { useState,useEffect } from "react";
import ProductCard from "./ProductCard";
const Watch = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const url = '/db.json';

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.watch);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className="grid grid-cols-4 grid-flow-rows ">
        {data.map((item) => (
          <div key={item.id} style={{margin:"auto",marginBottom:"30px", borderRadius:"20px"}}  className="bg-white w-max">
          <ProductCard {...item}/>
          </div>
        ))}
      </div>
  )
}

export default Watch

