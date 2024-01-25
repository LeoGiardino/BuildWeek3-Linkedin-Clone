import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Navbar.css";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

function Navigazione() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-bglink"
      style={{
        "--bs-navbar-padding-y": "0",
        "--bs-navbar-brand-padding-y": "0",
        color: "#A49D84",
        height: "62px",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <i className="bi bi-linkedin"></i>
        </Navbar.Brand>
        <Form inline>
          <Form.Control
            type="text"
            placeholder="⌕ Cerca"
            className="custom-placeholder"
            style={{
              backgroundColor: "#2D363F",
              color: "#EDEDE3",
              border: 0,
              width: "300px",
              marginRight: "95px",
            }}
          />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Container className="text-center">
                <div className="bottoneNav d-flex flex-column">
                  <i
                    class="bi bi-house-door-fill"
                    style={{
                      color: "#949493",
                      fontSize: "23px",
                    }}
                  ></i>
                  <span
                    style={{
                      color: "#949493",
                      fontSize: "13px",
                      marginTop: "-7px",
                    }}
                  >
                    Home
                  </span>
                </div>
              </Container>
            </Nav.Link>
            <Nav.Link href="#rete">
              <Container className="text-center">
                <div className="bottoneNav d-flex flex-column">
                  <i
                    class="bi bi-people-fill"
                    style={{
                      color: "#949493",
                      fontSize: "23px",
                    }}
                  ></i>
                  <span
                    style={{
                      color: "#949493",
                      fontSize: "13px",
                      marginTop: "-7px",
                    }}
                  >
                    Rete
                  </span>
                </div>
              </Container>
            </Nav.Link>
            <Nav.Link href="#lavoro">
              <Container className="text-center">
                <div className="bottoneNav d-flex flex-column">
                  <i
                    class="bi bi-briefcase-fill"
                    style={{
                      color: "#949493",
                      fontSize: "23px",
                    }}
                  ></i>
                  <span
                    style={{
                      color: "#949493",
                      fontSize: "13px",
                      marginTop: "-7px",
                    }}
                  >
                    Lavoro
                  </span>
                </div>
              </Container>
            </Nav.Link>
            <Nav.Link href="#messaggistica">
              <Container className="text-center">
                <div className="bottoneNav d-flex flex-column">
                  <i
                    class="bi bi-chat-dots-fill"
                    style={{
                      color: "#949493",
                      fontSize: "23px",
                    }}
                  ></i>
                  <span
                    style={{
                      color: "#949493",
                      fontSize: "13px",
                      marginTop: "-7px",
                    }}
                  >
                    Messaggistica
                  </span>
                </div>
              </Container>
            </Nav.Link>
            <Nav.Link href="#notifiche">
              <Container className="text-center">
                <div className="bottoneNav d-flex flex-column">
                  <i
                    class="bi bi-bell-fill"
                    style={{
                      color: "#949493",
                      fontSize: "23px",
                    }}
                  ></i>
                  <span
                    style={{
                      color: "#949493",
                      fontSize: "13px",
                      marginTop: "-7px",
                    }}
                  >
                    Notifiche
                  </span>
                </div>
              </Container>
            </Nav.Link>
            <Dropdown
              style={{ borderRight: "1px solid #373A3D", paddingRight: "15px" }}
            >
              <div className="bottoneNav d-flex flex-column text-center">
                <i
                  class="bi bi-bell-fill"
                  style={{
                    color: "#949493",
                    fontSize: "23px",
                    marginTop: "8px",
                  }}
                ></i>
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  className="dropNo"
                  style={{
                    color: "#949493",
                    fontSize: "13px",
                    marginTop: "-14px",
                    outline: "none",
                    boxShadow: "none",
                  }}
                >
                  {" "}
                  Tu
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ backgroundColor: "#16191C" }}>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </div>
            </Dropdown>
            <Dropdown style={{ paddingRight: "10px" }}>
              <div className="bottoneNav d-flex flex-column text-center">
                <i
                  class="bi bi-grid-3x3-gap-fill"
                  style={{
                    color: "#949493",
                    fontSize: "23px",
                    marginTop: "8px",
                  }}
                ></i>
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  className="dropNo"
                  style={{
                    color: "#949493",
                    fontSize: "13px",
                    marginTop: "-14px",
                  }}
                >
                  Per le aziende
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ backgroundColor: "#16191C" }}>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </div>
            </Dropdown>
            <a
              href="#"
              style={{ color: "orange", fontSize: "13px", marginTop: "21px" }}
            >
              Prova Premium per 0 EUR
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigazione;
