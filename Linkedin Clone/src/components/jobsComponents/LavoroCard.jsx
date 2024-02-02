import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SalvaPreferito } from "../../redux/actions/SalvaPreferito";

export default function LavoroCard({ company, location, titolo, published }) {
  const dispatch = useDispatch();

  function handlePrefe(ele) {
    if (ele.target.className === "bi bi-heart fs-5") {
      dispatch(SalvaPreferito(oggPref)),
        (ele.target.className = "bi bi-heart-fill fs-5");
    } else {
      ele.target.className = "bi bi-heart fs-5";
    }
  }

  const [oggPref, setOggPref] = useState({});
  // console.log(oggPref)
  useEffect(() => {
    setOggPref({ titolo, company, location, published });
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between flex-column align-items-start mb-4 expRow">
        <div className="d-flex justify-content-between align-items-start consigliatiGroup w-100">
          <div className="imgAziendaCons me-3">
            <i class="bi bi-buildings text-white fs-1"></i>
          </div>
          <div className="d-flex flex-column w-100">
            <div className="d-flex justify-content-between align-items-center">
              <span className="ente consigliatiPosizione fs-5">{titolo}</span>
            </div>
            <span className="nomeFormazione">{company}</span>
            <span className="periodoFormazione">{location}</span>
            <p className="periodoFormazione secondoSottotitolo mt-0">
              {new Date(published).toLocaleDateString()}
              <span className="float-end" style={{ marginTop: "-5dvh" }}>
                <i
                  onClick={(ele) => handlePrefe(ele)}
                  className="bi bi-heart fs-5"
                ></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
