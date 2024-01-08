import { Icon } from "@iconify/react";
// import "./table.css";

function TableUSer() {
  return (
    <div className="flex flex-col pb-10">
      <h1 className="text-center mt-14 mb-8 font-inika font-bold tracking-wide text-4xl">Близкие родственники</h1>
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-lg rounded-2xl">
            <table className="min-w-full">
              <thead className="g-gray-100 border-b">
                <tr className="bg-gray-800 text-white">
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">№</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-0 py-2 text-left">Близкие родственники</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">Фамилия</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">Имя</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">Отечество</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">Место рождения (область)</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">рождения</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">Место работы</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">Должность</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">ИАдрес: г.</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">Область</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">Район</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">Поселок</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">Улица</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">ССГ</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">Дом</th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left">Квар-тира</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr className="bg-white-100 border-b hover:bg-slate-200 duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Mark</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Mark</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Mark</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Mark</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Mark</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                </tr> */}

                <tr className="bg-white-100 border-b hover:bg-slate-200 duration-150">
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2 text-center text-sm font-medium text-gray-900">
                    <Icon icon="eos-icons:three-dots-loading" width="100" height="70" />
                  </td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                  <td className="px-5 py-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TableUSer;
