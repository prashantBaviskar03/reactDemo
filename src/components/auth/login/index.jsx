import React, { useState } from "react";
import Layout from "../../layout/index";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../redux/action";
function Login() {
  const dispatch = useDispatch();
  const [servarEror, setServerEror] = useState("");
  const navigate = useNavigate();
  const loginSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6),
  });
  return (
    <>
      <Layout>
        {/* <div>Login</div> */}
        <Container>
          <Card className="mt-3">
            <Card.Header style={{ backgroundColor: "black" }}>
              <h1 style={{ color: "white" }}>login form</h1>
            </Card.Header>
            <Card.Body style={{ backgroundColor: "lightblue" }}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={loginSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                  // console.log(values);
                  axios
                    .post("https://api.darwinstech.com/api/login", values)
                    .then((resp) => {
                      setSubmitting(false);
                      localStorage.setItem("token", resp.data.data.token);
                      setServerEror(resp.data.data.msg);
                      navigate("/dashboard");
                      dispatch(loginAction());
                      console
                        .log
                        // localStorage.getItem("token", resp.data.data.token)
                        ();
                      resetForm();
                      console.log(resp);
                    })
                    .catch((error) => {
                      setSubmitting(false);
                      setServerEror(error.response.data);

                      console.log("error", error.response.data.msg);
                    });
                }}
              >
                {({
                  values,
                  handleChange,
                  handleSubmit,
                  errors,

                  isSubmitting,
                }) => {
                  return (
                    <>
                      <Form onSubmit={handleSubmit}>
                        {servarEror ? (
                          <Alert variant="danger">{servarEror}</Alert>
                        ) : (
                          " "
                        )}
                        <Form.Group className="mb-3" controlId="email">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            // isValid={touched.email}
                            isInvalid={!!errors.email}
                            placeholder="Enter email"
                            // required
                          />
                          <Form.Text className="text-danger">
                            {errors.email}
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            isInvalid={!!errors.password}
                            placeholder="Password"
                          />
                          <Form.Text className="text-danger">
                            {errors.password}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button
                          variant="primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
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

export default Login;
