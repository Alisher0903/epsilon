import React from 'react';

const PlusUserInfo = () => {
    return (
        <>
            <div className='flex flex-wrap justify-center pb-6 mt-10'>
                {/* bir */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="familiyasi" className='mb-1 ml-1 mt-6 text-sm w-64'>Фамилия</label>
                    <input
                        id='familiyasi'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Фамилия...' />
                </div>
                {/* ikki */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="ismi" className='mb-1 ml-1 mt-6 text-sm w-64'>Имя</label>
                    <input
                        id='ismi'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Имя...' />
                </div>
                {/* uch */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="ochestva" className='mb-1 ml-1 mt-6 text-sm w-64'>Отечество</label>
                    <input
                        id='ochestva'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Отечество...' />
                </div>
                {/* turt */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqinQarindosh" className='mb-1 ml-1 mt-6 text-sm w-64'>Близкие родственники</label>
                    <input
                        id='yaqinQarindosh'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Близкие родственники...' />
                </div>
                {/* besh */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqiniTugilganKun" className='mb-1 ml-1 mt-6 text-sm w-64'>день рождения</label>
                    <input
                        id='yaqiniTugilganKun'
                        type='number'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='день рождения...' />
                </div>
                {/* olti */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqiniTugilganOy" className='mb-1 ml-1 mt-6 text-sm w-64'>месяц рождения</label>
                    <input
                        id='yaqiniTugilganOy'
                        type='number'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='месяц рождения...' />
                </div>
                {/* yetti */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqiniTugilganYil" className='mb-1 ml-1 mt-6 text-sm w-64'>год рождения</label>
                    <input
                        id='yaqiniTugilganYil'
                        type='number'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='год рождения...' />
                </div>
                {/* sakkiz */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqinTugilganJoy" className='mb-1 ml-1 mt-6 text-sm w-64'>Место рождения</label>
                    <input
                        id='yaqinTugilganJoy'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Место рождения...' />
                </div>
                {/* tuqqiz */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqiniAdresi" className='mb-1 ml-1 mt-6 text-sm w-64'>Адрес: г.</label>
                    <input
                        id='yaqiniAdresi'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Адрес: г....' />
                </div>
                {/* o'n */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqiniViloyati" className='mb-1 ml-1 mt-6 text-sm w-64'>Область</label>
                    <input
                        id='yaqiniViloyati'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Область...' />
                </div>
                {/* un bir */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqiniTumani" className='mb-1 ml-1 mt-6 text-sm w-64'>Район</label>
                    <input
                        id='yaqiniTumani'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Район...' />
                </div>
                {/* un ikki */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqiniQishlogi" className='mb-1 ml-1 mt-6 text-sm w-64'>Поселок</label>
                    <input
                        id='yaqiniQishlogi'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Поселок...' />
                </div>
                {/* un uch */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqiniMsg" className='mb-1 ml-1 mt-6 text-sm w-64'>МСГ</label>
                    <input
                        id='yaqiniMsg'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='МСГ...' />
                </div>
                {/* un turt */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqiniSsg" className='mb-1 ml-1 mt-6 text-sm w-64'>ССГ</label>
                    <input
                        id='yaqiniSsg'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='ССГ...' />
                </div>
                {/* un besh */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqiniUy" className='mb-1 ml-1 mt-6 text-sm w-64'>Дом</label>
                    <input
                        id='yaqiniUy'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Дом...' />
                </div>
                {/* un olti */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqiniKvartira" className='mb-1 ml-1 mt-6 text-sm w-64'>Квар-тира</label>
                    <input
                        id='yaqiniKvartira'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Квар-тира...' />
                </div>
                {/* un yetti */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="kochasi" className='mb-1 ml-1 mt-6 text-sm w-64'>Улица</label>
                    <input
                        id='kochasi'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Улица...' />
                </div>
                {/* un sakkiz */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="yaqiniIshJoyi" className='mb-1 ml-1 mt-6 text-sm w-64'>Место работы</label>
                    <input
                        id='yaqiniIshJoyi'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Место работы...' />
                </div>
                {/* un toqqiz */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="lavozimi" className='mb-1 ml-1 mt-6 text-sm w-64'>Должность</label>
                    <input
                        id='lavozimi'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Должность...' />
                </div>
            </div>
        </>
    )
}

export default PlusUserInfo