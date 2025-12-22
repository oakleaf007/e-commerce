import "./header.css";

import { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";

export default function Header(){

  // useState

  const [open, setOpen] = useState(false);
  const location = useLocation();

useEffect(()=>{
  setOpen(false);
},[location.pathname]);

    return(

        
// The header
  <header className="container-fluid  justify-content-between align-items-center ">
    {/* the header container looks unnecessary but needed for header fix + later same menu into mobile version */}
    <div id="header-cont" className="container-fluid d-flex justify-content-between align-items-center p-3">
            {/*here logo div  */}
        <div id="logo-container">
          <span className="logo-name" ><Link to="/" style={{textDecoration:"none", color:"#3E4F1E"}}>Aalaya</Link></span>
        </div>

        {/* this is the navbar  menu */}
        <div  id="nav-menu" className={`nav-menu ${ open ? "open" : ""}`}>
          <ul className=" " id="ul-menu">
            <li className="nav-item">
             {/* this is for search */}
                <div className="search-wrapper">
                <input
                  className="form-control form-control-sm shadow-none"
                  id="search-input"
                  type="search"
                  placeholder="search"
                />
                <button id="search-btn">
                  <img src="/search.svg" width="20"></img>
                </button>
              </div>
            </li>

            {/* these are the navbar elements with anchor tag */}
            <li className="nav-item  nav-li"><Link to="/signin" className="nav-link p-2" >signin</Link></li>
            <li className="nav-item   nav-li"><Link to ="/signup"  className="nav-link p-2 ">signup</Link></li> <div id="seperator"></div>
            <li className="nav-item   nav-li d-flex gap-0 px-1"><span className="nav-link p-2 d-flex gap-1 span-nav" href=""><img src="/profile.svg" width="24px"></img></span></li>
            
          </ul>
        </div>
        {/* this is the hamburger button */}
      <button className={`hamburger ${open ? "active" : ""}`} aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="nav-menu" onClick={() => setOpen(!open)}  >
        <span></span>
        <span></span>
        <span></span>
      </button>
      </div>
    </header>


    )
      
}