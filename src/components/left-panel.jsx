import React from "react"
import avatar from "../img/default_avatar.png"
import walletIcon from "../img/svg/wallet.svg"
import dashboardIcon from "../img/svg/dashboard.svg"
import neuralIcon from "../img/svg/neural.svg"

class useLeft_panel extends React.Component {
  state = {
    username: localStorage.getItem("username"),
    walletname: localStorage.getItem("walletname"),
  };
  render() {
    return (
      <div className="hidden md:block w-2/5 xl:w-1/5">
        {/* Левый блок */}
        <div className="p-5 pr-10 ">
          {/* Пользователь */}
          <div className="flex items-center flex-col">
            <img
              src={avatar}
              alt="user-avatar"
              className="w-32 rounded-full drop-shadow-lg"
            />

            <h1 className="ml-2 font-bold">{this.state.username}</h1>
          </div>

          {/* Кошельки */}
          <div className="mt-5 ">
            <label className="text-gray-500 font-medium">
              Кошельки
              <ul className="text-black mt-1">
                <h1 className="ml-2 flex items-center cursor-pointer hover:scale-105 duration-300 hover:drop-shadow-lg">
                  <img src={walletIcon} className="mr-2" alt="" />{" "}
                  {this.state.walletname}
                </h1>
              </ul>
            </label>
          </div>

          {/* Модули */}
          <div className="mt-5">
            <label className="text-gray-400 font-medium">
              Модули
              <ul className="text-black mt-1">
                <li className="flex ml-2 hover:scale-105 duration-300 hover:drop-shadow-lg cursor-pointer">
                  <img src={dashboardIcon} className="mr-2" alt="" /> Dashboard
                </li>
                <li className="flex ml-2 mt-1 hover:line-through duration-300 cursor-pointer hover:text-red-500">
                  <img src={neuralIcon} className="mr-2" alt="" /> AI Assistant
                </li>
              </ul>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default useLeft_panel;
