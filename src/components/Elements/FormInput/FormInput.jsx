import React from "react";
import "@/components/Elements/FormInput/FormInput.scss";

const locationIcon = process.env.PUBLIC_URL + "/images/locationIcon.png";

const FormInput = ({
  icon,
  title,
  text,
  type = "text",
  options = [],
  name,
  checked,
  onChange,
}) => {
  const selectIcon = icon || locationIcon;

  // Динамічний клас для типу
  const inputTypeClass = {
    text: "form-input--text",
    select: "form-input--select",
    textarea: "form-input--textarea",
    checkbox: "form-input--checkbox",
  };

  return (
    <div className={`form-input ${inputTypeClass[type] || ""}`}>
      {type !== "checkbox" && (
        <label className="form-input__label">{title}</label>
      )}

      <div className={`input-wrapper ${inputTypeClass[type]}__wrapper`}>
        {type === "select" ? (
          <>
            <select className="form-input__select">
              <option value="" className="form-input__option">{text}</option>
              {options.map((option, index) => (
                <option
                  key={index}
                  value={option.value}
                  className="form-input__option"
                >
                  {option.label}
                </option>
              ))}
            </select>
            <img
              src={selectIcon}
              alt="icon"
              className="form-input__icon select-icon"
            />
          </>
        ) : type === "textarea" ? (
          <textarea
            placeholder={text}
            className="form-input__textarea"
            rows="5"
          ></textarea>
        ) : type === "checkbox" ? (
          <div className="checkbox-text">
            <input
              type="checkbox"
              id={name}
              name={name}
              checked={checked}
              onChange={onChange}
            />
            <label htmlFor={name}>
              {text} <a href="#">Terms of Use</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>
        ) : (
          <input
            type={type}
            placeholder={text}
            className="form-input__input"
            name={name}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
};

export default FormInput;
