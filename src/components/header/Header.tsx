import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [menu, setMenu] = useState(false);
  //
  const [cursorX, setCursorX] = useState<number | undefined>();
  const [cursorY, setCursorY] = useState<number | undefined>();
  //
  const changeMenu = () => {
    if (window.scrollY >= 2) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  window.addEventListener("scroll", changeMenu);
  //
  window.addEventListener("mousemove", (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });
  //
  const [active, setActive] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <p>©</p>
            <h1 className="anm-logo">Code by Umarkhon Sobirov Umarkhon</h1>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
          <div className="navbar">
            <p>Projects</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className={menu ? "menu" : "menu2"}>
            <div className="submenu">
              <div
                className="line"
                style={{
                  left: cursorX + "px",
                  top: cursorY + "px",
                }}
                onClick={() => setActive(!active)}
              >
                <span className={active ? "line1" : "line3"}></span>
                <span className={active ? "line2" : "line3"}></span>
                <div className="linebg"></div>
              </div>
              <div className={active ? "submenubg" : "submenubg2"}></div>
            </div>
          </div>
          <div
            className={menu ? "menubg" : "menubg2"}
            style={menu ? { top: "0%" } : { top: "-100%" }}
          >
            <div className={active ? "menu-item" : "menu-item2"}></div>
          </div>
          <div className="bg-menu">
            <div
              className={active ? "menu-div-bg" : "menu-div-bg2"}
              style={
                menu
                  ? active
                    ? { backgroundColor: "rgba(0, 0, 0, 0.2)" }
                    : { backgroundColor: "transparent" }
                  : { backgroundColor: "transparent" }
              }
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
