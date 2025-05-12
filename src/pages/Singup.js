import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Header from "../common/Header";
// import "./SignupPage.css";

const SignupPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <>
    <Header/>
      <Container
        fluid
        className="min-vh-100 d-flex justify-content-center align-items-center bg-light"
      >
        <Row
          className={`w-100 justify-content-center ${visible ? "fade-in" : ""}`}
        >
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <Card className="p-4 shadow rounded-4">
              <h2 className="text-center mb-4">Create an Account</h2>
              <Form>
                <Form.Group className="mb-3" controlId="signupName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="signupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="signupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="signupConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Sign Up
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

export default SignupPage;
