import React from 'react';

function About() {
  return (
    <section id="about" className="section section__container">
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus
        rem sequi? Nihil, est impedit dignissimos consequatur totam, odit
        deserunt doloremque laudantium similique corrupti, iusto optio rerum in
        deleniti officia.
      </p>
      <div className="about__majors">
        <div className="major">
          <div className="major__icon">
            <i className="fab fa-html5"></i>
          </div>
          <h2 className="major__title">Front-end</h2>
          <div className="major__description">
            HTML, CSS, JavaScript,
            <br />React, TypeScript
          </div>
        </div>
        <div className="major">
          <div className="major__icon">
            <i className="fas fa-server"></i>
          </div>
          <h2 className="major__title">Back-end</h2>
          <p className="major__description">
            Python, Flask,
            <br />NodeJS
          </p>
        </div>
        <div className="major">
          <div className="major__icon">
            <i className="fas fa-database"></i>
          </div>
          <h2 className="major__title">Database</h2>
          <p className="major__description">
            MySQL, MongoDB, SQLite
            <br />SQLAlchemy
          </p>
        </div>
      </div>
      <div className="about__jobs">
        <div className="job">
          <img
            src="./images/elice_autobicycle.png"
            alt="elice"
            className="job__logo"
          />
         <div className="job__description">
          <p className="job__name">
            Currently studying at Elice AI Track as racer
          </p>
          <p className="job__period">2020 Dec - Until now</p>
         </div>
        </div>
      </div>
    </section>
  );
}

export default About;