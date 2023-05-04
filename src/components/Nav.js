import { Link } from "react-router-dom"

function Nav () {
    return (
        <nav>
            <Link className="links" to='/'>Home</Link>
            <Link className="links" to='/cryptoindex'>CryptoIndex</Link>
        </nav>
    )
}

export default Nav