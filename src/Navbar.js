import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Timoumi Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    fontSize: '15px',
                    borderRadius: '8px'
                }}>Create</Link>
            </div>
        </nav>

     );
}
 
export default Navbar ;