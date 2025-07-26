import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import home from "../assets/icons/home_44428.png";
import dlp from "../assets/icons/business-plan_7111109.png";
import ppt from "../assets/icons/presentation_5227317.png";
import reflection from "../assets/icons/reflection_17677694.png";
import exam from "../assets/icons/paper_3640488.png";
import docu from "../assets/icons/file-cabinet_3280876.png";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  return (
    <header>
      <div className="flex-row" style={{ paddingInline: "10px" }}>
        <button
          className={`btn btn-secondary ${currentPath === "/" && "active"}`}
          onClick={() => navigate("/")}
        >
          <img
            src={home}
            alt="Home"
            width={"20px"}
            height={"20px"}
            loading="lazy"
          />
          <span>Home</span>
        </button>
        <button
          className={`btn btn-secondary ${
            currentPath.includes("dlp") && "active"
          }`}
          onClick={() => navigate("/dlp")}
        >
          <img
            src={dlp}
            alt="Detailed Lesson Plan"
            width={"20px"}
            height={"20px"}
            loading="lazy"
          />
          <span>DLP</span>
        </button>
        <button
          className={`btn btn-secondary ${
            currentPath.includes("ppt") && "active"
          }`}
          onClick={() => navigate("/ppt")}
        >
          <img
            src={ppt}
            alt="PowerPoint Presentation"
            width={"20px"}
            height={"20px"}
            loading="lazy"
          />
          <span>PPT</span>
        </button>
        <button
          className={`btn btn-secondary ${
            currentPath.includes("reflections") && "active"
          }`}
          onClick={() => navigate("/reflections")}
        >
          <img
            src={reflection}
            alt="Reflections"
            width={"20px"}
            height={"20px"}
            loading="lazy"
          />
          <span>Reflections</span>
        </button>
        <button
          className={`btn btn-secondary ${
            currentPath.includes("exam") && "active"
          }`}
          onClick={() => navigate("/exam")}
        >
          <img
            src={exam}
            alt="Exam"
            width={"20px"}
            height={"20px"}
            loading="lazy"
          />
          <span>Exam</span>
        </button>
        <button
          className={`btn btn-secondary ${
            currentPath.includes("documentation") && "active"
          }`}
          onClick={() => navigate("/documentation")}
        >
          <img
            src={docu}
            alt="Documentation"
            width={"20px"}
            height={"20px"}
            loading="lazy"
          />
          <span>Documentation</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
