import React from "react";


function HomeWelcome() {
  return (
    <div className="welcome">
      <h3 className="title">Welcome</h3>
      <p>Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod </p>
      <div className="welcome-info">
        <div className="welcome-img">
          <img src={require('../../assets/img/img1.jpg')} className="img-responsive zoom-img" alt="" />
        </div>
        <div className="welcome-img">
          <img src={require('../../assets/img/img2.jpg')} className="img-responsive zoom-img" alt=""/>
        </div>
      </div>
      <p>Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae </p>
    </div>
  )
}

export default HomeWelcome
