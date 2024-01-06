import React from 'react';
import brand from '../assets/brand.png';

const NavbarDef = () => {
    return (
        <div className='bg-navColor flex justify-between items-center'>
            <img src={brand} alt="brand" className='w-[300px]' />
            <p className='font-inika font-bold mr-10 text-xxl text-white'>Javokhir Koziboyev</p>
        </div>
    )
}

export default NavbarDef