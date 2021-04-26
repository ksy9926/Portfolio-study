import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section">
      <h1 className="contact__title">Let's talk</h1>
      <h2 className="contact__email">ksy2799nw@gmail.com</h2>
      <div className="contact__links">
        <a href="https://github.com/ksy9926" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fa fa-linkedin-square"></i>
        </a>
      </div>
      <p className="contact__rights">
        2021 KSY - All rights reserved
      </p>
    </section>
  );
}

export default Contact;