import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => {
    return (
        <nav className="navbar">
            <div>
                <h1 className="">Git Profile</h1>
            </div>
            <div className="nav-itens">
                <Link className="nav-link" to="/">Home</Link>

                <Link className="nav-link" to="/sobre">Sobre</Link>

                <Link className="nav-link" to="/contato">Contato</Link>
            </div>
        </nav>
    );
};
export default Header;
