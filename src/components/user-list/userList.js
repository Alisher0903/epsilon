import React from "react";
import TableUSer from "./table";

function UserList() {
  return (
    <div className=" bg-slate-300 pt-4">
      <div className=" w-100 flex justify-center">
        <div className="items-center">
          <div className=" flex justify-center ">
            <img
              className="rounded-full object-cover w-40 h-40"
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/10/e6/b0.jpg"
              alt="."
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-wider mt-4">
              Коржовов Бунёд Жура угли
            </h1>
            <p className="text-xl  tracking-wider mt-2">+998-99-961-51-20</p>
            <h4 className="text-xl font-bold tracking-wider mt-2">
              Оператор систем удаленного контроля
            </h4>
          </div>
        </div>
      </div>
      <div className="w-100 flex justify-center mt-5">
        <div className="flex">
          <ul class="list-none">
            <div className="listlar">
              <li className="mb-2">Национальност:</li>
              <span className="font-bold ms-10">Узбек</span>
            </div>
            <div className="listlar">
              <li className="mb-2">Пол:</li>
              <span className="font-bold ms-10">м </span>
            </div>
            <div className="listlar">
              <li className="mb-2">рождения:</li>
              <span className="font-bold ms-10">199/4/12 </span>
            </div>
            <div className="listlar">
              <li className="mb-2">Место рождения: </li>
              <span className="font-bold ms-10">Кашкадарьинская </span>
            </div>
            <div className="listlar">
              <li className="mb-2">Адрес: г.:</li>
              <span className="font-bold ms-10">Кarshi </span>
            </div>
            <div className="listlar">
              <li className="mb-2">Область:</li>
              <span className="font-bold ms-10">Кашкадарьинская </span>
            </div>
            <div className="listlar">
              <li className="mb-2">Район:</li>
              <span className="font-bold ms-10">Гузарский </span>
            </div>
            <div className="listlar">
              <li className="mb-2">Поселок:</li>
              <span className="font-bold ms-10">jhsdshd </span>
            </div>
            <div className="listlar">
              <li className="mb-2">Улица:</li>
              <span className="font-bold ms-10">Amir temur </span>
            </div>
            <div className="listlar">
              <li className="mb-2">МСГ:</li>
              <span className="font-bold ms-10">6 мкр </span>
            </div>
            <div className="listlar">
              <li className="mb-2">ССГ:</li>
              <span className="font-bold ms-10">Гузарский </span>
            </div>
            <div className="listlar">
              <li className="mb-2">Дом:</li>
              <span className="font-bold ms-10">9 А </span>
            </div>
            <div className="listlar">
              <li className="mb-2">Квар- тира :</li>
              <span className="font-bold ms-10">9 А </span>
            </div>
            <div className="listlar">
              <li className="mb-2">Образование</li>
              <span className="font-bold ms-10">Высшее </span>
            </div>
            <div className="listlar">
              <li className="mb-2">Что и когда окончил: </li>
              <span className="font-bold ">
                Туринский политехнический университет г. Ташкент 2018-2022гг
              </span>
            </div>
          </ul>
        </div>
        <div>
          <ul class="list-none ">
            <div className="listlar">
              <li className="mb-2">Специальность:</li>
              <span className="font-bold ms-10">Механик</span>
            </div>
            <div className="listlar">
              <li className="mb-2">
                С какого числа работает на объекте (цифрами):
              </li>
              <span className="font-bold ms-10">2023/10/20</span>
            </div>
            <div className="listlar">
              <li className="mb-2">
                С какой даты начал трудовую деятельность:
              </li>
              <span className="font-bold ms-10">женат</span>
            </div>
            <div className="listlar">
              <li className="mb-2">
                Семейное положение (женат, неженат, замужем, незамужем,
                разведен, разведена):
              </li>
              <span className="font-bold ms-10">женат</span>
            </div>
            <div className="listlar">
              <li className="mb-2">Телеграмм да/нет:</li>
              <span className="font-bold ms-10">да</span>
            </div>
            <div className="listlar">
              <li className="mb-2">Фейсбук да/нет:</li>
              <span className="font-bold ms-10">да</span>
            </div>
            <div className="listlar">
              <li className="mb-2">Инстаграмм да/нет:</li>
              <span className="font-bold ms-10">да</span>
            </div>
          </ul>
        </div>
      </div>

      <TableUSer/>
    </div>
  );
}

export default UserList;
