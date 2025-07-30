import React, { useState } from "react";
import img1 from "../../assets/Documentations/1.png";
import img2 from "../../assets/Documentations/2.png";
import img3 from "../../assets/Documentations/3.png";

function Documentation() {
  const images = [img1, img2, img3];
  const [inc, setInc] = useState(0);
  const increment = () => {
    setInc((prevInc) => (prevInc + 1) % images.length); // Loop back to 0 after the last image
  };

  const decrement = () => {
    setInc((prevInc) => (prevInc - 1 + images.length) % images.length); // Loop to the last image if going backwards from 0
  };

  return (
    <div>
      <div
        className="flex-row"
        style={{
          width: "100%",
          justifyContent: "left",
          alignItems: "flex-end",
        }}
      >
        <h2 style={{ color: "gray" }}>- Documentation</h2>
      </div>
      <hr />

      <div className="flex-center" style={{ width: "100%", height: "100%" }}>
        <div
          className="carousel-container"
          style={{ position: "sticky", top: "0" }}
        >
          <button className="carousel-btn prev" onClick={decrement}>
            &#8592;
          </button>
          <ul className="carousel-track">
            <li className="slide">
              <img
                src={images[inc]}
                alt={`Documentation ${inc}`}
                width={"100%"}
                height={"100%"}
                loading="lazy"
              />
            </li>
          </ul>
          <button className="carousel-btn next" onClick={increment}>
            &#8594;
          </button>
        </div>
      </div>
      <hr />

      <div className="flex-column" style={{ width: "inherit", padding: "10px", gap:"10px" }}>
        <p style={{textDecoration: "italic"}}>
          Date: <b>June 13, 2025</b>
        </p>
        <p>
          Subject: <b>Home Economics - TLE </b>
        </p>
        <p>
          Topic: <b>Recyclable Materials</b>
        </p>
        <p style={{ textIndent: "1.5em" }}>
          On June 13, 2025, I conducted my demo teaching in Home Economics TLE7
          with the topic “Recyclable Materials.” It was a fulfilling and
          memorable experience that tested my preparedness, creativity, and
          ability to connect with students.
        </p>
        <p style={{ textIndent: "1em" }}>
          Before the demo, I carefully crafted my lesson plan and prepared
          visual aids showing different types of recyclable materials. I wanted
          the students to understand not only how to identify recyclable
          materials but also the importance of recycling. As the class started,
          I began with a simple yet engaging icebreaker, Guess the picture
          recyclable or reusable edition. Many Students get correct answers.
          This created a positive and participative atmosphere right from the
          start.
        </p>
        <p style={{ textIndent: "1em" }}>
          During the discussion, I used visuals to help students really
          understand the types of recycling. I also explained the advantages of
          recycling. For the activity, I divided the class into 9 groups. Their
          task was to create recyclable items, for example baskets from old
          newspapers with the time allotment of 25mins only my mistake here in
          constructing activity is not suitable for 45mins so next time I would
          be very mindful of the time allotment as my teacher said to me. Then
          the delivery of my instructions to the students is not clear.
        </p>
        <p style={{ textIndent: "1em" }}>
          After the activity, I gave a short quiz and assignment. I was advised
          to improve the time allotment like 20mins for lessons and 15 mins for
          the activity.
        </p>
        <p style={{ textIndent: "1em" }}>
          In conclusion, my demo teaching on recyclable materials was a success.
          There is only part of it that I need improvement especially in
          delivering instructions to the students. It deepened my understanding
          of learner-centered strategies and showed me the importance of making
          lesson plan that align to the objectives. Most of all, it reminded me
          that teaching is not just about delivering content, but about
          inspiring action and awareness even in simple topics.
        </p>
      </div>
    </div>
  );
}

export default Documentation;
