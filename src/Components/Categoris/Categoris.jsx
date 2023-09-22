import React from 'react';

const Categoris = ({category}) => {
    const {id,logo,category_name,availability} = category
    return (
        <div className='p-12 bg-[#eef2ff] rounded-lg'>
             <div>
                <img src={logo} alt="" />
                <h1 className='text-[20px] font-extrabold pt-4'>{category_name}</h1>
                <p className='text-base text-[#A3A3A3] font-medium pt-2'>{availability}</p>
             </div>
        </div>
    );
};

export default Categoris;