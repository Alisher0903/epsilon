import React from "react";

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
              Коржовов Бунёд Жура угли{" "}
            </h1>
            <p className="text-xl  tracking-wider mt-2">+998-99-961-51-20</p>
            <h4 className="text-xl font-bold tracking-wider mt-2">
              Оператор систем удаленного контроля
            </h4>
          </div>
        </div>
      </div>
      <div className="w-100 flex">
        <div className="flex justify-center">
          <ul class="list-none w-60">
            <li>Национальност: <span>Узбек</span></li>
            <li>Пол: <span>м </span></li>
            <li>рождения:  <span>199/4/12 </span></li>
            <li>Место рождения:  <span>Кашкадарьинская  </span></li>
            <li>Адрес: г.:  <span>Кarshi  </span></li>
            <li>Область:  <span>Кашкадарьинская </span></li>
            <li>Район:  <span>Гузарский  </span></li>
            <li>Поселок:  <span>jhsdshd </span></li>
            <li>Улица:  <span>Amir temur  </span></li>
            <li>МСГ:  <span>6 мкр </span></li>
            <li>ССГ:  <span>Гузарский  </span></li>
            <li>Дом:  <span>9 А </span></li>
            <li>Квар- тира :  <span>9 А </span></li>
            <li>Образование <span>Высшее </span></li>
            <li>Что и когда окончил: <span>Туринский политехнический университет г. Ташкент 2018-2022гг </span></li>
            
          </ul>
        </div>
        <div>
        <ul class="list-none ">
            <li>Специальность: <span>Механик</span></li>
            <li>С какого числа работает на объекте (цифрами): <span>2023/10/20</span></li>
            <li>С какой даты начал трудовую деятельность: <span>женат</span></li>
            <li>Семейное положение (женат, неженат, замужем, незамужем, разведен, разведена): <span>женат</span></li>
            <li>Телеграмм да/нет: <span>да</span></li>
            <li>Фейсбук да/нет: <span>да</span></li>
            <li>Инстаграмм да/нет: <span>да</span></li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default UserList;
