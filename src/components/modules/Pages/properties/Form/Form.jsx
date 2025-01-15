import React, { useState } from "react";
import FormInput from "@/components/Elements/FormInput/FormInput";
import "@/components/modules/Pages/properties/Form/Form.scss";
import Button from "@/components/Elements/Button/Button.jsx";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="inquiry-container--wrapper">
      <div className="asked--header--logo">
        <img src="/images/testimonialsLogo.png" alt="Logo" />
      </div>
      <div className="inquiry-container">
        <div className="inquiry-info--wrapper">
          <div className="inquiry-info">
            <h1>
              Inquire About Seaside <br /> Serenity Villa
            </h1>
            <p>
              Interested in this property? Fill out the form below, and our real
              estate experts will get back to you with more details, including
              scheduling a viewing and answering any questions you may have.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="inquiry-form">
          <div className="form-row">
            <FormInput
              title="First Name"
              text="Enter First Name"
              name="firstName"
              type="text"
              onChange={handleChange}
            />
            <FormInput
              title="Last Name"
              text="Enter Last Name"
              name="lastName"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <FormInput
              title="Email"
              text="Enter your Email"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <FormInput
              title="Phone"
              text="Enter Phone Number"
              name="phone"
              type="tel"
              onChange={handleChange}
            />
          </div>

          <FormInput
            title="Selected Property"
            text="Seaside Serenity Villa, Malibu, California"
            type="select"
            options={[
              { value: "villa", label: "Seaside Villa" },
              { value: "apartment", label: "Luxury Apartment" },
              { value: "house", label: "Cozy House" },
            ]}
            onChange={handleChange}
          />

          <FormInput
            title="Message"
            text="Enter your Message here.."
            name="message"
            type="textarea"
            onChange={handleChange}
          />
          <div className="checkbox-wrapper">
            <FormInput
              type="checkbox"
              name="agree"
              text="I agree with"
              checked={formData.agree}
              onChange={handleChange}
            />
            <Button type="secondary">Send Your Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
