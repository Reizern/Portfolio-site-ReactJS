import React from "react";
import { Header, Footer } from "../components";
import {HomeBanner, HomeMenu, HomeWelcome} from "../components/Home";


function Home() {
  return (
    <>
      <Header/>
      <div className="content">
        <div className="banner-bottom">
          <div className="container">
            <HomeBanner/>
            <HomeWelcome/>
          </div>
        </div>
        <HomeMenu/>
      </div>
      <Footer/>
     </>

  )
}

export default Home
