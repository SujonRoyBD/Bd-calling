import React from 'react'
import product from '../../product.json'
import { Link } from 'react-router-dom'
const ImgView = () => {
  return (
    <div className='flex'>
      {
        
        product.map((data)=>{
         return <div key={data.id} className=''>
             <img src={data.img} alt="fdfdf" />
             <h1>{data.id}</h1>
             <h2>{data.title}</h2>
           <Link to={`/imgView/ ${data.id}`}>  <button className='bg-green-500 rounded-md'>dee</button></Link>
           </div>

            
        })
      }
    </div>
  )
}

export default ImgView