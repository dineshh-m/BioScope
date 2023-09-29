import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    return (
        <>
            <nav className="nav">
                <div className="nav-brand">
                    <div className="nav-brand-title">
                        <Link to="/" className="plain-link">
                            <h1 className="nav-heading"><span className="highlight">Bio</span>Scope</h1>
                        </Link>
                    </div>
                </div>

                <div className="nav-links">
                    <ul className="nav-links-lists">
                        <li className="nav-link-list"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-link-list"><a href="" className="nav-link">Movies</a></li>
                        <li className="nav-link-list"><a href="" className="nav-link">TV Series</a></li>
                        <li className="nav-link-list"><Link to="/search" className="nav-link">Search</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;