import React from "react";
import ContactForm from "./ContactForm";



function ContactMail() {
  return (
    <div className="mail">
      <div className="mail-left">
        <h3 className="title">Address</h3>
        <h5>Cras porttitor imperdiet volutpat nulla malesuada lectus
          eros <span>ut convallis felis consectetur ut </span></h5>
        <h4>Headquarters</h4>
        <p>123 T. Globel Place.
          <span>CG 09-123</span>
          Italy, Ba. 4567
        </p>
        <h4>Get In Touch</h4>
        <p>Telephone: +38 (067) 368 98 66
          <span>FAX: +38 (067) 368 98 66</span>
          E-mail: <a href="mailto:lipcheyyura@gmail.com">lipcheyyura@gmail.com</a>
        </p>
      </div>
      <div className="contact-form">
        <ContactForm/>
      </div>
    </div>
  )
}

export default ContactMail
