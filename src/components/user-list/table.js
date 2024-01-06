
import "./table.css";
function TableUSer() {
  return (
    <div class="flex flex-col pb-10">
      <h1 class="text-center">Близкие родственники</h1>
      <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow-lg rounded-2xl">
            <table class="min-w-full">
              <thead class="g-gray-100 border-b">
                <tr className="bg-gray-800 text-white">
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    №
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-0 py-2 text-left"
                  >
                    Близкие родственники
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    Фамилия
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    Имя
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    Отечество
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    Место рождения (область)
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    рождения
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    Место работы
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    Должность
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    ИАдрес: г.
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    Область
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    Район
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    Поселок
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    Улица
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    ССГ
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    Дом
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 text-left"
                  >
                    Квар- тира
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white-100 border-b hover:bg-slate-200 duration-150">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    1
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Mark
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Otto
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @mdo
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Mark
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Otto
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @mdo
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Mark
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Otto
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @mdo
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Mark
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Otto
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @mdo
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Mark
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Otto
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @mdo
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @mdo
                  </td>
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
