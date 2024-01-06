import React from 'react'

const Home = () => {
    return (
        <div className='bg-gradient-to-t from-green-200 to-teal-500 w-full h-[800px] flex justify-center'>
            <div className='container'>
                <div className='flex justify-center flex-col items-center mt-5 w-full font-inika'>
                    <h3 className='text-xxl font-bold text-headColor'>Epsilon Development Company</h3>
                    <p className='px-16 mt-3'>
                        Lorem ipsum dolor sit amet consectetur. Sed dui eu odio viverra sit aliquam lectus.
                        Velit nisl dictum sollicitudin felis dictumst proin ipsum mauris. Blandit eget nisl
                        nec libero eleifend porttitor. Enim erat tortor ultrices penatibus.
                    </p>
                </div>
                <div>
                    <button>Xodim qo'shish</button>
                    <input type="text" placeholder='🔍 Qidirish...' />
                </div>
                <div>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Full name</th>
                                <th>Group name</th>
                                <th>Exchanges</th>
                                <th>Task</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-gray-200 text-center">
                                <td className="px-5 py-3 whitespace-nowrap text-gray-500">1</td>
                                <td className="px-5 py-3 whitespace-nowrap text-gray-500">className</td>
                                <td className="px-5 py-3 whitespace-nowrap text-gray-500">as</td>
                                <td className="px-5 py-3 whitespace-nowrap text-gray-500">asdf</td>
                                <td className="px-5 py-3 whitespace-nowrap text-gray-500">dfdg</td>
                                {/* <td className="px-5 py-3 whitespace-nowrap text-right">
                                <CircularProgress percentage={student.task} color={student.color} />
                            </td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;