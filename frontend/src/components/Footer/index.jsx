import "./style.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import { context } from "../../../store";
import { useContext } from "react";


function Footer(props) {
  const { state } = useContext(context);
  let marginTop = {
    "marginTop": props.title
  }
  return (
    <footer className="footer" style={{marginTop,backgroundColor: state.darkMode ? "black" : "white"}}>
     <div className="footer-logo">
        <img src={Logo}  style={{ borderRadius: "50%" }}  alt="" />
     </div>
     <div className="footer-text">
        <p><span><i>News</i></span ><i style={{color: state.darkMode ? "white" : "black"}}> -50</i></p>
     </div>
    </footer>

  );
}
export default Footer;