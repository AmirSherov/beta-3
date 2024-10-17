import "./style.scss";
import Logo from "../../../assets/images/logo.jpg";

function Nav(props) {
  function menuToggler(e) {
    const menu = document.querySelector(".modal-menu");
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      menu.style.transform = "translateX(0)";
    } else {
      menu.style.transform = "translateX(-100%)";
    }
  }
  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-logo">
          <img src={Logo} width={50} style={{ borderRadius: "50%" }} height={50} alt="" />
          <span>News </span>  <span>  <i>  -50</i></span>
        </div>
        <div onClick={() => menuToggler()} className="menu-toggler">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="modal-menu">
          <div className="modal-text">
          More opportunities will be soon 😊
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav;