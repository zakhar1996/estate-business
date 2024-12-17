import React from "react";
import "@/components/Elements/Button/Button.scss";
import PropTypes from "prop-types";
const Button = ({ type = "primary", fullWidth = false, children, onClick }) => {
  const buttonClass = `buttons ${type} ${fullWidth ? "fullWidth" : ""}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  fullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
