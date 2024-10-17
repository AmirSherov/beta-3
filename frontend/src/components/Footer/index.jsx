import "./style.scss";
import { Link } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { MdSaveAs } from "react-icons/md";
import Logo from "../../assets/images/Logo.png";

function Footer(props) {
  let marginTop = {
    "marginTop": props.title
  }
  return (
    <footer className="footer" style={marginTop}>
     

      <h1><Link className="footerLogo" to={"/"} ><img src={Logo } alt="" /></Link></h1>

      <div className="info">
        <h3>Contact Info</h3>
        <h2>17 Princess Road, London, Greater London NW1 8JR, UK</h2>
      </div>
      <div className="Pages">
        <h2>Pages</h2>
        <p><Link className="linksNav" to={"/"}>Features</Link></p>
        <p><Link className="linksNav" to={"reservs"}><MdSaveAs />Developers</Link></p>
        <p><Link className="linksNav" to={"login"}><IoIosContact />Company</Link></p>
        <p><Link className="linksNav" to={"login"}><IoIosContact />Blog</Link></p>
        <p><Link className="linksNav" to={"login"}><IoIosContact />Changelog</Link></p>
      </div>
      <div className="items">
        <div className="text">© Solan - All Rights Reserved</div>
      </div>
    </footer>

  );
}
export default Footer;