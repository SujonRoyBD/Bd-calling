import React from 'react'
import product from '../../product.json'
import { Link } from 'react-router-dom'
const ImgView = () => {
  return (
    <div className='flex px-12'>
      
      <div className='flex gap-5'>
          {
          product.map((data)=>{
         return <div key={data.id} className='gap-8'>
             <img src={data.img} alt="fdfdf" className='rounded-lg'/>
            
             <h2>{data.title}</h2>
           <Link to={`/imgView/ ${data.id}`}>  <button className='bg-green-500 rounded-md px-4'>Click</button></Link>
           </div>

            
        })
          }
      </div>
      
    </div>
  )
}

export default ImgView
