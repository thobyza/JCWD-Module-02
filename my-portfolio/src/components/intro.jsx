import logoArrowDown from "../assets/arrow_down_right_thin_icon_172053.svg"

function Intro() {
    return (
        <section id="intro" className="section-padding section-intro">
        <div className="container intro-container">
          <div className="content-left">
            <h3>
              Hello, I'm Thoby - a creative designer with a focus on web and
              mobile development
            </h3>
            <div className="intro-arrow">
              <a href="#about">
                <img
                  src={logoArrowDown}
                  alt=""
                  className="arrow-svg"
                />
              </a>
            </div>
          </div>
          <div className="content-right">
            <img src={require("../assets/f1edited2-2.jpg")} alt="" className="hero-img" />
            <div className="hero-shape"></div>
          </div>
        </div>
      </section>
    )
}

export default Intro