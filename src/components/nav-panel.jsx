import React from "react";
import { slide as Menu } from "react-burger-menu";
import avatar from "../img/default_avatar.png";
import logo from "../img/logo.png";
import feedback from "../img/feedback.gif";
import walletIcon from "../img/svg/wallet.svg";
import dashboardIcon from "../img/svg/dashboard.svg";
import neuralIcon from "../img/svg/neural.svg";

class useNav_panel extends React.Component {
  state = {
    username: localStorage.getItem("username"),
    walletname: localStorage.getItem("walletname"),
  };

  render() {
    return (
      <div className="md:hidden sticky top-0 bg-black flex items-center justify-between z-10 overflow-hidden">
        <Menu>
          <div>
            {/* Пользователь */}
            <div className="flex items-center">
              <img
                src={avatar}
                alt="user-avatar"
                className="w-10 rounded-full"
              />
              <h1 className="ml-2">{this.state.username}</h1>
            </div>

            {/* Кошельки */}
            <div className="mt-5">
              <label className="text-gray-400">
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
              <label className="text-gray-400">
                Модули
                <ul className="text-black mt-1">
                  <li className="flex ml-2 hover:scale-105 duration-300 hover:drop-shadow-lg cursor-pointer">
                    <img src={dashboardIcon} className="mr-2" alt="" />{" "}
                    Dashboard
                  </li>
                  <li className="flex ml-2 mt-1 hover:line-through duration-300 cursor-pointer hover:text-red-500">
                    <img src={neuralIcon} className="mr-2" alt="" /> AI
                    Assistant
                  </li>
                  <li className="flex ml-2 items-center font-bold bg-black text-white rounded p-2 mt-5 cursor-pointer">
                    <img src={feedback} width={50} alt="" /> Отзыв
                  </li>
                </ul>
              </label>
            </div>
          </div>
        </Menu>
        <div className=" text-white px-3 rounded-md font-bold">
          <img src={logo} alt="" width={60} className="bg-black p-3" />
        </div>
      </div>
    );
  }
}

export default useNav_panel;
