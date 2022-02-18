import React from "react";
import "./Default.css";
import NavBar from "../components/NavBar";

export default function StandardPage(props) {
  var style = "Content";
  // if an alternate style is passed, it will override the default page
  // however with current implementation, it is an all or nothing override
  if (props.className != null) {
    style = props.className;
  }
  return (
    <div className="Default">
      <NavBar />
      <div className={style}>
        {props.children}
      </div>
    </div>
  );
}
