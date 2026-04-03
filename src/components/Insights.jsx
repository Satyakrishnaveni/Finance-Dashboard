const Insights = ({ transactions }) => {
  const expenses = transactions.filter((t) => t.type === "expense");

  const categoryTotal = {};
  expenses.forEach((t) => {
    categoryTotal[t.category] =
      (categoryTotal[t.category] || 0) + t.amount;
  });

  const categories = Object.keys(categoryTotal);

  const topCategory =
    categories.length > 0
      ? categories.reduce((a, b) =>
          categoryTotal[a] > categoryTotal[b] ? a : b
        )
      : "N/A";

  const topAmount = categoryTotal[topCategory] || 0;

  const thisMonth = 225;
  const lastMonth = 287;

  const percent = Math.round(
    ((thisMonth - lastMonth) / lastMonth) * 100
  );

  return (
    <div className="insights-container">

     
      <div className="insight-card">
        <div className="insight-icon orange">💡</div>
        <div>
          <h4>Top Spending</h4>
          <p>
            You spent most on <b>{topCategory}</b> — ${topAmount}
          </p>
        </div>
      </div>

     
      <div className="insight-card">
        <div className="insight-icon blue">📈</div>
        <div>
          <h4>Monthly Comparison</h4>
          <p>
            You spent {Math.abs(percent)}%{" "}
            {percent < 0 ? "less" : "more"} this month
          </p>
        </div>
      </div>

    </div>
  );
};

export default Insights;