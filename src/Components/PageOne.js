import { Button, Col, Container, Form, Row } from "react-bootstrap";

const PageOne = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "30px", fontWeight: 'bold', color: 'white' }}>
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
            borderRadius: '5px'
          }}
        >
          <p>Your Profile</p>
          <p>Business Information</p>
          <p>Additional Users</p>
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
                placeholder="Input your First Name"
                required
              />
            </Col>
            <Col sm="6">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Input your Last Name"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm="6">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Input your Email"
                required
              />
            </Col>
            <Col sm="6">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{10}"
                placeholder="Input your Phone Number"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm="6">
              <Form.Label>Password*</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create Password"
                required
              />
            </Col>
            <Col sm="6">
              <Form.Label>Confirm Password*</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Your Password"
                required
              />
            </Col>
          </Form.Group>
        </Form>
      </Container>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Back to Login</p>
        <Button type="submit">Next Step</Button>
      </Container>
    </>
  );
};

export default PageOne;
