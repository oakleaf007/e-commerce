import "./header.css";

import { useState } from "react";


export default function Header(){

  // useState

  const [open, setOpen] = useState(false);
    return(

        
// The header
  <header className="container-fluid  justify-content-between align-items-center ">
    {/* the header container looks unnecessary but needed for header fix + later same menu into mobile version */}
    <div id="header-cont" className="container-fluid d-flex justify-content-between align-items-center p-3">
            {/*here logo div  */}
        <div>
          <span className="logo-name" >Ethnora</span>
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
            <li className="nav-item  nav-li"><a className="nav-link p-2" href="">signin</a></li>
            <li className="nav-item   nav-li"><a className="nav-link p-2" href="">signup</a></li> <div id="seperator"></div>
            <li className="nav-item   nav-li d-flex gap-0 px-1"><a className="nav-link p-2 d-flex gap-1" href=""><img src="/profile.svg" width="21px"></img><span>profile</span></a></li>
            
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