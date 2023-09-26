// 

// CSS
import "../index.css"

// Components import
import Navbar from "../components/navbar";
import Intro from "../components/intro"
import About from "../components/about";
import Work from "../components/work";
import Contact from "../components/contact";

function HomePage () {
    return (
        <div>
            <Navbar></Navbar>
            <Intro></Intro>
            <About></About>
            <Work></Work>
            <Contact></Contact>
        </div>
    )
}

export default HomePage