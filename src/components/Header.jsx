import { useState, useEffect } from "react";

const Header = () => {
  const [dark, setDark] = useState(true);
  const [role, setRole] = useState("admin");

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="header">
      <div>
        <h1 className="title">
          <span>Finance Dashboard</span>
        </h1>
        <p className="subtitle">Track your money. Stay in control.</p>
      </div>

      <div className="actions">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="dropdown"
        >
          <option value="admin">Admin</option>
          <option value="viewer">Viewer</option>
        </select>

        <button onClick={() => setDark(!dark)} className="theme-btn">
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default Header;