function App() {
  return (
    <div className="page">

      <header className="header">
        <div className="logo">ANNA X DOLL</div>

        <nav className="nav">
          <a href="#gallery">GALLERY</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero">
        <h1 className="heroTitle">
          Anna X Doll<sup>테스트</sup>
        </h1>

        <div className="heroImageBox">
          <img
            className="heroImage"
            src="/images/hero.jpg"
            alt="Anna X Doll"
          />
        </div>
      </section>


    </div>
  );
}

export default App;