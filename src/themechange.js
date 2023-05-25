// import { MDBSwitch } from "mdb-react-ui-kit";
import React from "react";
import { ChatState } from "./context/dataProvider";
import "./themechange.css";

const Themechange = () => {
  const { theme, setTheme } = ChatState();
  const ColorChanger = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <div id="gfg" className={theme}>
      <button onClick={ColorChanger}>{theme}</button>
      {/* <button onClick={ColorChanger}>Dark</button> */}
    </div>
  );
};

export default Themechange;
