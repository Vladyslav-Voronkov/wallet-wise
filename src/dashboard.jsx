/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-direct-mutation-state */
import LP from "./components/left-panel";
import NAV from "./components/nav-panel";
import TB from "./components/oper-table";

import React from "react";

import logo from "./img/logo.png";
import add_oper from "./img/add-oper.gif";
import login_img from "./img/login.gif";

import "./App.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

class useDashboardState extends React.Component {
  state = {
    modalIsOpen: true,
    username: "",
    walletname: "",
    balance: 0,
    expenses: 0,
    profit: 0,
    transaction: [],
    tempAmount: 0,
    tempCategory: "",
    tempType: 0,
    targetName: localStorage.getItem("targetName"),
    targetPrice: localStorage.getItem("targetPrice"),
    // targetDate: new Date(2023, 3 + 3, 20, 18, 0, 0),
    targetDate: 0,
    targetProfit: localStorage.getItem("targetProfit"),
    targetExpenses: localStorage.getItem("targetExpenses"),
  };


  handleClick = () => {
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("walletname", this.state.walletname);
    localStorage.setItem("balance", 0);
    localStorage.setItem("expenses", 0);
    localStorage.setItem("profit", 0);

    const reg = document.getElementById("reg");
    if (reg) {
      reg.style.display = "none";
    }
    window.location.reload();
  };

  addOperation = () => {
    const tempTransaction = {
      amount: this.state.tempAmount,
      category: this.state.tempCategory,
      type: this.state.tempType,
    };

    if (this.state.tempType === 0 || this.state.tempType === "0") {
      this.state.expenses = parseInt(this.state.expenses);
      this.state.expenses += parseInt(this.state.tempAmount);
      localStorage.setItem("expenses", this.state.expenses);
      this.state.balance = parseInt(
        parseInt(this.state.balance) - parseInt(this.state.tempAmount)
      );
      localStorage.setItem("balance", this.state.balance);
    } else if (this.state.tempType === 1 || this.state.tempType === "1") {
      this.state.profit = parseInt(this.state.profit);
      this.state.profit += parseInt(this.state.tempAmount);
      localStorage.setItem("profit", this.state.profit);
      this.state.balance = parseInt(
        parseInt(this.state.balance) + parseInt(this.state.tempAmount)
      );
      localStorage.setItem("balance", this.state.balance);
    }

    if (JSON.parse(localStorage.getItem("transactions")) === null) {
    } else {
      this.state.transaction = JSON.parse(localStorage.getItem("transactions"));
    }

    this.state.transaction.push(tempTransaction);
    localStorage.setItem(
      "transactions",
      JSON.stringify(this.state.transaction)
    );

    const add = document.getElementById("add");
    if (add) {
      add.style.display = "none";
    }
    window.location.reload();
  };

  saveTarget = () => {
    localStorage.setItem("targetName", this.state.targetName);
    localStorage.setItem("targetPrice", this.state.targetPrice);
    localStorage.setItem("targetProfit", this.state.targetProfit);
    localStorage.setItem("targetExpenses", this.state.targetExpenses);

    window.location.reload();
  };

  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  componentDidMount() {
    if (localStorage.getItem("username") === null) {
    } else {
      const reg = document.getElementById("reg");
      if (reg) {
        reg.style.display = "none";
      }
      this.setState({
        username: localStorage.getItem("username"),
        walletname: localStorage.getItem("walletname"),
        expenses: localStorage.getItem("expenses"),
        profit: localStorage.getItem("profit"),
        balance: localStorage.getItem("balance"),
      });
    }
    const add = document.getElementById("add");
    if (add) {
      add.style.display = "none";

      this.closeTargetSettings();
    }

    // Рассчет даты покупки
    this.state.targetDate =
      (this.state.targetPrice - (this.state.targetProfit - this.state.targetExpenses)) /
      (this.state.targetProfit - this.state.targetExpenses);
  }

  modalOpen = () => {
    const add = document.getElementById("add");
    if (add) {
      add.style.display = "flex";
    }
  };

  closeADD = () => {
    const add = document.getElementById("add");
    if (add) {
      add.style.display = "none";
    }
  };

  closeTargetSettings = () => {
    const tg = document.getElementById("targetSettings");
    if (tg) {
      tg.style.display = "none";
    }
  };
  openTargetSettings = () => {
    const tg = document.getElementById("targetSettings");
    if (tg) {
      tg.style.display = "flex";
    }
  };

  render() {
    let data = [
      {
        Месяц: "Апрель",
        Расходы: this.state.expenses,
      },
    ];
    return (
      <div className="bg-white overflow-hidden">
        {/* Target */}
        <div
          className="fixed w-full h-screen overflow-y-scroll z-50 flex justify-center md:items-center items-start p-0 rounded bg-white"
          id="targetSettings"
        >
          <div className="bg-white md:w-1/3 w-full md:rounded">
            <div className=" m-5">
              <h1 className="font-bold text-2xl text-center mb-5 flex items-center justify-between bg-black text-white p-5">
                <img src={add_oper} width={100} className="" alt="" />
                <span>Настройки цели</span>
              </h1>
              <label>
                Цель:
                <input
                  type="text"
                  placeholder="Цель"
                  id="targetName"
                  onChange={this.handleInputChange}
                  value={this.state.targetName}
                  className="w-full border-2 border-black p-2 rounded"
                />
              </label>
              <label>
                Стоимость покупки:
                <input
                  type="number"
                  placeholder="Цена"
                  id="targetPrice"
                  onChange={this.handleInputChange}
                  value={this.state.targetPrice}
                  className="w-full border-2 border-black p-2 rounded"
                />
              </label>
              <label>
                Ежемесячный доход:
                <input
                  type="number"
                  placeholder="Ежемесячный доход"
                  id="targetProfit"
                  onChange={this.handleInputChange}
                  value={this.state.targetProfit}
                  className="w-full border-2 border-black p-2 rounded"
                />
              </label>
              <label>
                Средние ежемесячные расходы:
                <input
                  type="number"
                  placeholder="Средние ежем. расходы"
                  id="targetExpenses"
                  onChange={this.handleInputChange}
                  value={this.state.targetExpenses}
                  className="w-full border-2 border-black p-2 rounded"
                />
              </label>

              <div className="flex justify-between items-center">
                <button
                  className="mt-5 bg-black text-white font-medium text-xl w-2/5 p-2 rounded"
                  onClick={this.saveTarget}
                >
                  Сохранить
                </button>
                <button
                  className="mt-5 bg-black text-white font-medium text-xl w-2/5 ml-2 p-2 rounded"
                  onClick={this.closeTargetSettings}
                >
                  Закрыть
                </button>
              </div>
              <p></p>
            </div>
          </div>
        </div>
        {/* add transaction */}
        <div
          id="add"
          className="fixed bg-white top-0 left-0 z-50 w-full h-screen flex flex-col justify-center items-center"
        >
          <div className="bg-black p-2 rounded-full justify-center">
            <img src={add_oper} width={100} />
          </div>
          <h1 className="text-center font-bold text-2xl mb-5">
            Добавить транзакцию
          </h1>
          <form className="md:w-1/4 w-3/4">
            <select
              id="type"
              className="w-full mt-2 border-2 p-2 h-10 rounded bg-white"
              value={this.state.tempCategory}
              onChange={(e) => this.setState({ tempCategory: e.target.value })}
            >
              <option selected>Категория</option>
              <option value="Продукты и товары для дома">
                Продукты и товары для дома
              </option>
              <option value="Банковские услуги и налоги">
                Банковские услуги и налоги
              </option>
              <option value="Кафе, бары и рестораны">
                Кафе, бары и рестораны
              </option>
              <option value="Кафе, бары и рестораны">Красота и здоровье</option>
              <option value="Транспорт">Транспорт</option>
              <option value="Развлечения">Развлечения</option>
              <option value="Абонентская плата">Абонентская плата</option>
              <option value="Подарки и сувениры">Подарки и сувениры</option>
              <option value="Образование">Образование</option>
              <option value="Спорт">Спорт</option>
              <option value="Обслуживание автомобиля">
                Обслуживание автомобиля
              </option>
              <option value="Питание">Питание</option>
              <option value="Инвестиции">Инвестиции</option>
            </select>
            <input
              type="number"
              name=""
              id="tempAmount"
              placeholder="Сумма операции"
              className="w-full mt-2 border-2 p-2 rounded"
              onChange={this.handleInputChange}
            />
            <select
              id="type"
              className="w-full mt-2 border-2 p-2 rounded h-10 bg-white"
              value={this.state.tempType}
              onChange={(e) => this.setState({ tempType: e.target.value })}
            >
              <option value="#" selected disabled>
                Тип операции
              </option>
              <option value="0">Расход</option>
              <option value="1">Доход</option>
            </select>
            <button
              type="button"
              onClick={this.addOperation}
              className="w-full bg-black text-white mt-5 rounded p-2"
            >
              Добавить
            </button>
            <button
              type="button"
              onClick={this.closeADD}
              className="w-full bg-black text-white mt-5 rounded p-2"
            >
              Закрыть
            </button>
          </form>
        </div>

        <NAV />
        {/* Главный блок */}
        <div className="flex">
          <LP />
          {/* dashboard */}
          <div
            className="bg-gray-50 border-1 h-screen w-screen overflow-scroll dashboard"
            id="dashboard"
          >
            {/* Верхняя часть, там где открытый кошелек и его название */}
            <div className="items-center justify-between sticky top-0 z-40 bg-black text-white p-3 px-0 hidden md:flex px-5 ">
              {/* Активный кошелек */}
              <div className="flex justify-between items-center w-full">
                <h1 className="text-sm text-white font-thin">
                  <span className="text-white">Кошельки / </span>
                  {this.state.walletname}
                </h1>
                <img src={logo} width={50} alt="" />
              </div>
            </div>

            {/* Карточки: Баланс, Расходы, Прибыль */}

            <div>
              <h1 className="text-4xl font-bold text-center my-5 mt-20">
                Добро пожаловать, <span className="text-gray-500">{this.state.username}</span>
              </h1>
              {/* Счета */}
              <div className="flex justify-between p-5 flex-col lg:flex-row">
                {/* Блок счета */}
                <div
                  className="bg-white hover:drop-shadow-2xl duration-300 cursor-pointer p-5 rounded mt-5 lg:w-1/3 w-full  hover:scale-105 lg:mx-2"
                  onClick={this.modalOpen}
                >
                  {/* balance */}
                  <div className="flex justify-center items-center">
                    <div className="flex items-center">
                      {/* <span className="p-2 px-4 bg-green-700 text-white rounded-full font-bold mr-2">
                        $
                      </span> */}
                      <h1 className="text-xl text-gray-700 font-thin">
                        Баланс
                      </h1>
                    </div>
                    {/* stats */}
                    <div className="flex justify-between items-center"></div>
                  </div>
                  {/* balance */}
                  <h1 className="text-center">
                    <h1 className="mt-5 text-3xl font-semibold text-gray-700">
                      {this.state.balance} PLN
                    </h1>
                  </h1>
                </div>

                {/* Блок счета */}
                <div
                  className="bg-white hover:drop-shadow-2xl duration-300 cursor-pointer p-5 rounded mt-5 lg:w-1/3 w-full  hover:scale-105  lg:mx-2"
                  onClick={this.modalOpen}
                >
                  {/* balance */}
                  <div className="flex justify-center items-center">
                    <div className="flex items-center">
                      {/* <span className="p-2 px-4 bg-black text-white rounded-full font-bold mr-2">
                        $
                      </span> */}
                      <button className="text-xl text-gray-700 font-thin">
                        Расходы
                      </button>
                    </div>
                    {/* stats */}
                  </div>
                  {/* balance */}
                  <h1 className="mt-5 text-3xl font-medium text-center text-red-700">
                    <h1 className="mt-5 text-3xl font-semibold text-gray-700">
                      {this.state.expenses} PLN
                    </h1>
                  </h1>
                </div>

                {/* Блок счета */}
                <div
                  className="bg-white hover:drop-shadow-2xl duration-300 cursor-pointer p-5 rounded mt-5 lg:w-1/3 w-full  hover:scale-105  lg:mx-2"
                  onClick={this.modalOpen}
                >
                  {/* balance */}
                  <div className="flex justify-center items-center">
                    <div className="flex items-center">
                      {/* <span className="p-2 px-4 bg-black text-white rounded-full font-bold mr-2">
                        $
                      </span> */}
                      <h1 className="text-xl text-gray-700 font-thin">
                        Прибыль
                      </h1>
                    </div>
                    {/* stats */}
                  </div>
                  {/* balance */}
                  <h1 className="mt-5 text-3xl text-gray-700 font-bold text-center">
                    <h1 className="mt-5 text-3xl font-semibold text-gray-700">
                      {this.state.profit} PLN
                    </h1>
                  </h1>
                </div>
              </div>
            </div>
            {/* График */}
            <div className="p-5 lg:flex items-start justify-between mt-20 mb-10 block">
              <div className="w-full bg-white mr-2 p-5 cursor-pointer  hover:drop-shadow-2xl duration-300">
                <h1 className="text-2xl font-bold text-center mb-5 border-b-2 py-2 border-black">
                  График расходов
                </h1>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <XAxis dataKey="Месяц" stroke="#1D8544" />
                    <YAxis />
                    <Tooltip
                      wrapperStyle={{ width: 100, backgroundColor: "#fff" }}
                    />
                    <CartesianGrid stroke="#fff" strokeDasharray="5 5" />
                    <Bar
                      dataKey="Расходы"
                      fill="#1D8544"
                      barSize={50}
                      radius={[0, 0, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="xl:w-1/3 bg-white p-5 lg:rounded lg:hover:drop-shadow-2xl duration-300">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-medium">🏹 Цель</h1>
                  <button
                    className="text-sm font-thin bg-black text-white p-2 px-4 duration-300 rounded-full"
                    onClick={this.openTargetSettings}
                  >
                    Настройки
                  </button>
                </div>
                <br />
                <hr />
                <br />

                <div>
                  <div className="flex justify-between items-center ">
                    <h1 className="font-bold text-xl md:w-1/3 w-2/5">
                      {/* {this.state.targetName} */}
                      {this.state.targetName}
                    </h1>
                    <p className="font-bold text-green-500">
                      {this.state.targetPrice}
                      <span className="text-green-300"> PLN</span>
                    </p>
                  </div>
                  <h1 className="mt-4">
                    Ориентировочная дата покупки через:{" "}
                    <span className="font-bold">
                      {this.state.targetDate.toLocaleString()} м.
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            {/* Таблица */}
            <div>
              <TB />
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 w-screen pb-5 pt-4 px-10 block md:hidden">
          <ul className="flex items-center justify-center ">
            <button
              className="bg-black px-5 py-2 flex justify-center items-center rounded-md text-white text-md"
              onClick={this.modalOpen}
            >
              + Добавить
            </button>
          </ul>
        </div>

        {/* Local Register */}
        <div
          className="fixed top-0 left-0 w-full h-screen z-50 bg-white flex flex-col justify-center px-12 lg:px-96"
          id="reg"
        >
          <div className="w-full flex justify-center">
            <img
              src={login_img}
              alt=""
              width={100}
              className="justify-center items-center bg-black rounded"
            />
          </div>
          <h1 className="text-2xl font-bold text-center">
            Добро пожаловать в Wallet Wise!
          </h1>
          <form action="/" className="mt-5 block">
            <input
              id="username"
              type="text"
              placeholder="Имя пользователя"
              className="w-full border-2 p-2 rounded"
              onChange={this.handleInputChange}
            />
            <input
              id="walletname"
              type="text"
              placeholder="Имя кошелька"
              className="w-full mt-2 border-2 p-2 rounded"
              onChange={this.handleInputChange}
            />
          </form>
          <button
            className="mt-4 rounded py-2 text-white bg-black font-bold w-full"
            onClick={this.handleClick}
          >
            Начать
          </button>
        </div>
      </div>
    );
  }
}

export default useDashboardState;
