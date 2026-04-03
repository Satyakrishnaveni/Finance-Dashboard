import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#6366f1", "#06b6d4", "#22c55e", "#f59e0b", "#ec4899", "#ef4444"];

const Charts = ({ transactions }) => {
  
  const trendData = transactions.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));


  const categoryData = Object.values(
    transactions.reduce((acc, t) => {
      if (t.type === "expense") {
        acc[t.category] = acc[t.category] || { name: t.category, value: 0 };
        acc[t.category].value += t.amount;
      }
      return acc;
    }, {})
  );

  return (
    <div className="charts-container">
      
      
      <div className="chart-box">
        <h3>Balance Trend</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={trendData}>
            <XAxis dataKey="date" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

     
      <div className="chart-box">
        <h3>Spending by Category</h3>

        <div className="donut-wrapper">
          <PieChart width={300} height={250}>
            <Pie
              data={categoryData}
              dataKey="value"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
            >
              {categoryData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="legend">
          {categoryData.map((item, index) => (
            <span key={index} style={{ color: COLORS[index] }}>
              ● {item.name}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Charts;