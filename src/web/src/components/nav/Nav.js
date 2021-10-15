import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = function(props){

    return (
        <nav>
            <div className="nav-main">
                <div className="nav-title">
                    <Link to="/" className="nav-links">MangaTranslator Demo 1</Link>
                </div>
                <ul>
                    <li><Link to="/translated" className="nav-links">Translated</Link></li>
                    <li><Link to="/about" className="nav-links">About</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;