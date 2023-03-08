import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {

  const pageSize = 15;
  const country = "us";
  const apikey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(10)
  const [searchInput, setSearchInput] = useState('')

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#041525';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div>
      <Router>

        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News mode={mode} setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country={country} category="general" />} />
          <Route exact path="/business" element={<News mode={mode} setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country={country} category="business" />} />
          <Route exact path="/entertainment" element={<News mode={mode} setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />} />
          <Route exact path="/general" element={<News mode={mode} setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country={country} category="general" />} />
          <Route exact path="/health" element={<News mode={mode} setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country={country} category="health" />} />
          <Route exact path="/science" element={<News mode={mode} setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country={country} category="science" />} />
          <Route exact path="/sports" element={<News mode={mode} setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country={country} category="sports" />} />
          <Route exact path="/technology" element={<News mode={mode} setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country={country} category="technology" />} />
          {/* <Route exact path="/query" element={<News mode={mode} setProgress={setProgress} apikey={apikey} key="query" pageSize={pageSize} country={country} query={searchInput}/>} />/ */}
          {/* <Route exact path="/query" element={<News mode={mode} setProgress={setProgress} apikey={apikey} key="query" pageSize={pageSize} country={country} query={searchInput}/>} /> */}
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )

}
export default App
