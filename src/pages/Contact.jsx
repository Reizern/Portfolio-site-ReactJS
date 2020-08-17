import React from "react";
import {ContactInfo, ContactMail, ContactMap} from "../components/Contact";
import {Footer, HeaderTwo} from "../components";


function Contact() {
  return (
    <>
      <HeaderTwo/>
      <div className="contact-top">
        <div className="container">
         <ContactInfo/>
          <ContactMap/>
          <ContactMail/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
