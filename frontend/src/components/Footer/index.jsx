import "./style.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";

function Footer(props) {
  let marginTop = {
    "marginTop": props.title
  }
  return (
    <footer className="footer" style={marginTop}>
     <div className="footer-logo">
        <img src={Logo}  style={{ borderRadius: "50%" }}  alt="" />
     </div>
     <div className="footer-text">
        <p><span><i>News</i></span> -50</p>
     </div>
    </footer>

  );
}
export default Footer;