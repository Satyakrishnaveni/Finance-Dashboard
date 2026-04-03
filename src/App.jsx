import { useState } from "react";
import "./App.css";
import { transactionsData } from "./data/transactions";

import Header from "./components/Header";
import DashboardCards from "./components/DashboardCards";
import Charts from "./components/Charts";
import Insights from "./components/Insights";
import Transactions from "./components/Transactions";

function App() {
  const [transactions] = useState(transactionsData);

  return (
    <div className="app">
     
      <Header />
      <DashboardCards transactions={transactions} />
      <Charts transactions={transactions} />
      <Insights transactions={transactions} />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;