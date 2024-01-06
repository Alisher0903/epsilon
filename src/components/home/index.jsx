import React from 'react'

const Home = () => {
    return (
        <div className='bg-gradient-to-t from-green-200 to-teal-500 w-full flex justify-center'>
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
                    <button className='addBtn bg-gradient-to-t from-cyan-600 via-blue-500 to-cyan-600 font-inika active:scale-90 duration-200'>
                        Xodim qo'shish
                    </button>
                    <input type="text" placeholder='🔍 Qidirish...' />
                </div>
                <div className='mt-10 mb-5 rounded-xl overflow-hidden'>
                    <table className="w-full text-center bg-white">
                        <thead>
                            <tr className='bg-gray-800 text-white'>
                                <th className='px-5 py-3'>#</th>
                                <th className='px-5 py-3'>Full name</th>
                                <th className='px-5 py-3'>Group name</th>
                                <th className='px-5 py-3'>Exchanges</th>
                                <th className='px-5 py-3'>Task</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t text-gray-500 even:bg-slate-100 hover:bg-slate-200 duration-150">
                                <td className="px-5 py-3">1</td>
                                <td className="px-5 py-3">className</td>
                                <td className="px-5 py-3">as</td>
                                <td className="px-5 py-3">asdf</td>
                                <td className="px-5 py-3">dfdg</td>
                            </tr>
                            <tr className="border-t text-gray-500 even:bg-slate-100 hover:bg-slate-200 duration-150">
                                <td className="px-5 py-3">1</td>
                                <td className="px-5 py-3">className</td>
                                <td className="px-5 py-3">as</td>
                                <td className="px-5 py-3">asdf</td>
                                <td className="px-5 py-3">dfdg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;