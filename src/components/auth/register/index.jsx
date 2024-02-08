import React, { useState } from "react";
import Layout from "../../layout";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import { useNavigate, useNavigation } from "react-router-dom";
function Register() {
  const [isMsg, setIsMsg] = useState("");
  // const navigate = useNavigate();

  const registerSchema = Yup.object({
    name: Yup.string().required().min(3),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6),
    c_password: Yup.string().oneOf(
      [Yup.ref("password")],
      "this password in not match"
    ),
  });

  return (
    <>
      <Layout>
        {/* <div>Register</div> */}
        <Container>
          <Card className="mt-3">
            <Card.Header style={{ backgroundColor: "black" }}>
              <h2 style={{ color: "white" }}>Register</h2>
            </Card.Header>
            <Card.Body style={{ backgroundColor: "lightblue" }}>
              <Formik
                initialValues={{
                  name: "",
                  email: " ",
                  password: "",
                  c_password: "",
                }}
                validationSchema={registerSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                  // console.log(values);
                  axios
                    .post("https://api.darwinstech.com/api/register", values)
                    .then((res) => {
                      res.data.msg;
                      // navigate("/login");
                      resetForm();
                      // console.log("responce", res);
                    })
                    .catch((error) => {
                      setIsMsg(error.response.data.message);
                      console.log("errors", error.response.data.message);
                    });
                }}
              >
                {({ values, handleChange, handleSubmit, touched, errors }) => {
                  return (
                    <>
                      <Form onSubmit={handleSubmit}>
                        {isMsg ? <Alert variant="danger">{isMsg}</Alert> : " "}

                        <Form.Group className="mb-3" controlId="name">
                          <Form.Label>Enter name</Form.Label>
                          <Form.Control
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                          />
                          <div className="text-danger">{errors.name}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                          />
                          <div className="text-danger">{errors.email}</div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Password"
                          />
                          <div className="text-danger">{errors.password}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="c_password">
                          <Form.Label>C-Password</Form.Label>
                          <Form.Control
                            type="password"
                            value={values.c_password}
                            onChange={handleChange}
                            placeholder="Password"
                          />
                          <div className="text-danger">{errors.c_password}</div>
                        </Form.Group>
                        {/* <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </>
                  );
                }}
              </Formik>
            </Card.Body>
          </Card>
        </Container>
      </Layout>
    </>
  );
}

export default Register;
