import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../assets/department.svg";

export class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar className="nav-custom" style={{backgroundColor:"	#90A4AE"}} expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                <img src={logo} className="logo" alt="logo" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink
                  className="text-white d-inline p-2 text-decoration-none"
                  to="/"
                >
                  <b className="tb">Home</b>
                </NavLink>
                <NavLink
                  className="text-white d-inline p-2 text-decoration-none"
                  to="/department"
                >
                  <b className="tb">Department</b>
                </NavLink>
                <NavLink
                  className="text-white d-inline p-2 text-decoration-none"
                  to="/employee"
                >
                  <b className="tb">Employee</b>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
