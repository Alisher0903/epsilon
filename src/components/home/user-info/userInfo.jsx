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

    // addUser
    const addUser = () => {
        
    }

    return (
        <>
            <NavbarDef />
            <div className='w-full min-h-screen bg-addBg pb-10'>
                <div className="flex items-center justify-center pt-16">
                    <label htmlFor="attachmentId" className="cursor-pointer active:scale-90 duration-200 flex flex-row justify-center items-center">
                        <span><Icon icon="flat-color-icons:plus" width="50" height="50" /></span>
                        <span className='font-inika font-bold text-2xl text-black hover:text-blue-800 duration-300 ml-2 tracking-wider'>{fileName}</span>
                    </label>
                    <input id="attachmentId" type="file" className="hidden" onChange={handleFileChange} />
                </div>

                <div className='flex flex-wrap justify-center mt-4 pb-10'>
                    {/* bir */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="lastName" className='mb-1 ml-1 mt-10 text-sm w-64'>Фамилия</label>
                        <input
                            id='lastName'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Фамилия...' />
                    </div>
                    {/* ikki */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="firstName" className='mb-1 ml-1 mt-10 text-sm w-64'>Имя</label>
                        <input
                            id='firstName'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Имя...' />
                    </div>
                    {/* uch */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="middleName" className='mb-1 ml-1 mt-10 text-sm w-64'>Отечество</label>
                        <input
                            id='middleName'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Отечество...' />
                    </div>
                    {/* turt */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="gender" className='mb-1 ml-1 mt-10 text-sm w-64'>Пол</label>
                        <input
                            id='gender'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Пол...' />
                    </div>
                    {/* besh */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="nationality" className='mb-1 ml-1 mt-10 text-sm w-64'>Национальност</label>
                        <input
                            id='nationality'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Национальност...' />
                    </div>
                    {/* olti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="day" className='mb-1 ml-1 mt-10 text-sm w-64'>день рождения</label>
                        <input
                            id='day'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='день рождения...' />
                    </div>
                    {/* yetti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="month" className='mb-1 ml-1 mt-10 text-sm w-64'>месяц рождения</label>
                        <input
                            id='month'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='месяц рождения...' />
                    </div>
                    {/* sakkiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="year" className='mb-1 ml-1 mt-10 text-sm w-64'>год рождения</label>
                        <input
                            id='year'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='год рождения...' />
                    </div>
                    {/* To'qqiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="placeOfBirth" className='mb-1 ml-1 mt-10 text-sm w-64'>Место рождения</label>
                        <input
                            id='placeOfBirth'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Место рождения...' />
                    </div>
                    {/* o'n */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="addressCity" className='mb-1 ml-1 mt-10 text-sm w-64'>Адрес: г.</label>
                        <input
                            id='addressCity'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Адрес: г....' />
                    </div>
                    {/* o'n bir */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="region" className='mb-1 ml-1 mt-10 text-sm w-64'>Область</label>
                        <input
                            id='region'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Область...' />
                    </div>
                    {/* o'n ikki */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="district" className='mb-1 ml-1 mt-10 text-sm w-64'>Район</label>
                        <input
                            id='district'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Район...' />
                    </div>
                    {/* un uch */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="village" className='mb-1 ml-1 mt-10 text-sm w-64'>Поселок</label>
                        <input
                            id='village'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Поселок...' />
                    </div>
                    {/* un turt */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="mcg" className='mb-1 ml-1 mt-10 text-sm w-64'>МСГ</label>
                        <input
                            id='mcg'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='МСГ...' />
                    </div>
                    {/* un besh */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="ccg" className='mb-1 ml-1 mt-10 text-sm w-64'>ССГ</label>
                        <input
                            id='ccg'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='ССГ...' />
                    </div>
                    {/* un olti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="home" className='mb-1 ml-1 mt-10 text-sm w-64'>Дом</label>
                        <input
                            id='home'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Дом...' />
                    </div>
                    {/* un yetti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="flat" className='mb-1 ml-1 mt-10 text-sm w-64'>Квар-тира</label>
                        <input
                            id='flat'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Квар-тира...' />
                    </div>
                    {/* un sakkiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="education" className='mb-1 ml-1 mt-10 text-sm w-64'>Образование</label>
                        <input
                            id='education'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Образование...' />
                    </div>
                    {/* un tuqqiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="school" className='mb-1 ml-1 mt-10 text-sm w-64'>Что и когда окончил</label>
                        <input
                            id='school'
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
                        <label htmlFor="startWorkingDay" className='mb-1 ml-1 mt-10 text-sm w-64'>С какого числа вы начали работать</label>
                        <input
                            id='startWorkingDay'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='даты...' />
                    </div>
                    {/* yigirma ikki */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="startWorkingMonth" className='mb-1 ml-1 mt-10 text-sm w-64'>В каком месяце вы начали работать</label>
                        <input
                            id='startWorkingMonth'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='месяц...' />
                    </div>
                    {/* yigirma uch */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="startWorkingYear" className='mb-1 ml-1 mt-10 text-sm w-64'>В каком году вы начали работать</label>
                        <input
                            id='startWorkingYear'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='год...' />
                    </div>
                    {/* yigirma turt */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="passportSyria" className='mb-1 ml-1 mt-10 text-sm w-64'>Паспорт серия</label>
                        <input
                            id='passportSyria'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Паспорт серия...' />
                    </div>
                    {/* yigirma besh */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="passportNumber" className='mb-1 ml-1 mt-10 text-sm w-64'>Номер паспорта</label>
                        <input
                            id='passportNumber'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Номер паспорта...' />
                    </div>
                    {/* yigirma olti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="dateStartWork" className='mb-1 ml-1 mt-10 text-sm w-64'>С какого дня будет работать сайт (в цифрах)</label>
                        <input
                            id='dateStartWork'
                            type='date'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='день...' />
                    </div>
                    {/* yigirma yetti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="maritalStatus" className='mb-1 ml-1 mt-10 text-sm w-64'>Семейное положение (женат, неженат, замужем, незамужем, разведен, разведена)</label>
                        <input
                            id='maritalStatus'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Семейная ситуация...' />
                    </div>
                    {/* yigirma sakkiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="positionHeld" className='mb-1 ml-1 mt-10 text-sm w-64'>Занимаемая должность</label>
                        <input
                            id='positionHeld'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Занимаемая должность...' />
                    </div>
                    {/* yigirma tuqqiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="street" className='mb-1 ml-1 mt-10 text-sm w-64'>Улица</label>
                        <input
                            id='street'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Улица...' />
                    </div>
                    {/* uttiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="speciality" className='mb-1 ml-1 mt-10 text-sm w-64'>Специальность</label>
                        <input
                            id='speciality'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Специальность...' />
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