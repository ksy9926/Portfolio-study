import React, { useRef } from 'react';

function Project() {
  const projectRef = useRef()

  return (
    <section ref={projectRef} id="work" className="section">
      <div className="section__container">
        <h1>My work</h1>
        <h3>Projects</h3>
        <div className="work__categories">
          <button className="category__btn selected" data-filter="*">
            All <span className="category__count">5</span>
          </button>
          <button className="category__btn" data-filter="front-end">
            Front-end <span className="category__count">5</span>
          </button>
          <button className="category__btn" data-filter="back-end">
            Back-end <span>2</span>
          </button>
          <button className="category__btn" data-filter="full-stack">
            Full-stack <span className="category__count">1</span>
          </button>
        </div>
        <div className="work__projects">
          <a href="https://github.com/ksy9926/MASL/tree/master" className="project" target="blank" data-type="front-end">
            <img
              src="./images/masl_result.png"
              alt="MASL"
              className="project__img"
            />
            <div className="project__description">
              <h3>MASL</h3>
              <span>Find your 슬세권</span>
            </div>
          </a>
          <a
            href="https://github.com/ksy9926/Webproject-Racer-Library"
            className="project"
            data-type="front-end"
            target="blank"
          >
            <img
              className="project__img"
              src="./images/library_main.png"
              alt="레이서도서관"
            />
            <div className="project__description">
              <h3>레이서도서관</h3>
              <span>Book you want to study</span>
            </div>
          </a>
          <a
            href="https://github.com/ksy9926/Todaktodak/tree/master"
            className="project"
            data-type="front-end"
            target="blank"
          >
            <img className="project__img" src="./images/todak_main.png" alt="토닥토닥" />
            <div className="project__description">
              <h3>토닥토닥</h3>
              <span>medical black section solving commutny</span>
            </div>
          </a>
          <a
            href="https://github.com/ksy9926/Portfolio-study"
            className="project"
            data-type="front-end"
            target="blank"
          >
            <img className="project__img" src="./images/portfolio_index.png" alt="포트폴리오" />
            <div className="project__description">
              <h3>포트폴리오</h3>
              <span>Let me introduce myself</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;