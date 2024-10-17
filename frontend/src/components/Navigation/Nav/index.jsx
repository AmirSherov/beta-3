import "./style.scss";
import 'sweetalert2/src/sweetalert2.scss';
import Logo from '../../../assets/images/Logo.png'

function Nav(props) {
  function menuToggler(e) {
    const menu = document.getElementById("menu-wrapper");
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
      menu.style.transform = "translateY(0px)";
    } else {
      menu.style.transform = "translateY(-1500px)";
    }
  }

  return (
    <>
      <div className="nav-wrapper">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-LinksContainer">
          <div>Featurest</div>
          <div>Developers</div>
          <div>Company</div>
          <div>Blog</div>
          <div>Changelog</div>
        </div>
        <div className="nav-button">
          <button>Join waitlist</button>
        </div>
        <div onClick={() => menuToggler()} className="menu-toggler">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div id="menu-wrapper">
        <div className="menu-links-container">
          <div>Featurest</div>
          <div>Developers</div>
          <div>Company</div>
          <div>Blog</div>
          <div>Changelog</div>
        </div>
      </div>
    </>
  )
}

export default Nav;