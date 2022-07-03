import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { Header } from "./components/Header";
import { AddItem } from "./components/AddItem";
import { ListHeader } from "./components/ListHeader";
import { List } from "./components/List";
import { NoCard } from "./components/NoCard";
import { TotalMoney } from "./components/TotalMoney";
import "./reset.css";
import "./App.css";

function App() {
  const [pagInicial, setPagInicial] = useState(true);
  const [listTransactions, setListTransactions] = useState([]);
  const [fixedTransactions, setFixedTransactions] = useState([]);

  return (
    <div>
      {pagInicial ? (
        <HomePage setPage={setPagInicial} />
      ) : (
        <div>
          <Header setPage={setPagInicial} />
          <div className="mainContent">
            <aside>
              <AddItem
                setTransaction={setListTransactions}
                fixedTransactions={fixedTransactions}
                setFixedTransactions={setFixedTransactions}
              />
              {listTransactions.length > 0 ? (
                <TotalMoney transactions={listTransactions} />
              ) : (
                <div></div>
              )}
            </aside>
            <div className="listContent">
              <ListHeader
                setListTransactions={setListTransactions}
                fixedTransactions={fixedTransactions}
              />
              {listTransactions.length > 0 ? (
                <List
                  transactions={listTransactions}
                  setTransaction={setListTransactions}
                  fixedTransactions={fixedTransactions}
                  setFixedTransactions={setFixedTransactions}
                />
              ) : (
                <NoCard />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
