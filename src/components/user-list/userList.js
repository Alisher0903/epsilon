import React, { useEffect, useState } from "react";
import TableUSer from "./table";
import axios from "axios";
import { config, getFile, setConfig, url } from "../api";
import img from "../assets/userImg.png";
import NavbarDef from "../navbar/navbar";

function UserList() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setConfig();
    getUser();
  }, []);

  // getUser
  const getUser = () => {
    let userInfoID = sessionStorage.getItem("userInID");
    axios.get(url + "user/" + userInfoID, config)
      .then(res => setUser(res.data.body))
      .catch(() => console.log("kelmadi!"))
  }

  return (
    <>
      <NavbarDef />
      <div className=" bg-slate-300 pt-4">
        <div className=" w-100 flex justify-center">
          <div className="items-center">
            <div className=" flex justify-center ">
              <img
                className="rounded-full object-cover w-40 h-40"
                src={user.attachmentId === null
                  ? img
                  : getFile + user.attachmentId
                }
                alt="user"
              />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-wider mt-4">
                {user.lastName} {user.firstName} {user.middleName}
              </h1>
              <p className="text-xl  tracking-wider mt-2">
                {user.phoneNumber === null ? "Нет номера телефона" : user.phoneNumber}
              </p>
              <h4 className="text-2xl font-semibold tracking-wider mt-2">
                {user.positionHeld}
              </h4>
            </div>
          </div>
        </div>
        <div className="w-100 flex justify-center items-start mt-10 px-24">
          <div className="flex w-1/2">
            <ul class="list-none w-full pr-10">
              <div className="listlar">
                <li className="mb-2">Национальност:</li>
                <span className="font-bold ms-10">{user.nationality}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Пол:</li>
                <span className="font-bold ms-10">{user.gender}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">День рождения:</li>
                <span className="font-bold ms-10">{user.day}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Месяц рождения:</li>
                <span className="font-bold ms-10">{user.month}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Год рождения:</li>
                <span className="font-bold ms-10">{user.year}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Место рождения: </li>
                <span className="font-bold ms-10">{user.placeOfBirth}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Адрес: г.:</li>
                <span className="font-bold ms-10">{user.addressCity}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Область:</li>
                <span className="font-bold ms-10">{user.region}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Район:</li>
                <span className="font-bold ms-10">{user.district}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Поселок:</li>
                <span className="font-bold ms-10">{user.village}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Улица:</li>
                <span className="font-bold ms-10">{user.street}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">МСГ:</li>
                <span className="font-bold ms-10">{user.mcg}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">ССГ:</li>
                <span className="font-bold ms-10">{user.ccg}</span>
              </div>
            </ul>
          </div>
          <div className="w-1/2">
            <ul class="list-none pl-10">
              <div className="listlar">
                <li className="mb-2">Дом:</li>
                <span className="font-bold ms-10">{user.home}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Квар - тира:</li>
                <span className="font-bold ms-10">{user.flat}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Образование:</li>
                <span className="font-bold ms-10">{user.education}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Что и когда окончил:</li>
                <span className="font-bold ">{user.school}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Специальность:</li>
                <span className="font-bold ms-10">{user.speciality}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">
                  С какого числа работает на объекте (цифрами):
                </li>
                <span className="font-bold ms-10">
                  {user.startWorkingDay}
                </span>
              </div>
              <div className="listlar">
                <li className="mb-2">
                  С какого месяца будет работать на сайте (в цифрах)::
                </li>
                <span className="font-bold ms-10">
                  {user.startWorkingMonth}
                </span>
              </div>
              <div className="listlar">
                <li className="mb-2">
                  С какого года работает на сайте (в цифрах)::
                </li>
                <span className="font-bold ms-10">
                  {user.startWorkingYear}
                </span>
              </div>
              <div className="listlar">
                <li className="mb-2">
                  С какой даты начал трудовую деятельность:
                </li>
                <span className="font-bold ms-10">{user.dateStartWork}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">
                  Семейное положение (женат, неженат, замужем, незамужем,
                  разведен, разведена):
                </li>
                <span className="font-bold ms-10">{user.maritalStatus}</span>
              </div>
              <div className="listlar">
                <li className="mb-2">Серия и номер паспорта:</li>
                <span className="font-bold ms-10">{user.passportSyria} {user.passportNumber}</span>
              </div>
            </ul>
          </div>
        </div>
        <TableUSer />
      </div>
    </>
  );
}

export default UserList;
