import { useState } from "react";

const Transactions = ({ transactions }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = transactions
    .filter((t) => filter === "all" || t.type === filter)
    .filter(
      (t) =>
        (t.description || "").toLowerCase().includes(search.toLowerCase()) ||
        (t.category || "").toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="transactions-container">
     
      <div className="tx-header">
        <h2>Transactions</h2>

        <div className="tx-actions">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="add-btn">+ Add</button>
        </div>
      </div>

     
      <div className="filters">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : ""}
        >
          All
        </button>

        <button
          onClick={() => setFilter("income")}
          className={filter === "income" ? "active" : ""}
        >
          Income
        </button>

        <button
          onClick={() => setFilter("expense")}
          className={filter === "expense" ? "active" : ""}
        >
          Expense
        </button>
      </div>

     
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Date</th>
            <th style={{ textAlign: "right" }}>Amount</th>
            <th style={{ textAlign: "right" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((t) => (
            <tr key={t.id}>
             
              <td>{t.description}</td>

              <td>
                <span className="badge">{t.category}</span>
              </td>

              <td>{t.date}</td>
              <td
                className={t.type === "income" ? "green" : "red"}
                style={{ textAlign: "right" }}
              >
                {t.type === "income" ? "+" : "-"}$
                {t.amount.toFixed(2)}
              </td>

              <td className="actions-col" style={{ textAlign: "right" }}>
                ✏️ 🗑️
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;