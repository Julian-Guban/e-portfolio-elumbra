import React, { useState } from "react";
import tos from "../../assets/Exams/TOS.jpg";
import topic from "../../assets/Exams/Topics.jpg";
import file from "../../assets/Exams/EXAM_ELUMBRA.pdf";
import file1 from "../../assets/Exams/Exam-2.jpg";
import file2 from "../../assets/Exams/Exam-3.jpg";
import file3 from "../../assets/Exams/Exam-4.jpg";
import file4 from "../../assets/Exams/Exam-5.jpg";
import file5 from "../../assets/Exams/Exam-6.jpg";
import file6 from "../../assets/Exams/Exam-7.jpg";
// Answer Key
import file7 from "../../assets/Exams/Exam-8.jpg";
import file8 from "../../assets/Exams/Exam-1.jpg";

function Exam() {
  const images = [file1, file2, file3, file4, file5, file6, file7, file8];
  const [inc, setInc] = useState(0);

  const increment = () => {
    setInc((prevInc) => (prevInc + 1) % images.length); // Loop back to 0 after the last image
  };

  const decrement = () => {
    setInc((prevInc) => (prevInc - 1 + images.length) % images.length); // Loop to the last image if going backwards from 0
  };

  const goToImage = (index) => {
    setInc(index);
  };

  return (
    <div
      className="flex-center flex-column"
      style={{ width: "100%", height: "inherit", paddingInline: "10px" }}
    >
      <div className="flex-column">
        <div className="tos-topic flex-column">
          <h2>TOS: </h2>
          <img
            src={tos}
            alt="Loading..."
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
        <div className="tos-topic flex-column">
          <h2>Topics:</h2>
          <img
            src={topic}
            alt="Loading..."
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
      </div>

      <div
        className="flex-row ppt-header"
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <h2>Exam: </h2>
        <button className="btn btn-primary">
          <a href={file} target="_blank" rel="noreferrer">
            Download Exam
          </a>
        </button>
      </div>

      <div
        className="flex-row  exam-container"
        style={{ position: "relative", alignItems: "flex-start" }}
      >
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
                alt="Loading..."
                width={"700px"}
                height={"100%"}
                loading="lazy"
                style={{
                  rotate: (inc === 6 || inc === 7) && "180deg"
                }}
              />
            </li>
          </ul>
          <button className="carousel-btn next" onClick={increment}>
            &#8594;
          </button>
        </div>
        <div
          className="preview-column"
          style={{
            flex: 1,
            marginLeft: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => goToImage(index)}
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                padding: "5px",
                backgroundColor: inc === index ? "#000000ff" : "transparent", // Highlight current image
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
              }}
            >
              <img
                src={image}
                alt={`Preview ${index}`}
                width={"60px"}
                height={"auto"}
                style={{ objectFit: "cover", borderRadius: "5px", rotate: (index === 6 || index === 7) && ("180deg") }}
                loading="lazy"
              />
              <p>Page {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Exam;
