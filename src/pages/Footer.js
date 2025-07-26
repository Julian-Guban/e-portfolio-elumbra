import React from "react";

function Footer() {
  return (
    <footer className="flex-center flex-column">
      <p>
        <i style={{ color: "gray" }}>
          "Effective teaching is all about clear communication, being prepared,
          keeping students engaged, and bringing energy to create a fun and
          inclusive learning environment."
        </i>
      </p>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} TUP-Taguig | School Year 2024-2025
      </p>
    </footer>
  );
}

export default Footer;
