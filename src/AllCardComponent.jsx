import { useState } from "react";
import { Link } from "react-router-dom";

function AllCard({ Data }) {
  const [load, isload] = useState(true);

  setTimeout(() => isload(false), 2000);

  return (
    <div className="search-container">
      {load ? (
        <div className="load"></div>
      ) : (
        <div className="searched-container">
          {Data.length == 0 ? (
            <div>
              <h1>No Search Matched Your Preferences</h1>
              <Link to="/">
                <button className="search-btn">Go Back</button>
              </Link>
            </div>
          ) : (
            <div>
              <h2>Top Picks Based on Your Interest</h2>
              <Link to="/">
                <button className="search-btn ">Go Back</button>
              </Link>

              <div className="search-card-container">
                {Data.map((data) => {
                  return (
                    <Link to={`/carddetail/${data.name}`} key={data.id}>
                      <div
                        className="searched-card all"
                        style={{
                          backgroundImage: `url(${data.img})`,
                        }}>
                        <h2> {data.name}</h2>
                        <p>Budget ${data.budget}</p>
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

export default AllCard;
