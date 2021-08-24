import { Link } from "react-router-dom"

function Logo(props) {
    return (
        <div className="logo">
            <Link to="/" className="navimg"><img src="https://i.imgur.com/S10uG78.jpg" alt="" /></Link>
        </div>
    )
}

export default Logo