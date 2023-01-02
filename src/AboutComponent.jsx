import { useState } from "react";

const About = () => {
  const [load, isload] = useState(true);

  setTimeout(() => isload(false), 1000);

  return (
    <>
      {load ? (
        <div className="load"></div>
      ) : (
        <div className="about">
          <div className="about-header">
            <h1>ABOUT</h1>
          </div>
          <div className="aboutsection-1">
            <img
              src="https://images.unsplash.com/photo-1512552288940-3a300922a275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="img"
            />
            <p>
              <span className="capital">R</span> esearch shows planning a
              vacation can boost your happiness. Some people experience an
              elevated mood up to eight weeks before the trip. One study found
              that three days after vacation, subjects' physical complaints,
              quality of sleep, and mood had improved compared to before
              vacation. Studies have shown that taking time away from the job
              can have physical and mental health benefits. People who take
              vacations have lower stress, less risk of heart disease, a better
              outlook on life, and more motivation to achieve goals.
            </p>
          </div>
          <div className="aboutsection-1 b">
            <p>
              <span className="capital">S</span>
              tress can contribute to heart disease and high blood pressure. For
              both men and women, the New York Times reported, taking a vacation
              every two years compared to every six will lessen the risk of
              coronary heart disease or heart attacks. Studies have shown that
              taking time away from the job can have physical and mental health
              benefits. People who take vacations have lower stress, less risk
              of heart disease, a better outlook on life, and more motivation to
              achieve goals.
            </p>
            <img
              src="https://images.unsplash.com/photo-1566371486490-560ded23b5e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="img"
            />
          </div>
          <div className="aboutsection-1 c">
            <img
              src="https://images.unsplash.com/photo-1564613469739-c78f970f9c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80"
              alt="img"
            />
            <p>
              <span className="capital">E</span>
              mployees who take regular time to relax are less likely to
              experience burnout, making them more creative and productive than
              their overworked, under-rested counterparts. Another way to manage
              burnout is through the Oxygen Mask Rule: "Secure your masks before
              assisting others." In other words, address your mental, physical
              and spiritual needs before committing to responsibilities
              benefitting others outside of your immediate family. People who
              take vacations have lower stress, less risk of heart disease, a
              better outlook on life, and more motivation to achieve goals.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
