import React from "react";


function AboutInfo() {
  return (
    <div className="container">
      <div className="about-info">
        <h3 className="title">About Us</h3>
      </div>
      <div className="flex">
        <div className="about-img">
          <img src={require('../../assets/img/2.png')} className="example-image" alt="" />
        </div>
        <div className="about-top-info">
          <h4>Quisque eget nunc a ligula lobortis facilisis sed ornare commodo nunc elementum ultricies fusce eget
            lorem fringilla </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio consequat, tristique elit sed,
            molestie nulla.
            Mauris et quam leo. Quisque tincidunt facilisis rutrum. Etiam mattis arcu vitae velit sagittis vehicula.
            Duis posuere
            ex in mollis iaculis. Suspendisse tincidunt ut velit id euismod.vulputate turpis porta ex sodales,
            dignissim hendrerit
            eros sagittis. Curabitur lacinia dui ut luctus congue. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras quis
            eleifend augue. Integer sit amet euismod odio, at pretium lectus lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo
