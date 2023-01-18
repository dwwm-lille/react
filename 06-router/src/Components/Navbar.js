import { Link } from 'react-router-dom';

function Navbar({ title }) {
    return (
        <div className="navbar">
            <h2>{title}</h2>

            <ul className="menu">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/a-propos">A propos</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
