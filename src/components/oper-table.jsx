import React from "react";
class oper_table extends React.Component {
  state = {
    transactions: JSON.parse(localStorage.getItem("transactions")),
    currency: localStorage.getItem("currency"),
  };

  deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  }
  render() {
    return (
      // Все операции
      <div className="p-2 m-4 mb-72">
        {/* Панель с надписью "Операции" и кнопкой "Показать все" */}
        <div className="border-b-4 my-2 flex items-center justify-between ">
          <button className="bg-red-500 rounded px-5 py-2 mb-5 text-white" onClick={this.deleteAccount}>Удалить аккаунт</button>
          <h1 className="mb-2 text-2xl">Операции</h1>
          <button className="p-1 text-gray-500">Показать все</button>
        </div>
        {/* Операция */}
        <div>
          {console.log(this.state.transactions)}
          {Array.isArray(this.state.transactions) &&
          this.state.transactions.length ? (
            <ul>
              {this.state.transactions.map((transaction) => (
                <li key={transaction.id}>
                  <div className="bg-white rounded p-2 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center w-1/3">
                        <span>&#127866;</span>
                        <h1 className="text-md ml-2">{transaction.category}</h1>
                      </div>
                      {transaction.type === 0 || transaction.type === "0" ? (
                        <h1 className="ml-10 text-red-500 text-2xl">
                          {parseInt(transaction.amount)}
                          <span className="text-red-300 text-xl"> {this.state.currency}</span>
                        </h1>
                      ) : (
                        <h1 className="ml-10 text-green-500 text-2xl">
                          {parseInt(transaction.amount)}
                          <span className="text-green-300 text-xl"> {this.state.currency}</span>
                        </h1>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No transactions found.</p>
          )}
        </div>
        {/* Операция */}
        {/* <div className="bg-white rounded p-2 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="w-10" src={fold_icon} alt="fold-icon" />
              <h1 className="text-md ml-2">Spotify</h1>
            </div>
            <h1 className="ml-10 text-red-500 text-2xl">
              -19<span className="text-red-300 text-xl">.99</span>
            </h1>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default oper_table;
