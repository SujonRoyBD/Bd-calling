import React from 'react';
import data from '../../product.json'
import { Link } from 'react-router-dom';

const Show = () => {
    return (
        <div>
            {
                data.map((data)=>{
                    return <div key={data.id}>
                        <h1>{data.id}</h1>
                        <img src={data.img}/>
                        <h3>{data.title}</h3>
                        <Link to={`/filter/${data.title}`}>view</Link>
                    </div>
                })
            }
        </div>
    );
};

export default Show;