import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PageOne = () => {
  const [error, setError] = useState({});
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  console.log(data);

  const nextPageHandler = () => {
    const validationError = {};

    if (data.firstName.trim().length === 0) {
      validationError.firstName = "Please Enter First Name";
    }
    if (data.lastName.trim().length === 0) {
      validationError.lastName = "Please Enter Last Name";
    }
    if (data.email.trim().length === 0) {
      validationError.email = "Please Enter Email";
    }
    if (data.phone.trim().length < 10) {
      validationError.phone = "Please Enter valid Phone Number";
    }
    if (data.password.trim().length === 0) {
      validationError.password = "Please Enter Password";
    }
    if (data.confirmPassword.trim().length === 0) {
      validationError.confirmPassword = "Please Confirm Your Password";
    } else if (data.password !== data.confirmPassword) {
      validationError.confirmPassword = "Password Doesnt Match";
    }

    setError(validationError);
    if (Object.keys(validationError).length === 0) {
        localStorage.setItem("firstpage", JSON.stringify(data));
        navigate('/2')
      }
    
  };
  
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          margin: "30px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Create New Account
      </h2>
      <Container
        style={{ borderRadius: "10px", backgroundColor: "white" }}
        className="mb-3 p-3 lg shadow"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            height: "60px",
            paddingTop: "20px",
            backgroundColor: "rgba(237,238,253,255)",
            borderRadius: "5px",
          }}
        >
          <p style={{fontWeight: 'bold', color: 'rgba(112,118,228,255)' }}>Your Profile</p>
          <p style={{fontWeight: 'bold'}}>Business Information</p>
          <p style={{fontWeight: 'bold'}}>Additional Users</p>
        </div>
        <div
          style={{ textAlign: "center", width: "30%", marginLeft: "35%" }}
          className="mt-2"
        >
          <p>Step 1</p>
          <h3>Your Profile</h3>
          <p>
            Enter the login Information for your acount. You will be able to
            create additional users after registering
          </p>
        </div>
        <Form style={{ width: "80%", marginLeft: "10%" }} className="mt-2">
          <Form.Group as={Row} className="mb-3">
            <Col sm="6">
              <Form.Label>First Name*</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Input your First Name"
                onChange={changeHandler}
                required
              />
              {error.firstName && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {error.firstName}
                </span>
              )}
            </Col>
            <Col sm="6">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Input your Last Name"
                onChange={changeHandler}
                required
              />
              {error.lastName && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {error.lastName}
                </span>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm="6">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Input your Email"
                onChange={changeHandler}
                required
              />
              {error.email && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {error.email}
                </span>
              )}
            </Col>
            <Col sm="6">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{10}"
                name="phone"
                placeholder="Input your Phone Number"
                onChange={changeHandler}
                required
              />
              {error.phone && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {error.phone}
                </span>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm="6">
              <Form.Label>Password*</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Create Password"
                onChange={changeHandler}
                required
              />
              {error.password && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {error.password}
                </span>
              )}
            </Col>
            <Col sm="6">
              <Form.Label>Confirm Password*</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                onChange={changeHandler}
                required
              />
              {error.confirmPassword && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {error.confirmPassword}
                </span>
              )}
            </Col>
          </Form.Group>
        </Form>
      </Container>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Back to Login</p>
        <Button onClick={nextPageHandler}>Next Step</Button>
      </Container>
    </>
  );
};

export default PageOne;
