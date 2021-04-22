import React from 'react';

function About() {
  return (
    <section id="about" className="section">
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus
        rem sequi? Nihil, est impedit dignissimos consequatur totam, odit
        deserunt doloremque laudantium similique corrupti, iusto optio rerum in
        deleniti officia.
      </p>
      <div class="about__majors">
        <div class="major">
          <div class="major__icon">
            <i class="fab fa-html5"></i>
          </div>
          <h2 class="major__title">Front-end</h2>
          <div class="major__description">
            HTML, CSS, JavaScript, TypeScript,
            <br />React, Vue, Web APIs
          </div>
        </div>
        <div class="major">
          <div class="major__icon">
            <i class="fas fa-mobile"></i>
          </div>
          <h2 class="major__title">Mobile</h2>
          <p class="major__description">
            Android, iOS, React Native, Flutter,
            <br />Java, Swift, Kotlin
          </p>
        </div>
        <div class="major">
          <div class="major__icon">
            <i class="fas fa-server"></i>
          </div>
          <h2 class="major__title">Back-end</h2>
          <p class="major__description">
            Java, JavaScript, Go, NodeJS,
            <br />Rest APIs, GraphGL
          </p>
        </div>
      </div>
      <div class="about__jobs">
        <div class="job">
          <img
            src="imgs/jobs/logo-samsung.png"
            alt="samsung"
            class="job__logo"
          />
         <div class="job__description">
          <p class="job__name">
            Currently working at Samsung as Software Engineer
          </p>
          <p class="job__period">2019 Sept - Until now</p>
         </div>
        </div>
        <div class="job">
          <img
            src="imgs/jobs/logo-samsung.png"
            alt="samsung"
            class="job__logo"
          />
          <div class="job__description">
            <p class="job__name">
              Currently working at Samsung as Software Engineer
            </p>
            <p class="job__period">2019 Sept - Until now</p>
           </div>
          </div>
      </div>
    </section>
  );
}

export default About;