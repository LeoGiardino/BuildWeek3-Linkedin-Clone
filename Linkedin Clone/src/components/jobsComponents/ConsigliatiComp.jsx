import "../../styles/JobsStyle/Jobs.css";
import { Card } from "react-bootstrap";
import { ArrowRight, Dot, Linkedin, XLg } from "react-bootstrap-icons";
import LavoroCard from "./LavoroCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Lavori } from "../../redux/actions/Lavori";

export default function ConsigliatiComp() {
  const dispatch = useDispatch();
  const lavori = useSelector((state) => state.listaLavori);

  useEffect(() => {
    dispatch(Lavori());
  }, []);
  return (
    <Card className="compBackgroundForm">
      <Card.Body className="d-flex flex-column pb-0">
        <div className="d-flex flex-column justify-content-between mb-4">
          <h5>Consigliato per te</h5>
          <p className="pageGrayTxt sottotitoloCons">
            Sulla base del tuo profilo e della tua cronologia delle ricerche
          </p>
        </div>
        {lavori.slice(0, 5).map((lav) => (
          <LavoroCard
            key={lav._id}
            company={lav.company_name}
            location={lav.candidate_required_location}
            published={lav.publication_date}
            titolo={lav.title}
          />
        ))}
      </Card.Body>
      <Card.Footer className="text-center risorseFooter">
        Mostra tutto <ArrowRight />
      </Card.Footer>
    </Card>
  );
}
