import React from "react";
function Navbar() {
    return (
      
        <nav className="navbar navbar-expand-lg bg-dark" >
        <div className="container-fluid">
          <a className="navbar-brand text-light">Student Directories</a>


          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary text-light" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
  
  export default Navbar;