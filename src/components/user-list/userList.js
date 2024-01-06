import React from "react";

function UserList() {
  return (
    <div className="ml-3 back-user">
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
            <h1 className="text-3xl font-bold tracking-wider mt-4">Коржовов Бунёд Жура угли </h1>
            <p className="text-xl  tracking-wider mt-2">+998-99-961-51-20</p>
            <h4 className="text-xl font-bold tracking-wider mt-2">Оператор систем удаленного контроля</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
