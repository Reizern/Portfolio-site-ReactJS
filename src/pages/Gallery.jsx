import React from "react";
import {Footer, HeaderTwo} from "../components";
import {GalleryBottom, GalleryMiddle, GalleryTop} from "../components/Gallery";


function Gallery() {
  return (
    <>
      <HeaderTwo/>
      <div className="content">
        <div className="gallery-top">
          <div className="container">
            <h3 className="title">Gallery</h3>
            <div className="gallery-image">
              <GalleryTop/>
              <GalleryMiddle/>
              <GalleryBottom/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
)
}

export default Gallery
