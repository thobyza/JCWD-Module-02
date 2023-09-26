import { Link } from "react-router-dom"

const styleLink = {
    display: "block",
    color: "lightbrown"
}

function StudentsPage () {
    return (
        <div>
            <h1>List Student</h1>
            <Link style={styleLink}>Tom</Link>
            <Link style={styleLink}>Brett</Link>
            <Link style={styleLink}>David</Link>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default StudentsPage