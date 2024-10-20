import "./style.scss";
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa6";
import Logo from "../../../assets/images/logo.jpg";
import { useState, useEffect, useContext } from "react";
import { context, initialState } from "../../../../store";
import { Link } from "react-router-dom";

function Nav(props) {
  const { state, dispatch } = useContext(context)
  function menuToggler(e) {
    const menu = document.querySelector(".modal-menu");
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      menu.style.transform = "translateX(0)";
    } else {
      menu.style.transform = "translateX(-100%)";
    }
  }
  function themeToggler(e) {
    const back = document.querySelector("#theme-toggler-back");
    back.classList.toggle("active");
    if (back.classList.contains("active")) {
      back.style.transform = "translateX(37px)";
      dispatch({ type: "darkMode", payload: true })
    } else {
      back.style.transform = "translateX(0)";
      dispatch({ type: "darkMode", payload: false })
    }
  }
  return (
    <>
      <div style={{ backgroundColor: state.darkMode ? "black" : "white" }} className="nav-wrapper">
        <Link to={"/"}>
        <div className="nav-logo">
          <img src={Logo} width={50} style={{ borderRadius: "50%" }} height={50} alt="" />
          <span>News </span>  <span>  <i style={{ color: state.darkMode ? "white" : "black" }}>  -50</i></span>
        </div></Link>
        <div onClick={() => menuToggler()} className="menu-toggler">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="modal-menu">
          <div className="modal-items">
            <div onClick={() => themeToggler()} className="theme-toggler">
              <div><LuSun/></div>
              <div id="theme-toggler-back"></div>
              <div><FaRegMoon/></div> 
            </div>
            <div style={{color:"white"}}>
              More opportunities will be soon :)
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav;