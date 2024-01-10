import React, { useEffect, useState } from 'react';
import brand from '../assets/brand.png';
import { Link } from 'react-router-dom';
import userImg from "../assets/user.png";
import { byId, getUser, setConfig } from '../api';
import { Icon } from '@iconify/react';

const NavbarDef = () => {

    const [user, setUser] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);

    useEffect(() => {
        setConfig();
        getUser(setUser)
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen)
    const toggleMenuEdit = () => setIsOpenEdit(!isOpen)

    const logOut = () => byId("logOut").click();

    return (
        <>
        <Link to="/" id='logOut'></Link>
            <div className='bg-navBg flex justify-between items-center sticky top-0'>
                <Link to="/home">
                    <img src={brand} alt="brand" className='w-[300px]' />
                </Link>
                <div className='flex justify-end items-center relative'>
                    <img onClick={toggleMenu} src={userImg} alt="img" className='w-14 h-14 rounded-full mr-3 cursor-pointer' />
                    <p onClick={toggleMenu} className='font-inika font-bold mr-10 text-xxl text-white cursor-pointer'>{user.name}</p>
                </div>
            </div>
            <div
                className={`${isOpen ? "absolute duration-500" : "hidden"} 
                right-8 mt-2 py-2 w-80 bg-white rounded-xl shadow-xl z-20`}>
                {/* Menu items */}
                <div className="h-32 rounded-t-xl flex justify-center items-center">
                    <img className="w-20 h-20 rounded-full" src={userImg} alt="Gift" />
                    <span className="absolute right-3 top-3 hover:text-gray-200 duration-200 text-white cursor-pointer"
                        onClick={toggleMenu}>
                        <Icon icon="carbon:close-filled" width="30" height="30" color="black" />
                    </span>
                </div>
                <div className="px-6 py-2">
                    <div className="font-bold text-xl mb-2 text-center">{user.name}</div>
                    <p className="text-center text-black">{user.phoneNumber}</p>
                </div>
                <div className="mb-4 mt-6 text-center">
                    <button className="mr-5 bg-yellow-500 text-white font-bold rounded-lg py-2 px-4 active:scale-90 duration-200">Edit</button>
                    <button
                        className="bg-red-500 text-white font-bold rounded-lg py-2 px-4 active:scale-90 duration-200"
                        onClick={() => {
                            logOut();
                            sessionStorage.clear();
                        }}
                    >log out</button>
                </div>
            </div>
        </>
    )
}

export default NavbarDef