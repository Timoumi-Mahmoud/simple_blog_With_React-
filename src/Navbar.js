const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Timoumi Blog</h1>
            <div className="links">
                <a href="/index.js">Home</a>
                <a href="/creat" style={{
                    fontSize: '15px',
                    borderRadius: '8px'
                }}>Create</a>
            </div>
        </nav>

     );
}
 
export default Navbar ;