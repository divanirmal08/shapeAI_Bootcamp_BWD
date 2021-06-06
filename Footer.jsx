import REACT from "react";
import REACTDOM from "react-dom";

var currYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p> copyright @ {currYear} </p>
    </footer>
  );
}

export default Footer;
