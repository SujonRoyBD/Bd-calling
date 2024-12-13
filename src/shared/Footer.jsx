import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Component/Home/Home'


const Footer = () => {
  return (
    <div className=' bg-black'>
      <footer className="footer bg-base-200 text-base-content p-10">
      <div className='grid grid-cols-1 md:grid-cols-5 gap-20 px-20 text-white'>
      <div>
      <Link to="/"> <img src="../../src/assets/img/Discount me-01-01 1.png" alt="dis" height={1} className='h-9' /></Link>
      <p>Ecommerce is a free UI Kit from Paperpillar
that you can use for your personal or
commercial project.</p>
      </div>
      
    <p>
    Account
      <br />
      Immigration
      <ul>
    Login / Register</ul>
      <ul>
      Cart</ul>
      <ul>
      Wishlist</ul>
    </p>
    

 
  
  <nav className=''>
    <h6 className="">Quick Link</h6> <br />
    <a className="link link-hover">privecy</a><br />
    <a className="link link-hover">tream of use</a><br />
    <a className="link link-hover">FAQ</a><br />
    <a className="link link-hover">contact</a><br />
    <a className="link link-hover">about</a><br />
  </nav>
  <nav>
    <h6 className="footer-title">Support</h6><br />
    <a className="link link-hover">exclusive@gmail.com</a><br />
    <a className="link link-hover">+88015-88888-9999</a><br />
    
  </nav>
  <nav>
    <h6 className="footer-title">Download</h6><br />
   <div className='flex  gap-2'>
    <div>
    <img src="../../src/assets/img/Qr Code.png" alt="" />
    </div>
    <div>
    <img src="../../src/assets/img/GooglePlay.png" alt="" />
    <img src="../../src/assets/img/AppStore.png" alt="" />
    </div>
   </div>
   
  </nav>
  </div>
  
</footer>
    </div>
  )
}

export default Footer
