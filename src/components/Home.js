import React from 'react';

function Home() {
  return (
    <section id="home">
        <img
          src="./images/harry.jpg"
          alt="KSY's profile photo"
          className="home__avatar" />
        <h1 className="home__title">Hello, <br />I'm Front-end engineer Sooyoung!</h1>
        <h2 className="home__description">Now I'm studying in Elice AI Track</h2>
        <button className="home__contact">Contact Me</button>
    </section>
  );
}

export default Home;