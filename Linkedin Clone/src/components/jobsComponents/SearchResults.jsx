import React from "react";
import { Card } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import LavoroCard from "./LavoroCard";
import "../../styles/JobsStyle/Jobs.css";

export default function SearchResults({ risultati }) {
  return (
    <>
      <Card className="compBackgroundForm cardRicerca">
        <Card.Body className="d-flex flex-column pb-0">
          <div className="d-flex flex-column justify-content-between mb-4">
            <h5>Risultati ricerca</h5>
          </div>

          {risultati.slice(0, 5).map((lav) => (
            <LavoroCard
              key={lav._id}
              company={lav.company_name}
              location={lav.candidate_required_location}
              published={lav.publication_date}
              titolo={lav.title}
            />
          ))}
        </Card.Body>
        <Card.Footer className="text-center risorseFooter cardRicercaFooter">
          Mostra tutto <ArrowRight />
        </Card.Footer>
      </Card>
    </>
  );
}
