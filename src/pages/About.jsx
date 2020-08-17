import React from "react";
import {Footer, HeaderTwo} from "../components";
import {AboutInfo, AboutOffers, AboutTeam} from "../components/About";


function About() {
  return (
    <>
      <HeaderTwo/>
      <div >
        <div className="about-top">
          <AboutInfo/>
        </div>
        <AboutTeam/>
        <AboutOffers/>
      </div>
      <Footer/>
     </>
  )
}

export default About
