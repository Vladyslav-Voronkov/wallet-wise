import React from "react"
import avatar from "../img/default_avatar.png"
import feedback from "../img/feedback.gif"

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
            <img src={avatar} alt="user-avatar" className="w-32 rounded-full drop-shadow-lg" />

            <h1 className="ml-2 font-bold">{this.state.username}</h1>
          </div>

          {/* Кошельки */}
          <div className="mt-5 ">
            <label className="text-gray-500 font-medium">
              Кошельки
              <ul className="text-black mt-1">
                <h1 className="ml-2">💳 {this.state.walletname}</h1>
              </ul>
            </label>
          </div>

          {/* Модули */}
          <div className="mt-5">
            <label className="text-gray-400 font-medium">
              Модули
              <ul className="text-black mt-1">
                <li className="flex ml-2 ">📥 Dashboard</li>
                <li className="flex ml-2">🧠 AI Assistant</li>
                <li className="flex ml-2 items-center font-bold bg-black text-white rounded p-2 mt-2 cursor-pointer"><img src={feedback} width={50} alt="" /> Отзыв</li>
              </ul>
            </label>
          </div>
        </div>

          <h1 className="text-center font-bold p-2">
            Wallet Wise
          </h1>
      </div>
    );
  }
}

export default useLeft_panel;
