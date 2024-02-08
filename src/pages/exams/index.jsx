import React, { useEffect } from "react";
import Layout from "../../components/layout";
import axios from "axios";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { RiTimerLine } from "react-icons/ri";
import { FaMarker } from "react-icons/fa";

function Exams() {
  const [isusers, setIsUsers] = useState([]);
  const [isLoder, setIsLoder] = useState(false);
  const getApi = () => {
    setIsLoder(true);
    axios
      .get("https://api.darwinstech.com/api/exams", {
        headers: {
          Accept: "application/json",
          Authorization: ` Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDc1OWQ3YmFiNTQ5ZDQ5MWJlNTVmMzE3YjU0Yjk0ZDRmNjFmMzk2NmZiNWM1YTk3MzUzMjA1MDc2OTYyZjBiNTE4MjhhZDBkN2UxMzQ4MDQiLCJpYXQiOjE3MDY2MDU4OTIuNTI2MDU1LCJuYmYiOjE3MDY2MDU4OTIuNTI2MDU4LCJleHAiOjE3MzgyMjgyOTIuNTI0ODQ3LCJzdWIiOiIxNTUiLCJzY29wZXMiOltdfQ.NQioBSR40SkWdnhzQKT7DpEYttnwH7WHNI2Z1FDv6mgzTzaZMRMYoN2b8JvfeFIjcskCGaWXajtupDgm6ZqI_K9pfP8T74mjS0ANLyrJVN6HItf-JD4HGVre6rt3CA93RRud2cR97SYfNJdmQEe8bGMJZ0PDwV5Peq4Va4cKPboYLYmn0pGtXH2Zs-dsC8ElNm_ydwG-vT7Z1Qxw1Fr5keWJ2wu2uEiHZpbcCGyN26cxy0S3DzPDCIVXdS1t53EAVyxo-rUThSBI5ppO0zV0GDLVn3MUK5wcpkuxMlNskIx6RY7TCr77GU7kVd4MsFKQi4PTizZP4GQlQP1hZoqtErGBZTUoiB21GXlSUxdtruFEAErXWsfocoXKwEsSWntZX7-9JXdkIUaFMS_g57zTq58qB51JqYSNxHXCzl9nfyhcxp4x10Q_3UraFL-4uALtNcNF5cxqYxtCpJNpIq6H8rCSl0Y7vjEMnGVoo9FuD4xCcqhyiflx2tBXoSyu8r8-j0H7kGhB5DvT8bOYbYIF5V7uN-XOMGef5G8JQX4-4YniZrxjcr2sHXrOs8koSBcQ35DwbFU52RKq_kigNFxAfLVnjSQWy7pvbLeZfJCqd4XS9lXVzlNVGvQ2kKO0Fdowg1EIN_t-Vmdek7579I-Pe-BtqE8IPI0qaMJNwUwiLSQ`,
        },
      })
      .then((resp) => {
        setIsLoder(false);
        setIsUsers(resp.data);
        console.log(resp.data, "response");
      })
      .catch((error) => {
        console.log("errors......", error.response.data.message);
      });
  };
  useEffect(() => {
    getApi();
    // setIsLoder(false);
  }, []);

  return (
    <Layout>
      <Container>
        <Row>
          {isLoder ? (
            <div
              class="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              loading.....
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            ""
          )}
          {isusers.map((item, index) => {
            return (
              <Col md={3}>
                <Card>
                  <Card.Header>
                    {index + 1} {item.name.slice(0, 20)}...
                  </Card.Header>
                  <Card.Body>{item.description.slice(0, 133)}..</Card.Body>
                  <div className="d-flex justify-content-between p-2">
                    <div>
                      <FaMarker />
                      {item.marks}
                    </div>
                    <div>
                      {item.duration}
                      <RiTimerLine />
                    </div>
                  </div>
                  <Card.Footer>
                    {/* <div
                      class="spinner-border"
                      // style="width: 3rem; height: 3rem;"
                      style={{ width: "2rem", height: "2rem" }}
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div> */}
                    <Button>examlsss</Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
}

export default Exams;
