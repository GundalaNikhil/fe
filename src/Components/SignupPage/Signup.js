import React, { useState } from "react";
import styled from "styled-components";

const Signup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    email: "",
    address: "",
    subscribe: false,
  });

  const [validationErrors, setValidationErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  const validateForm = () => {
    const errors = {};

    // Custom validation for first name, last name, username, and address
    Object.keys(formData).forEach((key) => {
      if (key !== "subscribe" && !formData[key]) {
        errors[key] = `Please enter the ${key} field`;
      }
    });

    // Custom validation for phone number (either 10 digits or 13 digits with +91)
    const phoneRegex = /^(\+91)?\d{10}$/;
    if (
      !phoneRegex.test(formData.phoneNumber) &&
      formData.phoneNumber.length > 0
    ) {
      errors.phoneNumber = "Please enter a valid phone number";
    }

    // Custom validation for email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email) && formData.email.length > 0) {
      errors.email = "Please enter a valid email address";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(formData);

    let validatedValue = value;

    if (name === "phoneNumber") {
      if (
        (!/^(\+91)?\d{10}$/.test(validatedValue) &&
          validatedValue.length > 0) ||
        validatedValue.length == 0
      ) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "Please enter a valid phone number",
        }));
      } else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "",
        }));
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if ((!emailRegex.test(value) && value.length > 0) || value.length == 0) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          email: "Please enter a valid email address",
        }));
      } else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    }

    if (
      name === "firstName" ||
      name === "lastName" ||
      name === "username" ||
      name === "address"
    ) {
      if (!value.trim() && value.length == 0) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: `Please enter the ${name} field`,
        }));
      } else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      phoneNumber: "",
      email: "",
      address: "",
      subscribe: false,
    });

    setValidationErrors({
      firstName: "",
      lastName: "",
      username: "",
      phoneNumber: "",
      email: "",
      address: "",
    });

    onClose();
  };
  const isSubmitDisabled =
    Object.values(formData).some((value) => value === "") ||
    Object.values(validationErrors).some((error) => error !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      console.log("Form Data:", formData);
      onClose();
    } else {
      console.log("Form validation failed");
    }
  };
  return (
    <StyledSignupForm>
      <FormTitle>SignupForm</FormTitle>
      <form onSubmit={handleSubmit} noValidate>
        <InputGroup>
          <Label>First Name:</Label>
          <InputField
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
          <ValidationText>{validationErrors.firstName}</ValidationText>
        </InputGroup>

        <InputGroup>
          <Label>Last Name:</Label>
          <InputField
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
          <ValidationText>{validationErrors.lastName}</ValidationText>
        </InputGroup>

        <InputGroup>
          <Label>Username:</Label>
          <InputField
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
          <ValidationText>{validationErrors.username}</ValidationText>
        </InputGroup>

        <InputGroup>
          <Label>Phone Number:</Label>
          <InputField
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
          <ValidationText>{validationErrors.phoneNumber}</ValidationText>
        </InputGroup>

        <InputGroup>
          <Label>Email:</Label>
          <InputField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <ValidationText>{validationErrors.email}</ValidationText>
        </InputGroup>

        <InputGroup>
          <Label>Address:</Label>
          <InputField
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />
          <ValidationText>{validationErrors.address}</ValidationText>
        </InputGroup>

        <InputGroup>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            Subscribe to Email
          </CheckboxLabel>
        </InputGroup>

        <ButtonGroup>
          <CancelButton type="button" onClick={handleCancel}>
            Cancel
          </CancelButton>
          <SubmitButton type="submit" disabled={isSubmitDisabled}>
            Submit
          </SubmitButton>
        </ButtonGroup>
      </form>
    </StyledSignupForm>
  );
};

const StyledSignupForm = styled.div`
  background: #fff;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* height: 500px; */
  /* max-height: 80vh; */
  /* overflow-y: auto; */
  transition: max-height 0.3s ease;

  @media screen and (max-width: 768px) {
    width: 90%;
    max-width: 90%;
  }
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  color: black;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s ease;
  margin-bottom: 5px;

  &:focus {
    border-color: #007bff;
  }
`;

const ValidationText = styled.p`
  color: #dc3545;
  font-size: 12px;
  margin-top: 5px;
  padding-left: 5px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: #333;
`;

const SubmitButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: ${(props) => (props.disabled ? "#999" : "#fff")};
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
    transform: ${(props) => (props.disabled ? "none" : "scale(1.05)")};
  }
`;

const CancelButton = styled.button`
  background-color: #fff;
  color: black;
  border: 2px solid black;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: black;
    color: #fff;
    transform: scale(1.05);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;
`;

export default Signup;
