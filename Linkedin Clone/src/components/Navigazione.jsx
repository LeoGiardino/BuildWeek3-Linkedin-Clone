import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Navbar.css";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux"; 
import { Link } from "react-router-dom";
import { SearchLavori } from "../redux/actions/SearchLavori";

function Navigazione() {

  const state1 = useSelector((state) => state.profili);
  const [jobName, setJobName] = useState()
  const dispatch = useDispatch()

  console.log(state1);
  const handlePressEnter = (eve) => {
    
    if(eve.key === 'Enter') {
      eve.preventDefault()
      dispatch(SearchLavori(jobName))
      eve.target.value = ''
    }
  }
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="xl"
      className="bg-body-bglink"
      style={{
        "--bs-navbar-padding-y": "0",
        "--bs-navbar-brand-padding-y": "0",
        color: "#A49D84",
        height: "62px",
        zIndex: 15,
      }}
    >
      <Container className="px-4" style={{ maxWidth: '1128px' }}>
        <Link  to={"/"}>
          <i className="bi bi-linkedin"></i>
        </Link>
        <Form inline>
          <Form.Control
            type="text"
            onChange = {(ele) => setJobName(ele.target.value)}
            onKeyDown={handlePressEnter}
            placeholder="⌕ cerca"
            className="custom-placeholder ricercaResponsive"
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
            <Nav.Link as={Link} to="/">
              <Container className="LinkAlign">
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
              <Container className="LinkAlign">
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
            <Nav.Link as={Link} to="/jobs">
              <Container className="LinkAlign">
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
              <Container className="LinkAlign">
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
              <Container className="LinkAlign">
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
              <div className="bottoneNav d-flex flex-column LinkAlign">
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
                  className="dropNo LinkAlign"
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

                <Dropdown.Menu
                  style={{
                    backgroundColor: "#16191C",
                    maxWidth: "300px",
                    border: "1px solid #373A3D",
                    borderRadius: "15px",
                  }}
                  className="dropdown-menu-end"
                >
                  <Dropdown.Item
                    className="profileNav"
                    style={{ borderBottom: "1px solid #373A3D" }}
                  >
                    <div className="d-flex">
                      <div className="immaginePNav"></div>
                      <div className="d-flex flex-column ms-2">
                        <span style={{ color: "#EDEDE3" }}>{state1?.profili?.name + " " + state1?.profili?.surname}</span>
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#EDEDE3",
                            fontWeight: "400",
                          }}
                        >
                          Full Stack Developer
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-column mt-2">
                      <Button className="btn2 fw-bold" as={Link} to='/me'>Visualizza profilo</Button>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.ItemText style={{ color: "#EDEDE3" }}>
                    Account
                  </Dropdown.ItemText>
                  <Dropdown.Item href="#/action-2">
                    <i
                      class="bi bi-slash-square-fill"
                      style={{ color: "orange" }}
                    ></i>{" "}
                    <span className="premiumHover">
                      Prova Premium per 0 EUR
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Impostazione e privacy
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Guida</Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ borderBottom: "1px solid #373A3D" }}
                  >
                    Lingua
                  </Dropdown.Item>
                  <Dropdown.ItemText style={{ color: "#EDEDE3" }}>
                    Gestisci
                  </Dropdown.ItemText>
                  <Dropdown.Item href="#/action-2">
                    Post e attività
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ borderBottom: "1px solid #373A3D" }}
                  >
                    Account per la pubblicazione di offerte
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Esci</Dropdown.Item>
                </Dropdown.Menu>
              </div>
            </Dropdown>
            <Dropdown style={{ paddingRight: "10px" }}>
              <div className="bottoneNav d-flex flex-column LinkAlign">
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
                  className="dropNo LinkAlign"
                  style={{
                    color: "#949493",
                    fontSize: "13px",
                    marginTop: "-14px",
                  }}
                >
                  Per le aziende
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{
                    backgroundColor: "#16191C",
                    maxWidth: "300px",
                    border: "1px solid #373A3D",
                    borderRadius: "15px",
                  }}
                  className="dropdown-menu-end"
                >
                  <Dropdown.ItemText style={{ color: "#EDEDE3" }}>
                    Per le aziende
                  </Dropdown.ItemText>
                  <Dropdown.Item href="#/action-3">
                    Assumi su LinkedIn
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Vendi con LinkedIn
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Offerta di lavoro gratuita
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Fai pubblicità su LinkedIn
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Impara con LinkedIn
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Centro amministrazione
                  </Dropdown.Item>
                </Dropdown.Menu>
              </div>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigazione;
