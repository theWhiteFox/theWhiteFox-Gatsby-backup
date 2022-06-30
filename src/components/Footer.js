import React from "react";

function Footer() {
  return (
    <footer>
      <p style={{ textAlign: "center", padding: "3rem" }}>
        <a href="https://theWhiteFox.ninja">theWhiteFox</a> ! &copy;{" "}
        {new Date().getFullYear()} | Made with{" "}
        <a href="https://www.gatsbyjs.com/">
          <i aria-hidden="true">Gatsby</i>
        </a>{" "}
        <a href="https://github.com/theWhitefox">
          <i aria-hidden="true" className="github alternate icon"></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
