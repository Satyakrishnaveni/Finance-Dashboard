const DashboardCards = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="cards">
      
      <div className="card">
        <h4 className="card-title">Total Balance</h4>
        <h2 className="card-value">${balance.toFixed(2)}</h2>
        <div className="icon blue">💲</div>
      </div>
      <div className="card">
        <h4 className="card-title">Income</h4>
        <h2 className="card-value">${income.toFixed(2)}</h2>
        <div className="icon green">📈</div>
      </div>
      <div className="card">
        <h4 className="card-title">Expenses</h4>
        <h2 className="card-value">${expense.toFixed(2)}</h2>
        <div className="icon red">📉</div>
      </div>
    </div>
  );
};

export default DashboardCards;