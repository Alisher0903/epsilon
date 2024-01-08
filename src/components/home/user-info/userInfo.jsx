import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import NavbarDef from '../../navbar/navbar';
import PlusUserInfo from './plusUserInfo';

const UserInfo = () => {
    const [fileName, setFileName] = useState("Faylni tanlang");
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFileName(selectedFile.name);
        } else {
            setFileName("Faylni tanlang");
        }
    };

    const [templates, setTemplates] = useState([{}]);

    const handleCreate = () => {
        setTemplates((prevTemplates) => [...prevTemplates, {}]);
    };

    const handleRemove = () => {
        if (templates.length > 1) {
            setTemplates((prevTemplates) => prevTemplates.slice(0, -1));
        }
    };

    return (
        <>
            <NavbarDef />
            <div className='w-full min-h-screen bg-addBg pb-10'>
                <div className="flex items-center justify-center pt-16">
                    <label htmlFor="fileInput" className="cursor-pointer active:scale-90 duration-200 flex flex-row justify-center items-center">
                        <span><Icon icon="flat-color-icons:plus" width="50" height="50" /></span>
                        <span className='font-inika font-bold text-2xl text-black hover:text-blue-800 duration-300 ml-2 tracking-wider'>{fileName}</span>
                    </label>
                    <input id="fileInput" type="file" className="hidden" onChange={handleFileChange} />
                </div>

                <div className='flex flex-wrap justify-center mt-4 pb-10'>
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
                        <label htmlFor="tugilganSana" className='mb-1 ml-1 mt-10 text-sm w-64'>день рождения</label>
                        <input
                            id='tugilganSana'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='день рождения...' />
                    </div>
                    {/* yetti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="tugilganKun" className='mb-1 ml-1 mt-10 text-sm w-64'>месяц рождения</label>
                        <input
                            id='tugilganKun'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='месяц рождения...' />
                    </div>
                    {/* sakkiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="tugilganYil" className='mb-1 ml-1 mt-10 text-sm w-64'>год рождения</label>
                        <input
                            id='tugilganYil'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='год рождения...' />
                    </div>
                    {/* To'qqiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="tugilganJoyi" className='mb-1 ml-1 mt-10 text-sm w-64'>Место рождения</label>
                        <input
                            id='tugilganJoyi'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Место рождения...' />
                    </div>
                    {/* o'n */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="manzil" className='mb-1 ml-1 mt-10 text-sm w-64'>Адрес: г.</label>
                        <input
                            id='manzil'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Адрес: г....' />
                    </div>
                    {/* o'n bir */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="viloyat" className='mb-1 ml-1 mt-10 text-sm w-64'>Область</label>
                        <input
                            id='viloyat'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Область...' />
                    </div>
                    {/* o'n ikki */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="tuman" className='mb-1 ml-1 mt-10 text-sm w-64'>Район</label>
                        <input
                            id='tuman'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Район...' />
                    </div>
                    {/* un uch */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="qishloq" className='mb-1 ml-1 mt-10 text-sm w-64'>Поселок</label>
                        <input
                            id='qishloq'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Поселок...' />
                    </div>
                    {/* un turt */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="msg" className='mb-1 ml-1 mt-10 text-sm w-64'>МСГ</label>
                        <input
                            id='msg'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='МСГ...' />
                    </div>
                    {/* un besh */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="ssg" className='mb-1 ml-1 mt-10 text-sm w-64'>ССГ</label>
                        <input
                            id='ssg'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='ССГ...' />
                    </div>
                    {/* un olti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="uy" className='mb-1 ml-1 mt-10 text-sm w-64'>Дом</label>
                        <input
                            id='uy'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Дом...' />
                    </div>
                    {/* un yetti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="kvartira" className='mb-1 ml-1 mt-10 text-sm w-64'>Квар-тира</label>
                        <input
                            id='kvartira'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Квар-тира...' />
                    </div>
                    {/* un sakkiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="talim" className='mb-1 ml-1 mt-10 text-sm w-64'>Образование</label>
                        <input
                            id='talim'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Образование...' />
                    </div>
                    {/* un tuqqiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="bitirganVaqtVaJoy" className='mb-1 ml-1 mt-10 text-sm w-64'>Что и когда окончил</label>
                        <input
                            id='bitirganVaqtVaJoy'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Что и когда окончил...' />
                    </div>
                    {/* yigirma */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="phoneNumber" className='mb-1 ml-1 mt-10 text-sm w-64'>Номер телефона</label>
                        <input
                            id='phoneNumber'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Номер телефона...' />
                    </div>
                    {/* yigirma bir */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="ishlaganKunNumber" className='mb-1 ml-1 mt-10 text-sm w-64'>С какого числа вы начали работать</label>
                        <input
                            id='ishlaganKunNumber'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='даты...' />
                    </div>
                    {/* yigirma ikki */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="ishlaganOyNumber" className='mb-1 ml-1 mt-10 text-sm w-64'>В каком месяце вы начали работать</label>
                        <input
                            id='ishlaganOyNumber'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='месяц...' />
                    </div>
                    {/* yigirma uch */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="ishlaganYilNumber" className='mb-1 ml-1 mt-10 text-sm w-64'>В каком году вы начали работать</label>
                        <input
                            id='ishlaganYilNumber'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='год...' />
                    </div>
                    {/* yigirma turt */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="pasportSeria" className='mb-1 ml-1 mt-10 text-sm w-64'>Паспорт серия</label>
                        <input
                            id='pasportSeria'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Паспорт серия...' />
                    </div>
                    {/* yigirma besh */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="pasportNumber" className='mb-1 ml-1 mt-10 text-sm w-64'>Номер паспорта</label>
                        <input
                            id='pasportNumber'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Номер паспорта...' />
                    </div>
                    {/* yigirma olti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="ishlaydiKun" className='mb-1 ml-1 mt-10 text-sm w-64'>С какого дня будет работать сайт (в цифрах)</label>
                        <input
                            id='ishlaydiKun'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='день...' />
                    </div>
                    {/* yigirma yetti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="ishlaydiOy" className='mb-1 ml-1 mt-10 text-sm w-64'>С какого месяца будет работать на сайте (в цифрах)</label>
                        <input
                            id='ishlaydiOy'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='месяц...' />
                    </div>
                    {/* yigirma sakkiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="ishlaydiYil" className='mb-1 ml-1 mt-10 text-sm w-64'>С какого года работает на сайте (в цифрах)</label>
                        <input
                            id='ishlaydiYil'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='год...' />
                    </div>
                    {/* yigirma toqqiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="oilaviyShariot" className='mb-1 ml-1 mt-10 text-sm w-64'>Семейное положение (женат, неженат, замужем, незамужем, разведен, разведена)</label>
                        <input
                            id='oilaviyShariot'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Семейная ситуация...' />
                    </div>
                </div>

                {/* yaqin qarindoshlari listi */}
                <h2 className='text-center mb-0 mt-8 font-inika font-bold text-xxl text-black'>Близкие родственники</h2>
                {templates.map((_, index) => (
                    <PlusUserInfo key={index} onRemove={() => handleRemove(index)} />
                ))}
                {/* <PlusUserInfo /> */}

                <div className='flex justify-center items-center mt-3'>
                    <div className='flex justify-center items-center active:scale-90 duration-300 mx-5'>
                        <button onClick={handleCreate} className='bg-plussBtnBg text-white active:scale-90 duration-300 rounded-lg p-2'>
                            <Icon icon="typcn:plus" className='w-8 h-8' />
                        </button>
                        <span onClick={handleCreate} className='cursor-pointer font-inika font-bold text-lg mx-2'>Add Lists</span>
                    </div>
                    <div id='removeBtn' className='flex justify-center items-center active:scale-90 duration-300 mx-5'>
                        <button onClick={handleRemove} className='bg-plussBtnBg text-white active:scale-90 duration-300 rounded-lg p-2'>
                            <Icon icon="typcn:minus" className='w-8 h-8' />
                        </button>
                        <span onClick={handleRemove} className='cursor-pointer font-inika font-bold text-lg mx-2'>Remove Lists</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInfo