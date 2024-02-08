import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import Layout from "../../components/layout";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });
  return (
    <Layout>
      <Container>
        <Card>
          <Card.Header>welcome to dashborad</Card.Header>
          <Card.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, saepe nulla quidem ratione quod nemo deserunt soluta
              dicta iusto dolorem voluptatibus est laudantium eveniet molestias
              deleniti quibusdam ea! Harum, quidem.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
}

export default Dashboard;
