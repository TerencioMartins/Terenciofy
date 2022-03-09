import React from "react";
import "./player.css"
import Sidebar from "../sidebar/sidebar";
import Body from "../body/body";
import Footer from "../footer/footer";

function Player({spotify}) {
  return (
    <div className="player">
        <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
        </div>
        <Footer />
    </div>
  );
}

export default Player;
