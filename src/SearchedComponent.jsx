import { useState } from "react";
import { Link } from "react-router-dom";

function Searched({ sortData }) {
  function refreshPage() {
    window.location.reload(false);
  }

  const [load, isload] = useState(true);

  setTimeout(() => isload(false), 2000);

  return (
    <div className="search-container">
      {load ? (
        <div className="load"></div>
      ) : (
        <div className="searched-container">
          {sortData.length == 0 ? (
            <div>
              <h1>No Search Matched Your Preferences</h1>
              <button className="search-btn" onClick={refreshPage}>
                Go Back
              </button>
            </div>
          ) : (
            <div>
              <h2>Top Picks Based on Your Interest</h2>
              <button className="search-btn" onClick={refreshPage}>
                Go Back
              </button>

              <div className="search-card-container">
                {sortData.map((data) => {
                  return (
                    <Link to={`/carddetail/${data.name}`} key={data.id}>
                      <div
                        className="searched-card"
                        style={{
                          backgroundImage: `url(${data.img})`,
                        }}>
                        <div>
                          {data.name}
                          <p>Click to view</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Searched;
