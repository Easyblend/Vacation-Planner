import { useState } from "react";
import { useParams, Link } from "react-router-dom";

function CardDetails({ Data }) {
  const [load, isload] = useState(true);

  setTimeout(() => isload(false), 1500);

  const navigate = useParams();
  var newArray = Data.filter(function (data) {
    return data.name === navigate.name;
  });
  const [dataObj] = newArray;
  return (
    <>
      {load ? (
        <div className="load"></div>
      ) : (
        <div className="card-detail">
          <div className="cardimg-section">
            <img src={dataObj.img} alt={dataObj.type} />
            <div className="card-detail-btn">
              <a
                target="blank"
                href="https://www.expedia.com/Vacation-Packages?semcid=US.UB.BING.GT-c-EN.PACKAGE&SEMDTL=a1361531955.b11287528469155849.r1.g1kwd-80470772109439:loc-73.i1.d1.e1c.j1148541.k1.f1.n1.l1o.h1p.m1&msclkid=c5736c5126d41288796f0f079c6e9387&utm_source=bing&utm_medium=cpc&utm_campaign=BEX%3AUSA%3AENG%3A%25%3AGT%3AGLOB%3AALL%3AX%3AX%3AVacation%7CPackages%3A-G10650897092&utm_term=vacations&utm_content=USA%3AENG%3A%25%3AGT%3AGLOB%3AALL%3AXX%3AX%3AX%3AX%3AX%3AX%3AX%3AVacation%7CPackages%3A">
                <button className="bookflight-btn">Book a Flight</button>
              </a>

              <Link to="/">
                <button className="bookflight-btn btn-back">
                  Previous Menu
                </button>
              </Link>
            </div>
          </div>
          <div className="card-description">
            <h1>{dataObj.name}</h1>
            <p>{dataObj.description}</p>
            <div className="extra-detail">
              <h4>
                <span>Distance:</span> {dataObj.distance}
              </h4>
              <h4>
                <span>Type:</span> {dataObj.type}
              </h4>
              <h4>
                <span>Estimated Budget:</span> ${dataObj.budget}
              </h4>
              <h4>
                <span>Temperature:</span>
                {dataObj.temperature}
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardDetails;
