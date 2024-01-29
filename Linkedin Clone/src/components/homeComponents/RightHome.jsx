import React, { useEffect } from "react";
import "../../styles/RightProfile.css";
import "../../styles/sideBar.css";
import "../../styles/HomeStyle/ColonnaDestra.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CaretDownFill } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

export default function RightHome() {
  return (
    <div className="destra d-none d-lg-block">
      <Row>
        <Col>
          <div className="cardNotizie">
            <div className="d-flex justify-content-between" style={{padding:"12px"}}>
              <span>LinkedIn Notizie</span>
              <div>
                <i class="bi bi-info-square-fill"></i>
              </div>
            </div>
            <div className="listaNotizie">
              <ul>
                <div className="notizie">
                  <li>I 15 lavori più rapida crescita in Italia</li>
                  <p>Notizie principali . 380 lettori</p>
                </div>
                <div className="notizie">
                  <li>Italia in corsa agli Oscar</li>
                  <p>1 giorno fa</p>
                </div>
                <div className="notizie">
                  <li>Le città dei lavori in crescita</li>
                  <p>1 giorno fa</p>
                </div>
                <div className="notizie">
                  <li>Che 2023 è stato per il mercato del li...</li>
                  <p>23 ore fa</p>
                </div>
                <div className="notizie">
                  <li>Una ferrari a vela</li>
                  <p>2 giorni fa</p>
                </div>
                <div className="notizie">
                  <li
                    style={{
                      cursor: "pointer",
                      listStyle: "none",
                      marginTop: "13px",
                    }}
                  >
                    Show more{" "}
                    <i
                      class="bi bi-chevron-compact-down"
                      style={{ fontSize: "20px", verticalAlign: "middle" }}
                    ></i>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div>
            <div className="d-flex flex-wrap justify-content-center mx-3">
              <p className="titoloFooter footerJobs">Informazioni</p>
              <p className="titoloFooter footerJobs">Accessibilità</p>
              <p className="titoloFooter footerJobs">Centro assistenza</p>
              <p className="titoloFooter footerJobs">
                Privacy e condizioni <CaretDownFill />
              </p>
              <p className="titoloFooter footerJobs">
                Opzioni per gli annunci pubblicitari
              </p>
              <p className="titoloFooter footerJobs">Pubblicità</p>
              <p className="titoloFooter footerJobs">
                Servizi alle aziende <CaretDownFill />
              </p>
              <p className="titoloFooter footerJobs">Scarica l'app Linkedin</p>
              <p className="titoloFooter footerJobs">Altro</p>
            </div>
            <div className="d-flex justify-content-center">
              <span className="footerJobs pageWhtTxt">
                <span className="fw-bold">Linked</span>
                <Linkedin className="mb-1" /> LinkedIn Corporation © 2024
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
