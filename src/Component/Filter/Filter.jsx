import React from 'react';
import data from '../../product.json'
import { useParams } from 'react-router-dom';

const Filter = () => {
    // const {id}=useParams()
    // const filterData = data.filter((data)=>data.id===parseInt(id))
    const {title}=useParams()
    const filterData=data.filter((data)=> data .title===title)
    return (
        <div>
            {
                filterData.map((data)=>{
                    return <div key={data.id}>
                        <h1>{data.id}</h1>
                        <img src={data.img} alt='da'/>
                        <h1>{data.title}</h1>
                    </div>
                })
            }
        </div>
    );
};

export default Filter;