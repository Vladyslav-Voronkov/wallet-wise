import fold_icon from "../img/svg/fold.svg";

function oper_table() {
  return (
    // Все операции
    <div className="p-2 m-4">
      {/* Панель с надписью "Операции" и кнопкой "Показать все" */}
      <div className="border-b-4 my-2 flex items-center justify-between ">
        <h1 className="mb-2 text-2xl">Операции</h1>
        <button className="p-1 text-gray-500">Показать все</button>
      </div>

      {/* Операция */}
      <div className="bg-white rounded p-2 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-10" src={fold_icon} alt="fold-icon" />
            <h1 className="text-md ml-2">Зарплата</h1>
          </div>
          <h1 className="ml-10 text-green-500 text-2xl">
            5160<span className="text-green-300 text-xl">.00</span>
          </h1>
        </div>
      </div>

      {/* Операция */}
      <div className="bg-white rounded p-2 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-10" src={fold_icon} alt="fold-icon" />
            <h1 className="text-md ml-2">Spotify</h1>
          </div>
          <h1 className="ml-10 text-red-500 text-2xl">
            -19<span className="text-red-300 text-xl">.99</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default oper_table;
