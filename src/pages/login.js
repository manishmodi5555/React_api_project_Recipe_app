import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import "./LoginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../common/Header";




const LoginPage = () => {
    
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger fade-in after mount
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <>
<Header/>
      <Container className="d-flex align-items-center justify-content-center  " style={{marginTop: "100px"}}>
        <Row className={`login-form-wrapper ${show ? "fade-in" : ""}`}>
          <Col md={12}>
            <Card className="shadow-lg p-4 rounded-4">
              <h3 className="text-center mb-4">Login</h3>
              <Form style={{ width: "500px" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
