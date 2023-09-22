import React, { useEffect, useState } from 'react';
import Categoris from '../Categoris/Categoris';

const Category = () => {
    const [categoris,setCategoris] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategoris(data))

    }, [])
    return (
        <div className='pt-40'>
            <div className='text-center '>
                <h1 className='text-5xl'>Job Category List</h1>
                <p className='text-base pt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex flex-col-4 gap-4 pt-12'>

                {
                    categoris.map(category => <Categoris key={category.id} category={category}></Categoris>)
                }
            </div>
        </div>
    );
};

export default Category;