import React from 'react'
import { useParams } from 'react-router-dom'
 import data from '../../product.json'
const Showimg = () => {
    const{id}=useParams();
    const filterData= data?.filter((data)=>data?.id === parseInt(id))
    console.log(filterData)
  return (
    <div>
      {
        filterData?.map((data)=>{
            return <div key={data}>
                <img src={data?.img} alt="fdfdf" width={300} height={300}/>
                <h1>{data.title}</h1>
                

            </div>
        })
      }
    </div>
  )
}

export default Showimg
