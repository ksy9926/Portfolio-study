import React from 'react';

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__container">
        <h1>Skills</h1>
        <h2>Skills & Attributes</h2>
        <p>
          Experience with all phases of the software life-cycle. Passion for
          learning new technologies. Capable of working within a team environment
          and independently. Ability to plan and time schedule, work under strict
          time pressure and adapt quickly when needed.
        </p>
        <div className="skillset">
          <div className="skillset__left">
            <h3 className="skillset__title">Skills</h3>
            <div className="skill">
              <div className="skill__description">
                <span>HTML</span>
                <span>70%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{width: "70%"}}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>CSS</span>
                <span>50%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{width: "50%"}}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>JavaScript</span>
                <span>60%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{width: "60%"}}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>TypeScript</span>
                <span>30%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{width: "30%"}}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>React</span>
                <span>60%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{width: "60%"}}></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>NodeJS</span>
                <span>50%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{width: "50%"}}></div>
              </div>
            </div>
          </div>
          <div className="skillset__right">
            <div className="tools">
              <h3 className="skillset__title">Tools</h3>
              <ul className="tools__list">
                <li><span>Visual Studio Code</span></li>
                <li><span>Jupyter Notebook</span></li>
                <li><span>Figma</span></li>
              </ul>
            </div>
            <div className="etc">
              <h3 className="skillset__title">Etc</h3>
              <ul className="etc__list">
                <li><span>Git</span></li>
                <li><span>Linux</span></li>
                <li><span>Azure</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;