function Contact () {
    return (
        <section id="contact" className="section-padding">
      <div className="container" style={{display: "flex"}}>
        <h3>GET-IN-TOUCH</h3>

        <div className="contact-tag">
          <div><a href="https://www.linkedin.com/in/thoby-athaya-za-a56b30186/">LinkedIn</a></div>
          <div><a href="#">Email</a></div>
          <div><a href="#">Instagram</a></div>
        </div>

        <div className="contact-form-section">
          
        </div>
      </div>

      {/* <!-- contact card --> */}
      <div id="" className="container">
        <div className="contact-card">
          <div className="contact-card-left">
            <h4>Let's get talking!</h4>
          </div>
          <div className="contact-card-right">
            <h4>Message</h4>
            <form action="#">
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="yourname@mail.com" />
              </div>
              <div className="form-group">
                <textarea name="" rows="5" className="form-input" placeholder="Hello there..."></textarea>
            </div>
            <div className="form-group-btn">
              <a href="#">Submit</a>
            </div>
            </form>
          </div>
        </div>
      </div>

    </section>
    )
}

export default Contact