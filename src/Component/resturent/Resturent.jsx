import React from 'react';

const Restuarent1 = () => {
    const view = [
        {
            img: "/assets/img/Food1.png",
            titel: "Skateboard Shoe",
            price: "$125"
        },
        {
            img: "/assets/img/Food2.png",
            titel: "Skateboard Shoe",
            price: "$127"
        },
        {
            img: "/assets/img/Food3.png",
            titel: "Skateboard Shoe",
            price: "$129"

        },
        {
            img: "/assets/img/Food4.png",
            titel: "Skateboard Shoe",
            price: "$135"

        },
        {
            img: "/assets/img/Food5.png",
            titel: "Skateboard Shoe",
            price: "$123"

        },
        {
            img: "/assets/img/Food6.png",
            titel: "Skateboard Shoe",
            price: "$115"

        },
        {
            img: "/assets/img/Food7.png",
            titel: "Skateboard Shoe",
            price: "$124"

        },
        {
            img: "/assets/img/Food8.png",
            titel: "Skateboard Shoe",
            price: "$105"

        },
        {
            img: "/assets/img/Food5.png",
            titel: "Skateboard Shoe",
            price: "$120"

        }
    ]
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 px-20'>
                {
                    view.map((data, index) => {
                        return <div key={index}>
                            <img src={data?.img} alt={index} className='rounded-lg' />
                            <h2>{data.titel}</h2>
                            <h2>{data.price}</h2>

                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Restuarent1;