import React from "react";
import PropTypes from "prop-types";
import "@/components/Elements/EmailInput/EmailInput.scss";

const EmailInput = ({
  placeholder = "Enter Your Email",
  icon = "/images/mail.png",
  sendIcon = "/images/Send.png",
  onSubmit,
}) => {
  return (
    <label className="footerNavigator-email">
      <input
        type="email"
        placeholder={placeholder}
        className="footerNavigator-emailInput"
        style={{
          backgroundImage: `url('${icon}')`,
        }}
      />
      <button className="footerNavigator-emailButton" onClick={onSubmit}>
        <img src={sendIcon} alt="Send" className="footerNavigator-emailIcon" />
      </button>
    </label>
  );
};

EmailInput.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  sendIcon: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default EmailInput;
