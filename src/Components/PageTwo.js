import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PageTwo = () => {
    const navigate = useNavigate()
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
        style={{ borderRadius: "10px", backgroundColor: "white", width: '70%' }}
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
          <p style={{fontWeight: 'bold'}}>Your Profile</p>
          <p style={{fontWeight: 'bold', color: 'rgba(112,118,228,255)' }}>Business Information</p>
          <p style={{fontWeight: 'bold'}}>Additional Users</p>
        </div>
        <div
          style={{ textAlign: "center", width: "30%", marginLeft: "35%" }}
          className="mt-1"
        >
          <p>Step 2</p>
          <h3>Business Information</h3>
          <p style={{fontSize: 'small'}}>
            Please, enter information about your company.
          </p>
        </div>
        <Form style={{ width: "80%", marginLeft: "10%" }} className="mt-1">
            <p style={{fontSize: 'medium', color: 'rgba(154,200,252,255)'}}>GENERAL INFORMATION</p>
          <Form.Group as={Row} className="mb-1">
            <Col sm="6">
              <Form.Label style={{fontSize: 'medium'}}>Brand Name*</Form.Label>
              <Form.Control size='sm'
                type="text"
                name="brandName"
                placeholder="Input your Brand Name"
                required
              />
              
            </Col>
            <Col sm="6">
              <Form.Label style={{fontSize: 'medium'}}>Brand Type*</Form.Label>
              <Form.Control size='sm'
                type="text"
                name="brandType"
                placeholder="Input your Brand Type"
                required
              />
              
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-1">
            <Col sm="6">
              <Form.Label style={{fontSize: 'medium'}}>Street Address*</Form.Label>
              <Form.Control size='sm'
                type="text"
                name="address"
                placeholder="Input your Street Address"
                required
              />
              
            </Col>
            <Col sm="6">
              <Form.Label style={{fontSize: 'medium'}}>City*</Form.Label>
              <Form.Control size='sm'
                type="text"
                name="city"
                placeholder="Input your City Number"
                required
              />
              
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-1">
            <Col sm="6">
              <Form.Label style={{fontSize: 'medium'}}>Zip Code*</Form.Label>
              <Form.Control size='sm'
                type="number"
                name="zipCode"
                placeholder="Input Zip Code"
                required
              />
              
            </Col>
            <Col sm="6">
              <Form.Label style={{fontSize: 'medium'}}>Tax ID Number*</Form.Label>
              <Form.Control size='sm'
                type="number"
                name="taxId"
                placeholder="Input Tax ID Number"
                required
              />
            </Col>
          </Form.Group>
          <p className="mt-1" style={{fontSize: 'medium', color: 'rgba(154,200,252,255)'}}>DOCUMENTS</p>
          <p>Once the following documents are signed, you'll be ready to get started</p>
          <Form.Control className="mb-1" size="sm" type="text" placeholder="Electronically sign the agreement(s)" readOnly/>
          <Form.Control size="sm" type="text" placeholder="non adult beverage Korger market supplier wavier and release" readOnly/>
          <p style={{fontSize: 'medium', color: 'rgba(154,200,252,255)'}}>COI PDF UPLOAD</p>
          <p>Once the following documents are signed, you'll be ready to get started</p>
          <Form.Control size="sm" type="text" placeholder="Electronically sign the agreement(s)" readOnly/>
        </Form>
        </Container>
        <Container style={{ display: "flex", justifyContent: "space-between", width: '70%'  }}>
        <p>Back to Login</p>
        <Button onClick={() => {navigate('/')}}>Previous Step</Button>
      </Container>
        </>
    )
}


export default PageTwo;