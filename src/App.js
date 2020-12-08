import React from 'react';
import About from './Components/about/About';
import Row from './Components/Row/Row';
import Contact from './Components/contact/ContactUs';
import request from './request';

import './App.css';

const App = () => {
  return(
    <div className="app">
      {/* About section */}
      <About />

      {/* Row section */}
      <Row
        isLargeRow
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />

      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />

      {/* Contact section */}
      <Contact />
    </div>
  );
};


export default App;
