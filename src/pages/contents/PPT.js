import React, { useState } from 'react'
import file from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials.pdf";
import file0 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-0.jpg";
import file1 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-1.jpg";
import file2 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-2.jpg";
import file3 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-3.jpg";
import file4 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-4.jpg";
import file5 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-5.jpg";
import file6 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-6.jpg";
import file7 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-7.jpg";
import file8 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-8.jpg";
import file9 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-9.jpg";
import file10 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-10.jpg";
import file11 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-11.jpg";
import file12 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-12.jpg";
import file13 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-13.jpg";
import file14 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-14.jpg";
import file15 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-15.jpg";
import file16 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-16.jpg";
import file17 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-17.jpg";
import file18 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-18.jpg";
import file19 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-19.jpg";
import file20 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-20.jpg";
import file21 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-21.jpg";
import file22 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-22.jpg";
import file23 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-23.jpg";
import file24 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-24.jpg";
import file25 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-25.jpg";
import file26 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-26.jpg";
import file27 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-27.jpg";
import file28 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-28.jpg";
import file29 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-29.jpg";
import file30 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-30.jpg";
import file31 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-31.jpg";
import file32 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-32.jpg";
import file33 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-33.jpg";
import file34 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-34.jpg";
import file35 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-35.jpg";
import file36 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-36.jpg";

function PPT() {
  const images = [file0, file1, file2, file3, file4, file5, file6, file7, file8, file9, file10, file11, file12, file13, file14, file15, file16, file17, file18, file19, file20, file21, file22, file23, file24, file25, file26, file27, file28, file29, file30, file31, file32, file33, file34, file35, file36];
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
        <h2 style={{ color: "gray" }}>- PowerPoint Presentation</h2>
        <button className="btn btn-primary">
          <a href={file} target="_blank" rel="noreferrer">
            Download PPT
          </a>
        </button>
      </div>
      <div
        className="flex-column flex-center"
        style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}
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
                height={"380px"}
                loading="lazy"
              />
            </li>
          </ul>
          <button className="carousel-btn next" onClick={increment}>
            &#8594;
          </button>
        </div>
        <div
          style={{
            width: "600px",
            flex: 1,
            marginLeft: "20px",
            display: "flex",
            flexDirection: "row",
            overflow:"auto"
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
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: "5px" }}
              />
              <p>Page {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PPT