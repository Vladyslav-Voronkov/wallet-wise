import React from "react";
import { slide as Menu } from "react-burger-menu";
import avatar from "../img/default_avatar.png";
import dash_logo from "../img/svg/dashboard.svg";
import ai_assistant from "../img/svg/ai-assistant.svg";
import logo from "../img/logo.png";

class useNav_panel extends React.Component {
  state = {
    username: localStorage.getItem("username"),
    walletname: localStorage.getItem("walletname"),
  };

  render() {
    return (
      <div className="md:hidden sticky top-0 bg-white flex items-center justify-between border-b-2 z-10 overflow-hidden">
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
                  <h1 className="ml-2">{this.state.walletname}</h1>
                </ul>
              </label>
            </div>

            {/* Модули */}
            <div className="mt-5">
              <label className="text-gray-400">
                Модули
                <ul className="text-black mt-1">
                  <li className="flex ">
                    <img
                      className="mr-2 ml-2 mb-2"
                      src={dash_logo}
                      alt="dash-logo"
                    />{" "}
                    Dashboard
                  </li>
                  <li className="flex">
                    <img
                      className="mr-2 ml-2"
                      src={ai_assistant}
                      alt="ai-assistant"
                    />{" "}
                    AI Assistant
                  </li>
                </ul>
              </label>
            </div>
          </div>
        </Menu>
        <div className=" text-white px-3 rounded-md font-bold">
          <img src={logo} alt="" width={60} />
        </div>
      </div>
    );
  }
}

export default useNav_panel;
