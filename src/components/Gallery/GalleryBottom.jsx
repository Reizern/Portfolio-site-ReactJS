import React from "react";


function GalleryBottom() {
  return (
    <div className="flex-tho" >
      <div className="box-img">
        <a data-fancybox="gallery" href="http://localhost:3000/static/media/img15.6000897a.jpg"><img src={require('../../assets/img/img15.jpg')} className="example-image" alt="" /></a>
      </div>
      <div className="box-img">
        <a data-fancybox="gallery" href="http://localhost:3000/static/media/img10.383dfb4c.jpg"><img src={require('../../assets/img/img10.jpg')} className="example-image" alt="" /></a>
      </div>
      <div className="box-img">
        <a data-fancybox="gallery" href="http://localhost:3000/static/media/img11.d7a50806.jpg"> <img src={require('../../assets/img/img11.jpg')} className="example-image" alt="" /></a>
      </div>
      <div className="box-img">
        <a data-fancybox="gallery" href="http://localhost:3000/static/media/img12.671141d4.jpg"><img src={require('../../assets/img/img12.jpg')} className="example-image" alt="" /></a>
      </div>
    </div>
  )
}

export default GalleryBottom
