import React from "react";
import img1 from "../../assets/Documentations/1.png";
import img2 from "../../assets/Documentations/2.png";
import img3 from "../../assets/Documentations/3.png";
import dlp1 from "../../assets/DLP_ELUMBRA/DLP_ELUMBRA-images-0.jpg";
import dlp2 from "../../assets/DLP_ELUMBRA/DLP_ELUMBRA-images-1.jpg";
import dlp3 from "../../assets/DLP_ELUMBRA/DLP_ELUMBRA-images-2.jpg";
import ppt1 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-2.jpg";
import ppt10 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-10.jpg";
import ppt15 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-15.jpg";
import ppt20 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-20.jpg";
import ppt36 from "../../assets/PPT_ELUMBRA/PPT_Recyclable Materials-images-36.jpg";
import { useNavigate } from "react-router-dom";

function Cabinet() {
  const navigate = useNavigate();
  return (
    <div
      className="flex-center"
      style={{ width: "inherit", height: "inherit" }}
    >
      <div className="masonry">
        <div className="item">
          <img
            src={ppt1}
            alt="1st Page of Presentation"
            onClick={() => navigate("/ppt")}
            loading="lazy"
          />
        </div>

        <div className="item">
          <img
            src={img1}
            alt="Documentation 1"
            onClick={() => navigate("/documentation")}
            loading="lazy"
          />
        </div>

        <div className="item">
          <img
            src={dlp1}
            alt="DLP 1st page"
            onClick={() => navigate("/dlp")}
            loading="lazy"
          />
        </div>

        <div className="item">
          <img
            src={ppt10}
            alt="10th Page of Presentation"
            onClick={() => navigate("/ppt")}
            loading="lazy"
          />
        </div>

        <div className="item">
          <img
            src={img2}
            alt="Documentation 2"
            onClick={() => navigate("/documentation")}
            loading="lazy"
          />
        </div>

        <div className="item">
          <img
            src={dlp3}
            alt="DLP 3rd page"
            onClick={() => navigate("/dlp")}
            loading="lazy"
          />
        </div>

        <div className="item">
          <img
            src={img3}
            alt="Documentation 3"
            onClick={() => navigate("/documentation")}
            loading="lazy"
          />
        </div>
        <div className="item">
          <img
            src={dlp2}
            alt="DLP 2nd page"
            onClick={() => navigate("/dlp")}
            loading="lazy"
          />
        </div>
        <div className="item">
          <img
            src={ppt20}
            alt="20th Page of Presentation"
            onClick={() => navigate("/ppt")}
            loading="lazy"
          />
        </div>
        <div className="item">
          <img
            src={ppt15}
            alt="15th Page of Presentation"
            onClick={() => navigate("/ppt")}
            loading="lazy"
          />
        </div>

        <div className="item">
          <img
            src={ppt36}
            alt="Last Page of Presentation"
            onClick={() => navigate("/ppt")}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Cabinet;
