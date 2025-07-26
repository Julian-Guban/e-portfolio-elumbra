import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import hi from "./assets/icons/hi.png";
import Cabinet from "./pages/contents/Cabinet";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import DLP from "./pages/contents/DLP";
import PPT from "./pages/contents/PPT";
import Reflections from "./pages/contents/Reflections";
import Exam from "./pages/contents/Exam";
import Documentation from "./pages/contents/Documentation";
import Redirect from "./pages/redirectionRoute";

function App() {
  return (
    <div className="App">
      <div className="window">
        <img src={hi} alt=" " width={"100%"} height={"250px"} loading="lazy" />
        <p
          style={{
            textAlign: "center",
            color: "black",
            lineHeight: "23px",
            marginInline: "10px",
          }}
        >
          This is the E-Portfolio of{" "}
          <a
            style={{
              color: "black",
              textWrap: "nowrap",
              fontWeight: "bold",
              fontSize: "bolder",
            }}
            href="https://www.facebook.com/Dhyonah"
            target="_blank"
            rel="noreferrer"
          >
            Ms. Elumbra, Jonalyn
          </a>{" "}
          from BTVTEdICT-CP-3D
        </p>
      </div>
      <div className="panel">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Cabinet />} />
            <Route path="/dlp" element={<DLP />} />
            <Route path="/ppt" element={<PPT />} />
            <Route path="/reflections" element={<Reflections />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="*" element={<Redirect />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
