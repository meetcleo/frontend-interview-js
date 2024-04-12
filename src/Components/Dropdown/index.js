import React from "react";
import "./Dropdown.css"; // Import the CSS for the dropdown

const DEFAULT_OPTION = {
  label: "Please select an option",
  value: null,
};

function Dropdown({
  label = "",
  options = [],
  value = "",
  onChange = () => {},
}) {
  return (
    <div className="container">
      {label && <label className="styled-label">{label}</label>}
      <select
        className="styled-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {[DEFAULT_OPTION, ...options].map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
