import React, { useEffect, useState } from 'react';
import img from '../assets/table-img.png';
import { Link } from 'react-router-dom';
import { byId, getFile, url } from '../api';
import axios from 'axios';
import { Icon } from '@iconify/react';

const Home = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    // getUser
    const getUser = () => {
        axios.get(url + "user")
            .then(res => setUser(res.data.body))
            .catch(() => console.log("kelmadi!"))
    }

    // goUserAdd
    const goUserAdd = () => byId("userAdd").click();
    const goUserInfo = () => byId("userInfo").click();

    return (
        <div className='bg-gradient-to-t from-green-200 min-h-screen to-teal-500 w-full flex justify-center'>
            <Link to="/user/add" id='userAdd'></Link>
            <Link to="/user info" id='userInfo'></Link>
            <div className='container'>
                <div className='flex justify-center flex-col items-center mt-5 w-full font-inika'>
                    <h3 className='text-xxl font-bold text-headColor'>Epsilon Development Company</h3>
                    <p className='px-20 mt-3 text-xl font-semibold text-infoColor leading-7'>
                        Lorem ipsum dolor sit amet consectetur. Sed dui eu odio viverra sit aliquam lectus.
                        Velit nisl dictum sollicitudin felis dictumst proin ipsum mauris. Blandit eget nisl
                        nec libero eleifend porttitor. Enim erat tortor ultrices penatibus.
                    </p>
                </div>
                <div className='flex justify-between items-center mt-8'>
                    <div>
                        <button onClick={goUserAdd} className='addBtn mr-4 bg-gradient-to-t from-cyan-600 via-blue-500 to-cyan-600 font-inika active:scale-90 duration-200'>
                            Xodim qo'shish
                        </button>
                        <button className='addBtn mr-4 bg-btnBgIm font-inika active:scale-90 duration-200'>Import</button>
                        <button className='addBtn bg-btnBgEx font-inika active:scale-90 duration-200'>Export</button>
                    </div>
                    <input
                        className='py-2.5 px-3 rounded-xl shadow-lg w-64 focus:outline focus:bg-slate-100
                        duration-500 placeholder:font-inika text-gray-700'
                        placeholder='🔍 Qidirish...' />
                </div>
                <div className='mt-10 mb-5 rounded-xl overflow-hidden shadow-lg'>
                    <table className="w-full text-center bg-white">
                        <thead>
                            <tr className='bg-gray-800 text-white'>
                                <th className='px-5 py-3'>#</th>
                                <th className='px-5 py-3'>Фото</th>
                                <th className='px-5 py-3'>Занимаемая должность</th>
                                <th className='px-5 py-3'>Фамилия</th>
                                <th className='px-5 py-3'>Имя</th>
                                <th className='px-5 py-3'>Отечество</th>
                                <th className='px-5 py-3'>Пол</th>
                                <th className='px-5 py-3'>Год рождения</th>
                                <th className='px-5 py-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.length !== 0 ?
                                user.map((item, i) =>
                                    <tr className="border-t text-gray-500 even:bg-slate-100 hover:bg-slate-200 duration-150 text-center">
                                        <td className="px-5 py-3">{i + 1}</td>
                                        <td className="px-5 py-3">
                                            <img
                                                className='w-14 h-14 rounded-full object-cover'
                                                src={item.attachmentId === null
                                                    ? img
                                                    : getFile + item.attachmentId
                                                }
                                                alt="img" />
                                        </td>
                                        <td className="px-5 py-3">{item.positionHeld}</td>
                                        <td className="px-5 py-3">{item.lastName}</td>
                                        <td className="px-5 py-3">{item.firstName}</td>
                                        <td className="px-5 py-3">{item.middleName}</td>
                                        <td className="px-5 py-3">{item.gender}</td>
                                        <td className="px-5 py-3">{item.year}</td>
                                        <td className="px-5 py-3">
                                            <button
                                                onClick={() => {
                                                    goUserInfo();
                                                    sessionStorage.setItem("userInID", item.userId)
                                                }}
                                                className='addBtn bg-infoBtnBg text-black font-inika active:scale-90 duration-200'>Qo’shimcha</button>
                                        </td>
                                    </tr>
                                ) :
                                <tr className="text-gray-500 even:bg-slate-100 hover:bg-slate-200 duration-200">
                                    <td className="px-5 py-2"></td>
                                    <td className="px-5 py-2"></td>
                                    <td className="px-5 py-2"></td>
                                    <td className="px-5 py-2"></td>
                                    <td className="px-5 py-2 text-red-600">
                                        <Icon icon="eos-icons:three-dots-loading" width="70" />
                                    </td>
                                    <td className="px-5 py-2"></td>
                                    <td className="px-5 py-2"></td>
                                    <td className="px-5 py-2"></td>
                                    <td className="px-5 py-2"></td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;