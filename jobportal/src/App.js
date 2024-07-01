import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import JobDetail from './components/JobDetail';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import './App.css'; // Make sure to import your CSS file

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <div className="group">
          <img src="/pictures/Black Retro Motorcycle Circle Logo (1).png" className="logo" alt="Logo" />
          <h1 className="logo-text">
            MSU CampusGigs
          </h1>
        </div>
        <nav>
          <ul>
            <a className="home" href="/">Home</a>
            <a className="About" href="/AboutUs">About Us</a>
            <a className="Job" href="#">Job</a>
            <a className="Contact" href="#">Contact</a>
          </ul>
        </nav>
        <div className="sign-in-up">
         <Link to="/sign-up" className="sign-up-button">Sign Up</Link>
          <a href="#" className="sign-up-button">Sign In</a>
        </div>
      </header>
      <div className="box">
        <center>
          <img src="/pictures/Login_Page_Website_UI_Prototype-removebg-preview.png" className="bg-pic" alt="Background Pic" />
        </center>
      </div>
      <main>
      <h1 className="Search">Search, Find, and Apply!</h1>
        <img src="/pictures/people-part-time-job-professions-set-vector-20585323.png" className="part-time" alt="Part-time Jobs" />
        <img src="/pictures/istockphoto-969538498-640x640.png" className="picture2" alt="Job Image" />
        <img src="/pictures/istockphoto-1402999989-612x612.png" className="picture" alt="Job Image" />
      </main>
      <Switch>   
          <Route path="/sign-up" component={SignUp} />       
        </Switch>
    </div>
    </Router>
  );
}

export default App;
