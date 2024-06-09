import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PageTwo = () => {
  const [error, setError] = useState({});
  const [data, setData] = useState({
    brandName: "",
    brandType: "",
    address: "",
    city: "",
    zipCode: "",
    taxId: "",
  });
  const navigate = useNavigate();

  const toolTip = document.getElementById('toolTip')

  const mouseOverHandler = () => {
    toolTip.style.display = 'inline'
  }

  const mouseOutHandler = () => {
    toolTip.style.display = 'none'
  }


  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitHandler = () => {
    const validationError = {};

    if (data.brandName.trim().length === 0) {
      validationError.brandName = "Please Enter Brand Name";
    }
    if (data.brandType.trim().length === 0) {
      validationError.brandType = "Please Enter valid Brand Type";
    }
    if (data.address.trim().length === 0) {
      validationError.address = "Please Enter Address";
    }
    if (data.city.trim().length === 0) {
      validationError.city = "Please Enter City";
    }
    if (data.zipCode.trim().length === 0) {
      validationError.zipCode = "Please Enter Zip Code";
    }
    if (data.taxId.trim().length === 0) {
      validationError.taxId = "Please Enter tax Id Number";
    }

    setError(validationError);
    if (Object.keys(validationError).length === 0) {
      localStorage.setItem("secondpage", JSON.stringify(data));
      navigate("/");
    }
  };

  console.log(data);
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
        style={{ borderRadius: "10px", backgroundColor: "white", width: "70%" }}
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
          <p style={{ fontWeight: "bold" }}>Your Profile</p>
          <p style={{ fontWeight: "bold", color: "rgba(112,118,228,255)" }}>
            Business Information
          </p>
          <p style={{ fontWeight: "bold" }}>Additional Users</p>
        </div>
        <div
          style={{ textAlign: "center", width: "30%", marginLeft: "35%" }}
          className="mt-1"
        >
          <p>Step 2</p>
          <h3>Business Information</h3>
          <p style={{ fontSize: "small" }}>
            Please, enter information about your company.
          </p>
        </div>
        <Form style={{ width: "80%", marginLeft: "10%" }} className="mt-1">
          <p style={{ fontSize: "medium", color: "rgba(154,200,252,255)" }}>
            GENERAL INFORMATION
          </p>
          <Form.Group as={Row} className="mb-1">
            <Col sm="6">
              <Form.Label style={{ fontSize: "medium" }}>
                Brand Name*
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="brandName"
                placeholder="Input your Brand Name"
                onChange={changeHandler}
                required
              />
              {error.brandName && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {error.brandName}
                </span>
              )}
            </Col>
            <Col sm="6" style={{ position: "relative" }}>
              <Form.Label style={{ fontSize: "medium" }}>
                Brand Type*
              </Form.Label>
              <span
                style={{ marginLeft: "2px" }}
                onMouseOver={mouseOverHandler}
                onMouseOut={mouseOutHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-question-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                </svg>
              </span>
              <div
                id="toolTip"
                style={{
                  display: "none",
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  backgroundColor: "black",
                  left: "130px",
                  top: "1px",
                }}
              ></div>
              <Form.Control
                size="sm"
                type="text"
                name="brandType"
                placeholder="Input your Brand Type"
                onChange={changeHandler}
                required
              />
              {error.brandType && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {error.brandType}
                </span>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-1">
            <Col sm="6">
              <Form.Label style={{ fontSize: "medium" }}>
                Street Address*
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="address"
                placeholder="Input your Street Address"
                onChange={changeHandler}
                required
              />
              {error.address && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {error.address}
                </span>
              )}
            </Col>
            <Col sm="6">
              <Form.Label style={{ fontSize: "medium" }}>City*</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="city"
                placeholder="Input your City Number"
                onChange={changeHandler}
                required
              />
              {error.city && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {error.city}
                </span>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-1">
            <Col sm="6">
              <Form.Label style={{ fontSize: "medium" }}>Zip Code*</Form.Label>
              <Form.Control
                size="sm"
                type="number"
                name="zipCode"
                placeholder="Input Zip Code"
                onChange={changeHandler}
                required
              />
              {error.zipCode && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {error.zipCode}
                </span>
              )}
            </Col>
            <Col sm="6">
              <Form.Label style={{ fontSize: "medium" }}>
                Tax ID Number*
              </Form.Label>
              <Form.Control
                size="sm"
                type="number"
                name="taxId"
                placeholder="Input Tax ID Number"
                onChange={changeHandler}
                required
              />
              {error.taxId && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {error.taxId}
                </span>
              )}
            </Col>
          </Form.Group>
          <p
            className="mt-1"
            style={{ fontSize: "medium", color: "rgba(154,200,252,255)" }}
          >
            DOCUMENTS
          </p>
          <p>
            Once the following documents are signed, you'll be ready to get
            started
          </p>
          <Form.Control
            className="mb-1"
            size="sm"
            type="text"
            placeholder="Electronically sign the agreement(s)"
            readOnly
          />
          <Form.Control
            size="sm"
            type="text"
            placeholder="non adult beverage Korger market supplier wavier and release"
            readOnly
          />
          <p style={{ fontSize: "medium", color: "rgba(154,200,252,255)" }}>
            COI PDF UPLOAD
          </p>
          <p>
            Once the following documents are signed, you'll be ready to get
            started
          </p>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Electronically sign the agreement(s)"
            readOnly
          />
        </Form>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
        }}
      >
        <p>Back to Login</p>
        <div>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Previous Step
          </Button>
          <Button style={{ marginLeft: "5px" }} onClick={submitHandler}>
            Submit
          </Button>
        </div>
      </Container>
    </>
  );
};

export default PageTwo;
