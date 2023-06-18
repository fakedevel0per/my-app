import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const { setCountry } = props;
  let countryCode = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
  let countryName = ['United Arab Emirates', 'Argentina', 'Austria', 'Australia', 'Belgium', 'Bulgaria', 'Brazil', 'Canada', 'Switzerland', 'China', 'Colombia', 'Cuba', 'Czechia', 'Germany', 'Egypt', 'France', 'United Kingdom', 'Greece', 'Hong Kong', 'Hungary', 'Indonesia', 'Ireland', 'Israel', 'India', 'Italy', 'Japan', 'South Korea', 'Lithuania', 'Latvia', 'Morocco', 'Mexico', 'Malaysia', 'Nigeria', 'Netherlands', 'Norway', 'New Zealand', 'Philippines', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Russia', 'Saudi Arabia', 'Swedan', 'Singapore', 'Slovenia', 'Slovakia', 'Thailand', 'Turkiye', 'Taiwan', 'Ukraine', 'United States', 'Venezuela', 'South Africa'];

  const [activeNav, setActiveNav] = useState("home")
  const [searchInput, setSearchInput] = useState('')
  let selectedCountryIndex = countryCode.indexOf(props.country);
  function changeCountry(index) {
    setCountry(countryCode[index]);
  }

  const countryList = countryName.map((element, index) => {
    return <li key={index}><Link to="/" className="dropdown-item" onClick={() => changeCountry(index)}>{element}</Link></li>;
  });
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchInput);
    props.setSearch(searchInput);
    navigate("/" + searchInput);
  }
  const onChange = (e) => {
    setSearchInput(e.target.value);
  }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode === 'dark' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsBuddie</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === "home" ? 'active' : ''}`} aria-current="page" to="/" onClick={() => setActiveNav("home")}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === "business" ? 'active' : ''}`} to="/business" onClick={() => setActiveNav("business")}>Business</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === "entertainment" ? 'active' : ''}`} to="/entertainment" onClick={() => setActiveNav("entertainment")}>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === "general" ? 'active' : ''}`} to="/general" onClick={() => setActiveNav("general")}>General</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === "health" ? 'active' : ''}`} to="/health" onClick={() => setActiveNav("health")}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === "science" ? 'active' : ''}`} to="/science" onClick={() => setActiveNav("science")}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === "sports" ? 'active' : ''}`} to="/sports" onClick={() => setActiveNav("sports")}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === "technology" ? 'active' : ''}`} to="/technology" onClick={() => setActiveNav("technology")}>Technology</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeNav === "about" ? 'active' : ''}`} to="/about" onClick={() => setActiveNav("about")}>About</Link>
              </li>
            </ul>
            <div className="btn-group">
              <button className={`btn btn-${props.mode === 'light' ? 'outline-white' : 'outline-secondary'} btn-sm dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {countryName[selectedCountryIndex]}
              </button>
              <ul className={`dropdown-menu ${props.mode === 'light' ? '' : 'dropdown-menu-dark'}`} id="dropdown" style={{ "height": '300px', "width": 'auto', "overflow": 'hidden', "overflowY": 'scroll' }}>
                {countryList}
              </ul>
            </div>
            <form className="d-flex mx-3" role="search" onSubmit={handleSearch}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchInput} onChange={onChange} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default Navbar
