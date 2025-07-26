import React, { useState } from "react";
import file from "../../assets/DLP_ELUMBRA/DLP_ELUMBRA.pdf";
import file0 from "../../assets/DLP_ELUMBRA/DLP_ELUMBRA-images-0.jpg";
import file1 from "../../assets/DLP_ELUMBRA/DLP_ELUMBRA-images-1.jpg";
import file2 from "../../assets/DLP_ELUMBRA/DLP_ELUMBRA-images-2.jpg";
import file3 from "../../assets/DLP_ELUMBRA/DLP_ELUMBRA-images-3.jpg";
import file4 from "../../assets/DLP_ELUMBRA/DLP_ELUMBRA-images-4.jpg";
import file5 from "../../assets/DLP_ELUMBRA/DLP_ELUMBRA-images-5.jpg";

function DLP() {
  const images = [file0, file1, file2, file3, file4, file5];
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
      <div
        className="flex-row"
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <h2 style={{ color: "gray" }}>- Detailed Lesson Plan</h2>
        <button className="btn btn-primary">
          <a href={file} target="_blank" rel="noreferrer">
            Download DLP
          </a>
        </button>
      </div>
      <div
        className="flex-row"
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
                width={"400px"}
                height={"100%"}
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
                style={{ objectFit: "cover", borderRadius: "5px" }}
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

export default DLP;
