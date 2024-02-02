import React, { useEffect, useState } from "react";
import { XLg } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { RemovePreferito } from "../../redux/actions/SalvaPreferito";

export default function LavoriPref({ company, location, titolo, published }) {
  const dispatch = useDispatch();

  function handlePrefe(ele) {
    if (ele.target.className === "bi bi-heart-fill fs-5") {
      dispatch(RemovePreferito(ogg));
    }
  }
  //console.log(agg)
  const [ogg, setOgg] = useState({});
  // console.log(oggPref)
  useEffect(() => {
    setOgg({ titolo, company, location, published });
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
            <p className="periodoFormazione secondoSottotitolo">
              {published}
              <span
                className="float-end"
                style={{ marginTop: "-5dvh", marginRight: "2dvh" }}
              >
                <i
                  onClick={(ele) => handlePrefe(ele)}
                  className="bi bi-heart-fill fs-5"
                ></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
