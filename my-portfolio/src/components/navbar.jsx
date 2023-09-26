function Navbar () {
    return (
    // Navbar 
    <div className="container">
      <header className="header">
        <a href="#intro" className="logo">THOBY/ZA.</a>
        <nav className="navbar">
          <a href="#intro">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <label for="" className="icons">
          <i className="bx bx-menu-alt-right"></i>
        </label>
      </header>
    </div>
    )
}

export default Navbar