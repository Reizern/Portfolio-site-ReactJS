import React from "react";


function GalleryTop() {
  return (
    <div className="gallery-image-top">
      <div className="gallery-img-left">
        <a data-fancybox="gallery" href="http://localhost:3000/static/media/img7.cf33c9a5.jpg"><img src={require('../../assets/img/img7.jpg')} className="example-image" alt="" /></a>
      </div>
      <div className="gallery-img-right">
        <div className="flex-tho" >
          <div className="box-img">
            <a data-fancybox="gallery" href="http://localhost:3000/static/media/img8.cfb77f54.jpg"><img src={require('../../assets/img/img8.jpg')} className="example-image" alt="" /></a>
          </div>
          <div className="box-img">
            <a data-fancybox="gallery" href="http://localhost:3000/static/media/img9.8c424203.jpg"><img src={require('../../assets/img/img9.jpg')} className="example-image" alt="" /></a>
          </div>
        </div>
        <div className="flex-tho">
          <div className="box-img">
            <a data-fancybox="gallery" href="http://localhost:3000/static/media/img10.383dfb4c.jpg"><img src={require('../../assets/img/img10.jpg')} className="example-image" alt="" /></a>
          </div>
          <div className="box-img">
            <a data-fancybox="gallery" href="http://localhost:3000/static/media/img11.d7a50806.jpg"><img src={require('../../assets/img/img11.jpg')} className="example-image" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryTop
