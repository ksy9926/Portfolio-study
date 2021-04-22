import React from 'react';

function Project() {
  return (
    <section>
      <h1>My work</h1>
      <h3>Projects</h3>
      <div>
        <button>
          All <span>5</span>
        </button>
        <button>
          Front-end <span>5</span>
        </button>
        <button>
          Back-end <span>2</span>
        </button>
        <button>
          Full-stack <span>1</span>
        </button>
      </div>
      <div>
        <a>
          <img />
          <div>
            <h3>MASL</h3>
            <span>Find your 슬세권</span>
          </div>
        </a>
        <a>
          <img />
          <div>
            <h3>레이서도서관</h3>
            <span>Book you want to study</span>
          </div>
        </a>
        <a>
          <img />
          <div>
            <h3>토닥토닥</h3>
            <span>medical black section solving commutny</span>
          </div>
        </a>
        <a>
          <img />
          <div>
            <h3>포트폴리오</h3>
            <span>Let me introduce myself</span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Project;