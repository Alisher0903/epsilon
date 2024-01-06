import React from 'react';
import userImg from '../../assets/userImg.png';
import PlusUserInfo from './plusUserInfo';
import { Icon } from '@iconify/react';

const UserInfo = () => {
    return (
        <div className='w-full min-h-screen bg-addBg pb-10'>
            <div className='flex justify-center items-center rounded-full overflow-hidden pt-10'>
                <img className='w-64 h-64' src={userImg} alt="userImg" />
            </div>
            <div className='flex flex-wrap justify-center mt-12 pb-10'>
                {/* bir */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="familiya" className='mb-1 ml-1 mt-10 text-sm w-64'>Фамилия</label>
                    <input
                        id='familiya'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Фамилия...' />
                </div>
                {/* ikki */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="ism" className='mb-1 ml-1 mt-10 text-sm w-64'>Имя</label>
                    <input
                        id='ism'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Имя...' />
                </div>
                {/* uch */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="sharfi" className='mb-1 ml-1 mt-10 text-sm w-64'>Отечество</label>
                    <input
                        id='sharfi'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Отечество...' />
                </div>
                {/* turt */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="jins" className='mb-1 ml-1 mt-10 text-sm w-64'>Пол</label>
                    <input
                        id='jins'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Пол...' />
                </div>
                {/* besh */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="millati" className='mb-1 ml-1 mt-10 text-sm w-64'>Национальност</label>
                    <input
                        id='millati'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Национальност...' />
                </div>
                {/* olti */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="tugilganSana" className='mb-1 ml-1 mt-10 text-sm w-64'>рождения</label>
                    <input
                        id='tugilganSana'
                        type='date'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='рождения...' />
                </div>
                {/* yetti */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="tugilganJoyi" className='mb-1 ml-1 mt-10 text-sm w-64'>Место рождения</label>
                    <input
                        id='tugilganJoyi'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Место рождения...' />
                </div>
                {/* sakkiz */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="manzil" className='mb-1 ml-1 mt-10 text-sm w-64'>Адрес: г.</label>
                    <input
                        id='manzil'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Адрес: г....' />
                </div>
                {/* to'qqiz */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="viloyat" className='mb-1 ml-1 mt-10 text-sm w-64'>Область</label>
                    <input
                        id='viloyat'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Область...' />
                </div>
                {/* un */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="tuman" className='mb-1 ml-1 mt-10 text-sm w-64'>Район</label>
                    <input
                        id='tuman'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Район...' />
                </div>
                {/* un bir */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="qishloq" className='mb-1 ml-1 mt-10 text-sm w-64'>Поселок</label>
                    <input
                        id='qishloq'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Поселок...' />
                </div>
                {/* un ikki */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="msg" className='mb-1 ml-1 mt-10 text-sm w-64'>МСГ</label>
                    <input
                        id='msg'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='МСГ...' />
                </div>
                {/* un uch */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="ssg" className='mb-1 ml-1 mt-10 text-sm w-64'>ССГ</label>
                    <input
                        id='ssg'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='ССГ...' />
                </div>
                {/* un turt */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="uy" className='mb-1 ml-1 mt-10 text-sm w-64'>Дом</label>
                    <input
                        id='uy'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Дом...' />
                </div>
                {/* un besh */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="kvartira" className='mb-1 ml-1 mt-10 text-sm w-64'>Квар-тира</label>
                    <input
                        id='kvartira'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Квар-тира...' />
                </div>
                {/* un olti */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="talim" className='mb-1 ml-1 mt-10 text-sm w-64'>Образование</label>
                    <input
                        id='talim'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Образование...' />
                </div>
                {/* un yetti */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="bitirganVaqtVaJoy" className='mb-1 ml-1 mt-10 text-sm w-64'>Что и когда окончил</label>
                    <input
                        id='bitirganVaqtVaJoy'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Что и когда окончил...' />
                </div>
                {/* un sakkiz */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="kalendar" className='mb-1 ml-1 mt-10 text-sm w-64'>С какого числа работает на объекте (цифрами)</label>
                    <input
                        id='kalendar'
                        type='date'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Календарь...' />
                </div>
                {/* un tuqqiz */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="ishlaganSanaNumber" className='mb-1 ml-1 mt-10 text-sm w-64'>С какой даты начал трудовую деятельность</label>
                    <input
                        id='ishlaganSanaNumber'
                        type='date'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Number...' />
                </div>
                {/* yigirma */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="oilaviyShariot" className='mb-1 ml-1 mt-10 text-sm w-64'>Семейное положение (женат, неженат, замужем, незамужем, разведен, разведена)</label>
                    <input
                        id='oilaviyShariot'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Семейная ситуация...' />
                </div>
                {/* yigirma bir */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="phoneNumber" className='mb-1 ml-1 mt-10 text-sm w-64'>Номер телефона</label>
                    <input
                        id='phoneNumber'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Номер телефона...' />
                </div>
                {/* yigirma ikki */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="pasportSeria" className='mb-1 ml-1 mt-10 text-sm w-64'>Паспорт серия</label>
                    <input
                        id='pasportSeria'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Паспорт серия...' />
                </div>
                {/* yigirma uch */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="pasportNumber" className='mb-1 ml-1 mt-10 text-sm w-64'>Номер паспорта</label>
                    <input
                        id='pasportNumber'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Номер паспорта...' />
                </div>
            </div>
            <PlusUserInfo />
            <div className='flex justify-center items-center active:scale-90 duration-300'>
                <button className='bg-plussBtnBg text-white active:scale-90 duration-300 rounded-lg p-2'>
                    <Icon icon="typcn:plus" className='w-8 h-8' />
                </button>
                <span className='cursor-pointer font-inika font-bold text-lg ml-2'>Yana Qo’shish</span>
            </div>
        </div>
    )
}

export default UserInfo