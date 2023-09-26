function Work () {
    return (
           <section id="work" className="section-padding section-work">
            <div className="container">
                <h3>SELECTED-WORKS</h3>

                {/* Content 1 */}
                <div className="work-content">

                    <div className="work-content-left-2">
                        <div className="work-tag">
                            <div className="label-2">Concept</div>
                            <div className="label-2">Web Development</div>
                        </div>
            
                        <div>
                            <h4>Virus Scope</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero necessitatibus praesentium distinctio alias magni a repellat dolore perspiciatis architecto rerum!</p>
                        </div>
            
                        <div className="work-button">
                        <div className="work-button-inside" style={{cursor: "pointer"}} onclick="window.location='https://virusscope.netlify.app';">
                            <a href="https://virusscope.netlify.app" className="work-button">See more</a>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                        </div>
                    </div>

                <div className="work-content-right">
                    <img src={require("../assets/virusscope-1 - Copy.png")} alt=""/>
                </div>

                </div>

                {/* Content 2  */}
                <div className="work-content work-content-n">
                    <div className="work-content-left">
                    <div className="work-tag">
                    <div className="label-2">Digital Design</div>
                    <div className="label-2">Web Development</div>
                    </div>
                    
                    <div>
                    <h4>WeatherEd</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero necessitatibus praesentium distinctio alias magni a repellat dolore perspiciatis architecto rerum!</p>
                    </div>
                    
                    <div className="work-button">
                    <div className="work-button-inside" style={{cursor: "pointer"}} onclick="window.location='https://weather-ed.netlify.app';">
                        <a href="https://weather-ed.netlify.app/" className="work-button">See more</a>
                        <i className="ri-arrow-right-line"></i>
                    </div>
                    </div>
                </div>
                
                <div className="work-content-right">
                    <img src={require("../assets/weathered_page - Copy (2).png")} alt=""/>
                </div>
                </div>

                {/* Content 3  */}
                <div className="work-content work-content-n">

                <div className="work-content-left-2">
                    <div className="work-tag">
                    <div className="label-2">Product Design</div>
                    <div className="label-2">Web Development</div>
                    </div>
        
                    <div>
                    <h4>Ateliers Z+A</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero necessitatibus praesentium distinctio alias magni a repellat dolore perspiciatis architecto rerum!</p>
                    </div>
        
                    <div className="work-button">
                    <div className="work-button-inside" style={{cursor: "pointer"}} onclick="window.location='https://ateliers-za.netlify.app';">
                        <a href="https://ateliers-za.netlify.app" className="work-button">See more</a>
                        <i className="ri-arrow-right-line"></i>
                    </div>
                    </div>
                </div>

                <div className="work-content-right">
                    <img src={require("../assets/ateliersza_page2.png")} alt=""/>
                </div>

                </div>
            </div>
        </section>
    )
}

export default Work