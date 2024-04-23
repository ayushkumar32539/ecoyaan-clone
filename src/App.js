import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
       <Navbar />
       <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        </Routes>    
      <Footer />
    </Router>
  );
}

export default App;
