import { useState } from "react";

function Creator() {
  const [load, isload] = useState(true);

  setTimeout(() => isload(false), 1000);

  return (
    <>
      {load ? (
        <div className="load"></div>
      ) : (
        <div className="creator-container">
          <h1 className="creator-title">Creator's Page</h1>
          <div className="creator-img"></div>
          <h3 className="creator-name">Emmanuel Kumah</h3>
          <p className="creator-description">
            I am a person who is positive about every aspect of life. There are
            many things I like to do, to see, and to experience. I like to read,
            I like to write; I like to think, I like to dream; I like to talk, I
            like to listen. I like to see the sunrise in the morning, I like to
            see the moonlight at night; I like to feel the music flowing on my
            face, I like to smell the wind coming from the ocean. I like to look
            at the clouds in the sky with a blank mind, I like to do thought
            experiment when I cannot sleep in the middle of the night. I like
            flowers in spring, rain in summer, leaves in autumn, and snow in
            winter. I like to sleep early, I like to get up late; I like to be
            alone, I like to be surrounded by people. I like country’s peace, I
            like metropolis’ noise; I like the beautiful west lake in Hangzhou,
            I like the flat cornfield in Champaign. I like delicious food and
            comfortable shoes; I like good books and romantic movies. I like the
            land and the nature, I like people. And, I like to laugh.
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/easy_blend93/" target="blanc">
              <img src="instagram 1.png" alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-kumah-692431224/"
              target="blanc">
              <img src="linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com/easyblend85" target="blanc">
              <img src="twitter.png" alt="Twitter" />
            </a>
            <a
              href="https://github.com/Easyblend?tab=overview&from=2022-10-01&to=2022-10-25"
              target="blanc">
              <img src="github.png" alt="GitHub" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Creator;
