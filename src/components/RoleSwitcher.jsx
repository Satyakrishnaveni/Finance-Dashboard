import React from "react";
const RoleSwitcher = ({ role, setRole }) => {
  return (
    <div className="role">
      <label>Role: </label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleSwitcher;