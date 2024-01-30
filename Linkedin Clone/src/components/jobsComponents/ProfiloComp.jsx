import { Card } from "react-bootstrap";
import "../../styles/JobsStyle/Jobs.css";
import {
  BookmarkFill,
  Clipboard2Check,
  GearFill,
  ListTask,
  PencilSquare,
  Youtube,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function ProfiloComp() {
  const navigate = useNavigate();
  return (
    <div className="profilocomp">
      <Card>
        <Card.Body className="leftLinkJobs fw-bold">
          <Card.Text>
            <div className="d-flex align-items-center mb-3">
              <BookmarkFill className="me-3 iconcine" />
              <span>Le mie offerte di lavoro</span>
            </div>
            <div
              onClick={() => navigate("/jobs/preferiti")}
              className="d-flex align-items-center mb-3"
            >
              <ListTask className="me-3 iconcine" />
              <span>Preferenze</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Clipboard2Check className="me-3 iconcine" />
              <span>Valutazioni delle competenze</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Youtube className="me-3 iconcine" />
              <span>Indicazioni per chi cerca lavoro</span>
            </div>
            <div className="d-flex align-items-center">
              <GearFill className="me-3 iconcine" />
              <span>Impostazioni candidatura</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

      <button className="btn2 fw-bold btnblue d-flex align-items-center w-100">
        <PencilSquare className="fs-5 me-2" />
        <span className="fw-normal py-2">Pubblica offerta gratuita</span>
      </button>
    </div>
  );
}
