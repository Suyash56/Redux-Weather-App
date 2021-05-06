import React, { useState } from "react";
import "../css/about.css";

export default function About() {
  const [sideNav, setSideNave] = useState("closeSideNav");

  return (
    <>
      <div className={sideNav}>
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => setSideNave("closeSideNav")}
        >
          &times;
        </a>
        <h1>About Us Information</h1>
        <p>
          Loreum ipsum dolor set imet et delectus accomodation his consule vx at
          pute
        </p>
      </div>
      <div className="about" onClick={() => setSideNave("openSideNav")}>
        <h2>About Us</h2>
      </div>
    </>
  );
}
