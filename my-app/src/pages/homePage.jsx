import Home from "../components/Home";
import { Link } from "react-router-dom"

function HomePage () {
    return (
        <div>
            <Home name="Toby" email="toby@mail.com"/>
            <Link to="/students">List Students</Link>
        </div>
    )
}

export default HomePage