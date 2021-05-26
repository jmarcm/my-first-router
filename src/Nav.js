import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: "#fff",
        textDecoration: "none"
    };

    return (
        <nav>
            <h3><Link style={navStyle} to="/">Logo</Link></h3>
            <ul className="nav-links">
                <li>
                    <Link style={navStyle} to="/shop">Shop</Link>
                </li>
                <li>
                    <Link style={navStyle} to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )

}

export default Nav;