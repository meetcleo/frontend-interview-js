import React from "react";
import "./Button.css"; // Import the CSS for the button

function Button({
  onClick,
  isDisabled,
  type = "button",
  style,
  className,
  children,
}) {
  return (
    <button
      className={`styled-button ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
