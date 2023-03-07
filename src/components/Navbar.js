import React from 'react'
import { Link } from "react-router-dom";

const Navbar = (props) => {
  
  let countryCode = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
  const countryList = countryCode.map((element) => {
    return '<li><a className="dropdown-item" href="#">'+element+'</a></li>';
  }

  )
  return (
    <div>
      {/* <nav className={`navbar navbar-expand-lg bg-body-tertiary fixed-top navbar-${props.mode==='dark'?'dark':'light'} bg-${props.mode==='dark'?'dark':'light'}`}>/ */}
      <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode==='dark'?'dark':'light'} bg-${props.mode==='dark'?'dark':'light'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsBuddie</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <div className="btn-group">
              <button className={`btn btn-${props.mode==='light'?'outline-white':'outline-secondary'} btn-sm dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Global
              </button>
              <ul className={`dropdown-menu ${props.mode==='light'?'':'dropdown-menu-dark'}`}>
                {countryList}

              {/* <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li> */}
              </ul>
            </div>
            <form className="d-flex mx-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            {/* <div className="form-check form-switch text-dark">/ */}
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default Navbar
