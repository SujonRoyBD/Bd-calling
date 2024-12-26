import React from 'react'
import Banner from '../banner/Banner'
import Banner2 from '../Banner2/Banner2'
import TopResturent from '../TopResturent/TopResturent'
import Restuarent1 from '../resturent/Resturent'
import ImgView from '../ImgView/ImgView'


const Home = () => {
  return (
    <div>
      <Banner />
     <ImgView/>
      <Banner2 />
      <TopResturent />
      <Restuarent1 />
    </div>
  )
}

export default Home
