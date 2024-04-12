import React from "react";

import "./Input.css";

function LabeledInput({
  label = "",
  type = "text",
  value = "",
  onChange = () => {},
}) {
  return (
    <div className="container">
      {label && <label className="styled-label">{label}</label>}
      <input
        type={type}
        className="styled-input"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default LabeledInput;
