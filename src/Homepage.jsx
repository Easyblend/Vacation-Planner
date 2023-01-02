import { Link } from "react-router-dom";
import Data from "./Database";
import SingleCard from "./SingleCardComponent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { useState } from "react";
import Searched from "./SearchedComponent";

function HomePage() {
  const [load, isload] = useState(true);

  setTimeout(() => isload(false), 500);

  const [check, isCheck] = useState({
    mountain: false,
    beach: false,
    city: false,
  });
  const [type, setType] = useState();

  const [distanceCheck, isDistanceCheck] = useState({
    long: false,
    short: false,
    both: false,
  });
  const [distance, setDistance] = useState();

  const [tempCheck, isTempCheck] = useState({
    cold: false,
    hot: false,
    both: false,
  });
  const [temp, setTemp] = useState();

  const [budgetCheck, isBudgetCheck] = useState({
    low: false,
    high: false,
    medium: false,
  });
  const [budget, setBudget] = useState();

  const clear = () => {
    isCheck({ ...check, mountain: false, beach: false, city: false });
    isDistanceCheck({
      ...distanceCheck,
      long: false,
      short: false,
      both: false,
    });
    isTempCheck({
      ...tempCheck,
      cold: false,
      hot: false,
      both: false,
    });
    isBudgetCheck({
      ...budgetCheck,
      high: false,
      low: false,
      medium: false,
    });

    setType("");
    setBudget("");
    setDistance("");
    setTemp("");
  };

  const [click, isClick] = useState(false);
  const sort = Data.filter((sorted) => {
    return (
      sorted.type === type ||
      sorted.distance === distance ||
      sorted.temperature === temp ||
      parseInt(sorted.budget, 10) <= budget
    );
  });

  const resetClick = () => {
    isClick(!click);
  };

  return (
    <>
      {load ? (
        <div className="load"></div>
      ) : (
        <>
          {click ? (
            <Searched sortData={sort} />
          ) : (
            <div className="home">
              <div className="home-text">
                <h1 className="intro-text">
                  let's Plan Your Next{" "}
                  <span className="highlight">Vacation </span>
                  Together, Right Here, Right Now
                </h1>
                <p className="home-description">
                  A fixed holiday period between terms in universities and law
                  courts. The Easter vacation the action of leaving something
                  one previously occupied. His marriage was the reason for the
                  vacation of his fellowship
                </p>
                <a href="#card-scroll" className="get-started">
                  <button className="home-btn">Get Started</button>
                </a>
                <Link to="/all-card" className="get-started">
                  <button className="home-btn ">Vacation List</button>
                </Link>
              </div>

              <section>
                <h1 className="section-title">Where Are We Heading To?</h1>

                <div className="radio-btn">
                  <div className="type-btn">
                    <h4>Preference</h4>
                    <label htmlFor="mountain">
                      <input
                        type="radio"
                        id="mountain"
                        name="type"
                        value="mountain"
                        checked={check.mountain}
                        onClick={() => isCheck(true)}
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                      />
                      Mountains
                    </label>
                    <label htmlFor="beach">
                      <input
                        type="radio"
                        id="beach"
                        name="type"
                        value="beach"
                        checked={check.beach}
                        onChange={(e) => {
                          setType(e.target.value);
                          isCheck(true);
                        }}
                      />
                      Beach
                    </label>

                    <label htmlFor="city">
                      <input
                        type="radio"
                        id="city"
                        name="type"
                        value="city"
                        checked={check.city}
                        onClick={() => isCheck(true)}
                        onChange={(e) => setType(e.target.value)}
                      />
                      City
                    </label>
                  </div>

                  <div className="distance-btn">
                    <h4>Distance</h4>
                    <label htmlFor="long">
                      <input
                        type="radio"
                        id="long"
                        name="distance"
                        value="long"
                        checked={distanceCheck.long}
                        onChange={(e) => setDistance(e.target.value)}
                        onClick={() => isDistanceCheck(true)}
                      />
                      Long
                    </label>
                    <label htmlFor="short">
                      <input
                        type="radio"
                        id="short"
                        name="distance"
                        value="short"
                        checked={distanceCheck.short}
                        onClick={() => isDistanceCheck(true)}
                        onChange={(e) => setDistance(e.target.value)}
                      />
                      Short
                    </label>
                    <label htmlFor="both">
                      <input
                        type="radio"
                        id="both"
                        name="distance"
                        value="both"
                        checked={distanceCheck.both}
                        onChange={(e) => setDistance(e.target.value)}
                        onClick={() => isDistanceCheck(true)}
                      />
                      Both
                    </label>
                  </div>
                  <div className="temperature-btn">
                    <h4>Temperature</h4>
                    <label htmlFor="cold">
                      <input
                        type="radio"
                        id="cold"
                        name="temperature"
                        value="cold"
                        checked={tempCheck.cold}
                        onChange={(e) => setTemp(e.target.value)}
                        onClick={() => isTempCheck(true)}
                      />
                      Cold
                    </label>
                    <label htmlFor="hot">
                      <input
                        type="radio"
                        id="hot"
                        name="temperature"
                        value="hot"
                        checked={tempCheck.hot}
                        onChange={(e) => setTemp(e.target.value)}
                        onClick={() => isTempCheck(true)}
                      />
                      Hot
                    </label>
                    <label htmlFor="tempboth">
                      <input
                        type="radio"
                        id="tempboth"
                        name="temperature"
                        value="both"
                        checked={tempCheck.both}
                        onChange={(e) => setTemp(e.target.value)}
                        onClick={() => isTempCheck(true)}
                      />
                      Both
                    </label>
                  </div>
                  <div className="budget-btn">
                    <h4>Budget</h4>
                    <label htmlFor="low">
                      <input
                        type="radio"
                        id="low"
                        name="budget"
                        value="500"
                        checked={budgetCheck.low}
                        onChange={(e) => setBudget(e.target.value)}
                        onClick={(e) => isBudgetCheck(true)}
                      />
                      Under $500
                    </label>
                    <label htmlFor="average">
                      <input
                        type="radio"
                        id="average"
                        name="budget"
                        value="10000"
                        checked={budgetCheck.medium}
                        onChange={(e) => setBudget(e.target.value)}
                        onClick={(e) => isBudgetCheck(true)}
                      />
                      Over $500
                    </label>
                    <label htmlFor="high">
                      <input
                        type="radio"
                        id="high"
                        name="budget"
                        value="1000"
                        checked={budgetCheck.high}
                        onChange={(e) => setBudget(e.target.value)}
                        onClick={(e) => isBudgetCheck(true)}
                      />
                      All Prices
                    </label>
                  </div>
                </div>

                <div className="search-bar">
                  <button className="search-btn" onClick={resetClick}>
                    <i className="fa-solid fa-magnifying-glass"></i>Find it
                    Already!!
                  </button>

                  <button className="search-btn clear" onClick={clear}>
                    <i className="fa-solid fa-xmark"></i>Clear Filter
                  </button>
                </div>

                <div className="list-vacation" id="card-scroll">
                  <ListVacation />
                </div>
              </section>
            </div>
          )}
        </>
      )}
    </>
  );
}

const ListVacation = () => {
  return (
    <Splide
      options={{
        perPage: 4,
        start: 7,
        type: "loop",
        autoplay: true,
        interval: 3000,
        breakpoints: {
          1650: {
            perPage: 3,
          },
          900: {
            perPage: 2,
          },
          615: {
            perPage: 1,
            type: "loop",
            autoplay: false,
          },
        },
      }}>
      {Data.map((vacation) => {
        return (
          <SplideSlide key={vacation.id}>
            <SingleCard vacation={vacation} key={vacation.id} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default HomePage;
