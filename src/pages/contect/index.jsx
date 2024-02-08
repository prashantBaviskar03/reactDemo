import React, { useState } from "react";
import Layout from "../../components/layout";
import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import ThankYou from "../contect/thankyou.jpg";
// import Thankyou from "../contect/thankyou.jpg";
function Contect() {
  // const [formSubmit, setFormSubmit] = useState(true);
  const contectSchema = Yup.object({
    name: Yup.string().required("required").min(2, "Enter Name "),
    email: Yup.string().required("required").email("Invalid Email address"),
    contect: Yup.string().required("required").min(10, " Enter 10 degits"),
    blog: Yup.string().required("enter a massage").min(3).max(150),
    gender: Yup.string().required("choose one gender"),
    hobbies: Yup.array().required("please choose one hobbies"),
  });
  return (
    <>
      <Layout>
        <Container>
          <Card className="mt-3">
            <Card.Header
              className=""
              style={{ backgroundColor: "black", color: "white" }}
            >
              the Inqury page
            </Card.Header>
            <Card.Body style={{ backgroundColor: "lightblue" }}>
              <Row>
                <Col>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      contect: "",
                      blog: " ",
                      gender: "",
                      hobbies: "",
                    }}
                    validationSchema={contectSchema}
                    onSubmit={(values) => {
                      // setTimeout(() => {
                      // setSubmitting(false);
                      // alert(JSON.stringify(values, null, 2));
                      console.log(values);
                      // }, 5000);
                    }}
                  >
                    {({
                      values,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      errors,
                      touched,
                    }) =>
                      isSubmitting ? (
                        <love>
                          <h3>thanks for submit </h3>
                          <img
                            src={ThankYou}
                            alt=""
                            height="400vh"
                            width="420vh"
                          />
                        </love>
                      ) : (
                        <Form onSubmit={handleSubmit}>
                          <Form.Group controlId="name">
                            <Form.Label>name </Form.Label>
                            <Form.Control
                              type="text"
                              value={values.name}
                              // isInvalid={errors.name}
                              // isValid={touched.name}

                              onChange={handleChange}
                            />

                            {errors.name && touched.name ? (
                              <div className="text-danger">{errors.name}</div>
                            ) : (
                              touched.name
                            )}
                          </Form.Group>
                          <Form.Group className="mb-0" controlId="email">
                            <Form.Label>Email </Form.Label>
                            <Form.Control
                              type="email"
                              value={values.email}
                              onChange={handleChange}
                              // isInvalid={!!errors.email}
                              // isValid={!!touched.email}
                            />
                            {errors.email && touched.email ? (
                              <div className="text-danger">{errors.email}</div>
                            ) : null}
                          </Form.Group>
                          <Form.Group className="mb-0" controlId="contect">
                            <Form.Label> Contect </Form.Label>
                            <Form.Control
                              type="number"
                              value={values.contect}
                              onChange={handleChange}
                              // isInvalid={!errors.name}
                              placeholder="Enter number"
                            />
                            {errors.contect && touched.contect ? (
                              <div className="text-danger">
                                {errors.contect}
                              </div>
                            ) : null}
                          </Form.Group>
                          {/* <Form.Group controlId="message">
                            <Form.Label>message</Form.Label>
                            <Form.Control
                              type="textarea"
                              name="message"
                              // isInvalid={!errors.name}
                              value={values.message}
                              onChange={handleChange}
                              // placeholder="Leave a comment here"
                              style={{ height: "80px" }}
                            />
                            {errors.message && touched.message ? (
                              <div className="text-danger">
                                {errors.message}
                              </div>
                            ) : null}
                          </Form.Group> */}

                          {/* <div id="checkbox-group">hobbies</div> */}
                          {/* <div role="group" aria-labelledby="checkbox-group">
                            Hobbies
                            <label className="m-1">
                              <Field
                                type="checkbox"
                                name="hobbies"
                                value="gameing"
                                onChange={handleChange}
                              />
                              gameing
                            </label>
                            <label className=" m-1">
                              <Field
                                type="checkbox"
                                name="hobbies"
                                value="reading"
                                onChange={handleChange}
                              />
                              reading
                            </label>
                            <label className=" m-1">
                              <Field
                                type="checkbox"
                                name="hobbies"
                                value="codeing"
                                onChange={handleChange}
                              />
                              codeing
                            </label>
                            {errors.hobbies && touched.hobbies ? (
                              <div className="text-danger">
                                {errors.hobbies}
                              </div>
                            ) : null}
                          </div> */}
                          {/* <div id="my-radio-group">gender</div> */}
                          {/* <div
                            role="group"
                            name="gender"
                            aria-labelledby="my-radio-group"
                          >
                            {" "}
                            Gender
                            <label className=" m-1">
                              <Field
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={handleChange}
                              />
                              female
                            </label>
                            <label className=" m-1">
                              <Field
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={handleChange}
                              />
                              male
                            </label>
                            <label className=" m-1">
                              <Field
                                type="radio"
                                name="gender"
                                value="other"
                                onChange={handleChange}
                              />
                              other
                            </label>
                            {errors.gender && touched.gender ? (
                              <div className="text-danger">{errors.gender}</div>
                            ) : null}
                          </div> */}
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Gender</Form.Label>
                            <div>
                              <label htmlFor="gender">
                                Male
                                <Form.Check
                                  inline
                                  type="radio"
                                  name="gender"
                                  value="male"
                                  checked={values.gender === "male"}
                                  onChange={handleChange}
                                  // isInvalid={!!errors.gender}
                                  // isValid={!!touched.gender}
                                />
                              </label>
                              <label htmlFor="gender">
                                Female
                                <Form.Check
                                  inline
                                  type="radio"
                                  name="gender"
                                  value="female"
                                  checked={values.gender === "female"}
                                  // isInvalid={errors.gender}
                                  // isValid={touched.gender}
                                  onChange={handleChange}
                                />
                              </label>
                              {errors.gender && touched.gender ? (
                                <div className="text-danger">
                                  {errors.gender}
                                </div>
                              ) : null}
                              {/* <span className="text-denger">
                                {errors.gender}
                              </span> */}
                            </div>
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Hobbies</Form.Label>
                            <div>
                              <label htmlFor="">
                                Dance{" "}
                                <Form.Check
                                  type="checkbox"
                                  name="hobbies"
                                  value="dance"
                                  inline
                                  checked={values.hobbies.includes("dance", [])}
                                  onChange={handleChange}
                                  // isInvalid={!!errors.hobbies}
                                  // isValid={!!touched.hobbies}
                                />
                                Music
                              </label>
                              <label htmlFor="">
                                <Form.Check
                                  type="checkbox"
                                  name="hobbies"
                                  value="music"
                                  inline
                                  checked={values.hobbies.includes("music")}
                                  // isInvalid={!!errors.hobbies}
                                  // isValid={!!touched.hobbies}
                                  onChange={handleChange}
                                />
                                Writing
                              </label>
                              <label htmlFor="">
                                <Form.Check
                                  type="checkbox"
                                  name="hobbies"
                                  value="writing"
                                  inline
                                  checked={values.hobbies.includes("writing")}
                                  // isInvalid={!!errors.hobbies}
                                  // isValid={!!touched.hobbies}
                                  onChange={handleChange}
                                />
                              </label>
                              {errors.hobbies && touched.hobbies ? (
                                <div className="text-danger">
                                  {errors.hobbies}
                                </div>
                              ) : null}
                              {/* <span className="text-danger">
                                {errors.hobbies}
                              </span> */}
                            </div>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="blog">
                            <Form.Label>blog</Form.Label>
                            <Form.Control
                              as="textarea"
                              // type="textarea"
                              name="blog"
                              placeholder="Enter Your blog"
                              value={values.blog}
                              onChange={handleChange}
                              className="form-control"
                            />
                            {errors.blog && touched.blog ? (
                              <div className="text-danger">{errors.blog}</div>
                            ) : null}
                          </Form.Group>

                          <Button
                            variant="primary"
                            disabled={isSubmitting}
                            className="w-100 mb-1 p-1"
                            type="submit"
                          >
                            Submit
                          </Button>
                        </Form>
                      )
                    }
                  </Formik>
                </Col>
                <Col>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d175253.81727816007!2d72.96814530748605!3d21.22632756377601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fbc53566d6b%3A0xa05f4515a070c233!2sDarwin!5e0!3m2!1sen!2sin!4v1705648698154!5m2!1sen!2sin"
                    // className="  w-100"
                    height="100%"
                    width="100%"
                    // loading="lazy"
                  ></iframe>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </Layout>
    </>
  );
}

export default Contect;
