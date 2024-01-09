import React from 'react';
import brand from '../assets/brand.png';
import { Link } from 'react-router-dom';

const NavbarDef = () => {
    return (
        <div className='bg-navBg flex justify-between items-center sticky top-0'>
            <Link to="/home">
                <img src={brand} alt="brand" className='w-[300px]' />
            </Link>
            <p className='font-inika font-bold mr-10 text-xxl text-white'>Javokhir Koziboyev</p>
        </div>
    )
}

export default NavbarDef