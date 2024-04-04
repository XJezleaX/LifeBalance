import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/TopBar.css";

function TopBar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleTopBar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="topbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hiddenLinks">
          <Link to="/homeFlavors"> Home Flavors </Link>
          <Link to= "/furssanFC"> Furssan FC</Link>
          <Link to="/schedule"> Schedule </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/homeFlavors"> Home Flavors</Link>
        <Link to="/furssanFC"> Furssan FC </Link>
        <Link to="/schedule"> Schedule </Link>
        <button onClick={toggleTopBar}>
        </button>
      </div>
    </div>
  );
}

export default TopBar;