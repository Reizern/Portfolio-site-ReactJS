import React from "react";


function AboutTeam() {
  return (
    <div className="about-team">
      <div className="container">
        <h3 className="title">Our Team</h3>
        <div className="team">
          <div className="team-info">
            <img src={require('../../assets/img/img3.jpg')} className="img-responsive zoom-img" alt="" />
            <h6>convallis id mauris</h6>
            <p>Curabitur orci massa convallis id mauris sed venenatis porttitor at leo nec purus</p>
          </div>
          <div className="team-info">
            <img src={require('../../assets/img/img4.jpg')} className="img-responsive zoom-img" alt="" />
            <h6>massa convallis</h6>
            <p> Curabitur orci massa convallis id mauris sed venenatis porttitor at leo nec purus</p>
          </div>
          <div className="team-info">
            <img src={require('../../assets/img/img5.jpg')} className="img-responsive zoom-img" alt="" />
            <h6>leonec purus</h6>
            <p> Curabitur orci massa convallis id mauris sed venenatis porttitor at leo nec purus</p>
          </div>
          <div className="team-info">
            <img src={require('../../assets/img/img6.jpg')} className="img-responsive zoom-img" alt="" />
            <h6>venenatis portt</h6>
            <p> Curabitur orci massa convallis id mauris sed venenatis porttitor at leo nec purus</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam
