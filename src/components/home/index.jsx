import React, { useEffect, useState } from 'react';
import img from '../assets/table-img.png';
import { Link } from 'react-router-dom';
import { byId, config, getFile, setConfig, url } from '../api';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';
import NavbarDef from '../navbar/navbar';

const Home = () => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fileName, setFileName] = useState("");

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFileName(selectedFile.name);
        } else {
            setFileName("");
        }
    };

    useEffect(() => {
        setConfig();
        getUser();
    }, []);

    // getUser
    const getUser = () => {
        axios.get(url + "user", config)
            .then(res => setUser(res.data.body))
            .catch(() => console.log("kelmadi!"))
    }

    // goUserAdd
    const goUserAdd = () => byId("userAdd").click();
    const goUserInfo = () => byId("userInfo").click();

    // search
    const searchUser = () => {
        let searchVal = byId("searchIn").value;
        if (!!searchVal) {
            axios.post(url + "user/filter?data=" + searchVal, {
                headers: {
                    Authorization: sessionStorage.getItem("jwtToken"),
                }
            })
                .then(res => {
                    setUser(res.data.body)
                })
                .catch((err) => {
                    if (err.response.data.success === false) {
                        toast.error("Siz qidirgan ma'lumot topilmadi❌")
                        setUser([]);
                    }
                })
        }
        else getUser();
    }

    function checkKeyPress(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            byId("inputBtn").click();
        }
    }

    const importFile = () => {
        setLoading(true);
        axios.get(url + "user/exportExcel", { responseType: 'blob' }, config)
            .then(res => {
                const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'filename.xlsx';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            })
            .catch(error => {
                console.error('Error downloading file:', error);
                toast.error("Xatolik yuz berdi");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const exportFileExel = () => {
        let addFile = new FormData()
        addFile.append("file", byId("fileInput").files[0])
        axios.post(url + "user/importExcel", addFile, config)
            .then(() => {
                exBtnInline();
                toast.success("Faylingiz muvaffaqiyatli junatildi✔")
            })
            .catch(err => {
                exBtnInline();
                toast.error("Xatolik yuz berdi❌")
                console.log(err);
            })
    }

    const exBtnFunc = () => {
        byId("exBtn").style.display = "none";
        byId("exBtnTwo").style.display = "inline";
    }

    const exBtnInline = () => {
        byId("exBtn").style.display = "inline";
        byId("exBtnTwo").style.display = "none";
        setFileName("");
    }

    console.log(user);
    return (
        <>
            <NavbarDef />
            <div className='bg-gradient-to-t from-green-200 min-h-screen to-teal-500 w-full flex justify-center'>
                <Link to="/user/add" id='userAdd'></Link>
                <Link to="/user info" id='userInfo'></Link>
                <div className='container'>
                    <div className='flex justify-center flex-col items-center mt-5 w-full font-inika'>
                        <h3 className='text-xxl font-bold text-headColor'>Компания Эпсилон Девелопмент</h3>
                        <p className='px-20 mt-3 text-xl font-semibold text-infoColor leading-7'>
                            Lorem ipsum dolor sit amet consectetur. Sed dui eu odio viverra sit aliquam lectus.
                            Velit nisl dictum sollicitudin felis dictumst proin ipsum mauris. Blandit eget nisl
                            nec libero eleifend porttitor. Enim erat tortor ultrices penatibus.
                        </p>
                    </div>
                    <div className='flex justify-between items-center mt-8'>
                        <div>
                            <button onClick={goUserAdd} className='addBtn mr-4 bg-gradient-to-t from-cyan-600 via-blue-500 to-cyan-600 font-inika active:scale-90 duration-200'>
                                Добавить сотрудника
                            </button>
                            <button onClick={importFile} disabled={loading} className='addBtn mr-4 bg-btnBgIm font-inika active:scale-90 duration-200'>
                                {loading ?
                                    <>
                                        Импортировать
                                        <Icon className='inline-block ml-2' icon="line-md:downloading-loop" width="27" />
                                    </> :
                                    <>
                                        Импортировать
                                        <Icon className='inline-block ml-2' icon="material-symbols:downloading" width="27" />
                                    </>
                                }
                            </button>
                            <button
                                onClick={exBtnFunc}
                                id='exBtn'
                                className='addBtn bg-btnBgEx font-inika active:scale-90 duration-200'>
                                <label htmlFor="fileInput" className="cursor-pointer active:scale-90 duration-200">
                                    <span className='tracking-wider'>Загрузите файл</span>
                                    <Icon icon="material-symbols:downloading" className='inline-block ml-2' width="27" rotate={2} />
                                </label>
                                <input id="fileInput" type="file" className="hidden" onChange={handleFileChange} />
                            </button>
                            <button
                                onClick={exportFileExel}
                                style={{ display: "none" }}
                                id='exBtnTwo'
                                className='addBtn bg-btnBgEx font-inika active:scale-90 duration-200'>
                                <span className='tracking-wider'>Экспорт</span>
                                <Icon icon="material-symbols:downloading" className='inline-block ml-2' width="27" rotate={2} />
                            </button>
                            <span className='tracking-wider'>{fileName}</span>
                        </div>
                        <div>
                            <label
                                for="searchIn"
                                className="sr-only">Label</label>
                            <div className="flex rounded-xl shadow-lg overflow-hidden">
                                <input
                                    id="searchIn"
                                    onKeyDown={checkKeyPress}
                                    className='py-2.5 ps-4 shadow-lg w-64 bg-slate-200 focus:outline-none focus:bg-slate-100
                                    duration-500 placeholder:font-inika text-gray-700'
                                    placeholder='Поиск...' />
                                <button
                                    onClick={searchUser}
                                    id='inputBtn'
                                    className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center 
                                    gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white 
                                    hover:bg-blue-700 duration-200 disabled:opacity-50 disabled:pointer-events-none 
                                    dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    <svg className="flex-shrink-0 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.3-4.3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
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
                                    <th className='px-5 py-3'>Действие</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user ?
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
                                                    className='addBtn bg-infoBtnBg text-black font-inika active:scale-90 duration-200'>Дополнительный</button>
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
                        <nav aria-label="Page navigation example">
                            <ul class="flex items-center -space-x-px h-10 text-base">
                                <li>
                                    <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <span class="sr-only">Previous</span>
                                        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <span class="sr-only">Next</span>
                                        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;