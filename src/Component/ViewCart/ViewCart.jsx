// import React from 'react'
// import Items from '../Items/Items'
// import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { CiCirclePlus } from "react-icons/ci";
// import { addToCart } from '../redux/features/carts/cartsSlice';
// import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
// const ViewCart = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     // const [isLoading, setIsLoading] = useState(true);
//     // const [item, setData] = useState(null);
//     // useEffect(() => {
//     //     // Simulating data fetch
//     //     setTimeout(() => {
//     //       setData("Here is some fetched data!");
//     //       setIsLoading(false);
//     //     }, 2000);
//     //   }, []);
//     const data =[
//         {
//             id : 1,
//             img:"/assets/img/long_t_shirt (1).webp",
//             title:"Long Sleeve T-shirt 1",
//             desc:"Delicious tackos appetizing",
//             price:"4.5"
//         },
//         {
//             id : 2,
//             img:"/assets/img/long_t_shirt (1).webp",
//             title:"Long Sleeve T-shirt 2",
//             desc:"Delicious tackos appetizing",
//             price:"4.5"
//         },
//         {
//             id : 3,
//             img:"/assets/img/crazyfood.webp",
//             title:"Long Sleeve T-shirt 3",
//             desc:"Delicious tackos appetizing",
//             price:"4.5"
//         },
//         {
//             id : 4,
//             img:"/assets/img/long_t_shirt (1).webp",
//             title:"Long Sleeve T-shirt 4",
//             desc:"Delicious tackos appetizing",
//             price:"4.5"
//         },
//         {
//             id : 5,
//             img:"/assets/img/long_t_shirt (1).webp",
//             title:"Long Sleeve T-shirt 5",
//             desc:"Delicious tackos appetizing",
//             price:"4.5"
//         },
//         {
//             id : 6,
//             img:"/assets/img/crazyfood.webp",
//             title:"Long Sleeve T-shirt 6",
//             desc:"Delicious tackos appetizing",
//             price:"4.5"
//         },
//         {
//             id : 7,
//             img:"/assets/img/long_t_shirt (1).webp",
//             title:"Long Sleeve T-shirt 7",
//             desc:"Delicious tackos appetizing",
//             price:"4.5"
//         },
//         {
//             id : 8,
//             img:"/assets/img/long_t_shirt (1).webp",
//             title:"Long Sleeve T-shirt 8",
//             desc:"Delicious tackos appetizing",
//             price:"4.5"
//         },
//         {   id : 9,
//             img:"/assets/img/crazyfood.webp",
//             title:"Long Sleeve T-shirt 9",
//             desc:"Delicious tackos appetizing",
//             price:"4.5"
//         },
//         {   id : 10,
//             img:"/assets/img/long_t_shirt (1).webp",
//             title:"Long Sleeve T-shirt 10",
//             desc:"Delicious tackos appetizing",
//             price:"4.5"
//         },
//         {
//             id : 11,
//             img:"/assets/img/long_t_shirt (1).webp",
//             title:"Long Sleeve T-shirt 11",
//             desc:"Delicious tackos appetizing",
//             price:"4.5"
//         },
//         {   
//             id : 12,
//             img:"/assets/img/crazyfood.webp",
//             title:"Long Sleeve T-shirt 12",
//             desc:"Delicious tackos appetizing",
//             price:"4.5"
//         }
//     ]
//     const dispatch = useDispatch();
//   return (
//     <div>
//       <Items/>
//       <div className='grid grid-cols-1 md:grid-cols-3 px-20 mt-5 gap-3'>
//         {
//             data.map((data)=>{
//                 return <div key={data}>
//                     <img src={data.img} alt="tshirt" height={300} width={350} />
//                   <div className='flex gap-5'>
//                   <div>
//                      {/* <Link to={`/viewLongTshirt/${data?.title}`}>{data.title}</Link> */}
//                      <Link to={`/viewLongTshirt/${data?.title}`}>{data.title}</Link>
//                    <h2>{data.desc}</h2>
//                    </div>
//                      <div className='flex items-center gap-5 mt-3 text-2xl'>
//                      <p>{data.price}</p>
//                      <p><CiCirclePlus onClick={()=>dispatch(addToCart(data))}/>
//                      {isVisible ? (
//         <>
//           Hide <FontAwesomeIcon icon={faMinus} />
//         </>
//       ) : (
//         <>
//           Show <FontAwesomeIcon icon={faPlus} />
//         </>
//       )}
//                      </p>
                     
//                           {/* {isLoading ? (
//                             <div><p><CiCirclePlus onClick={()=>dispatch(addToCart(data))}/></p> </div>
//                           ) : (
//                             <div>{item}</div>
//                           )} */}
                     
//                      </div>
//                   </div>
                    
//                 </div>
//             })
//         }
//       </div>
//     </div>
//   )
// }

// export default ViewCart

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { addToCart } from "../redux/features/carts/cartsSlice";
import { FaCartArrowDown } from "react-icons/fa";

const ViewCart = () => {
  const [clickedItems, setClickedItems] = useState({});
  const dispatch = useDispatch();

  const data = [
    {
      id: 1,
      img: "/assets/img/long_t_shirt (1).webp",
      title: "Long Sleeve T-shirt 1",
      desc: "Delicious tackos appetizing",
      price: "4.5",
    },
    {
      id: 2,
      img: "/assets/img/long_t_shirt (1).webp",
      title: "Long Sleeve T-shirt 2",
      desc: "Delicious tackos appetizing",
      price: "5.0",
    },
    {
      id: 3,
      img: "/assets/img/long_t_shirt (1).webp",
      title: "Long Sleeve T-shirt 3",
      desc: "Delicious tackos appetizing",
      price: "6.0",
    },
    {
      id: 4,
      img: "/assets/img/long_t_shirt (1).webp",
      title: "Long Sleeve T-shirt 3",
      desc: "Delicious tackos appetizing",
      price: "6.0",
    },
    {
      id: 5,
      img: "/assets/img/long_t_shirt (1).webp",
      title: "Long Sleeve T-shirt 3",
      desc: "Delicious tackos appetizing",
      price: "6.0",
    },
    {
      id: 6,
      img: "/assets/img/long_t_shirt (1).webp",
      title: "Long Sleeve T-shirt 3",
      desc: "Delicious tackos appetizing",
      price: "6.0",
    },
  ];

  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); // Redux action to add item to the cart
    setClickedItems((prevState) => ({
      ...prevState,
      [item.id]: true, // Mark this specific item's button as clicked
    }));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-20 mt-5 gap-3">
        {data.map((item) => (
          <div key={item.id} className="relative">
           <div className="absolute"> <FaCartArrowDown className="flex mt-9 ml-[300px] text-white"/></div>
            <img src={item.img} alt="tshirt" height={300} width={350} />
            <div className="flex gap-5">
              <div>
                <Link to={`/viewLongTshirt/${item?.title}`}>{item.title}</Link>
                <h2>{item.desc}</h2>
              </div>
              <div className="flex items-center gap-5 mt-3 text-2xl">
                <p>{item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  disabled={clickedItems[item.id]} // Disable button only for this item
                  style={{
                    cursor: clickedItems[item.id] ? "not-allowed" : "pointer",
                    backgroundColor: clickedItems[item.id] ? "#ccc" : "#4CAF50",
                    color: clickedItems[item.id] ? "#666" : "",
                    padding: "",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  {clickedItems[item.id] ? "clik": <CiCirclePlus  />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCart;
