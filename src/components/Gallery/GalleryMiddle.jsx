import React from "react";


function GalleryMiddle() {
  return (
    <div className="flex-tho">
      <div className="box-img">
        <a data-fancybox="gallery" href="http://localhost:3000/static/media/img12.671141d4.jpg"><img src={require('../../assets/img/img12.jpg')} className="example-image" alt="" /></a>
      </div>
      <div className="box-img">
        <a data-fancybox="gallery" href="http://localhost:3000/static/media/img13.b7ed0a7d.jpg"><img src={require('../../assets/img/img13.jpg')} className="example-image" alt="" /></a>
      </div>
      <div className="box-img">
        <a data-fancybox="gallery" href="http://localhost:3000/static/media/img9.8c424203.jpg"><img src={require('../../assets/img/img9.jpg')} className="example-image" alt="" /></a>
      </div>
    </div>
  )
}

export default GalleryMiddle
