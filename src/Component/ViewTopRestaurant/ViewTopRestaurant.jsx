import React from 'react';
import { useParams } from 'react-router-dom';

const data = [

    {
        img: "/assets/img/Kitchen1.png",
        title: "Trattoria dall'Oste 1",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        desc: {
            main: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
            readMore: "Read more..."
        }
    },
    {
        img: "/assets/img/Kitchen2.png",
        title: "Trattoria dall'Oste 2",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        desc: {
            main: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
            readMore: "Read more..."
        }
    },
    {
        img: "/assets/img/Kitchen3.png",
        title: "Trattoria dall'Oste 3",
        location: "Via Luigi Alamanni, 3, 50123 Firenze",
        desc: {
            main: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
            readMore: "Read more..."
        }
    },
];

const ViewTopRestaurant = () => {
    const {title} = useParams();
    const filterData = data?.filter((data)=> data?.title == title)
    console.log(filterData)
    return (
        <div>
            {
                filterData?.map((data, index)=>(
                    <div key={index} className='w-full flex justify-center items-center gap-5'>
                        <div className='w-1/2'>
                            <img src={data?.img} alt={data?.title} width={500} height={400}/>
                        </div>
                        <div className='w-1/2'>
                            <h3>{data?.title}</h3>
                            <h3>{data?.location}</h3>
                            <p>{data?.desc?.main}</p>
                            <button>Add to Cart</button>
                            <button>Checkout</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ViewTopRestaurant;