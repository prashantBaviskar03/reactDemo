import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  // const [isloggin, setLoggin] = useState("");
  const userToken = localStorage.getItem("token");
  const isloggin = useSelector((store) => store.login.isLogin);

  const handleOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#"> y.y. travels</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/contect">
                Contect
              </NavLink>

              {userToken ? (
                <>
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                  <NavLink className="nav-link" to="/exams">
                    Exams
                  </NavLink>
                  <NavLink className="nav-link" onClick={handleOut}>
                    Logout
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
