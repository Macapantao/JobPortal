import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; // Make sure to create this CSS file for your styles

function SignUp() {
  return (
    <div className="App">
      <header>
        <div className="group">
          <img src="/pictures/Black Retro Motorcycle Circle Logo (1).png" className="logo" alt="Logo" />          
          <h1 className="logo-text">MSU CampusGigs</h1>
        </div>
        <nav>
          <ul>
            <Link className="home" to="/">Home</Link>   
            <Link className="About" to="/about">About Us</Link>
            <Link className="Job" to="/jobs">Job</Link>
            <Link className="Contact" to="/contact">Contact</Link>
          </ul>
        </nav>
        <div className="sign-in-up">
          <Link to="/sign-up" className="sign-up-button">Sign Up</Link>
          <Link to="/sign-in" className="sign-in-button">Sign In</Link>
        </div>
      </header>
      <main>
        <div className="grid-container">
          <div className="column">
            <div className="Employer">
              <h2>Employer</h2>
              <img src="/pictures/Login_Page_Website_UI_Prototype__1_-removebg-preview.png" className="employerPic" alt="Employer" />
              <Link to="/employer" className="EmployerSignUp">I WANT TO HIRE</Link>
            </div>
          </div>
          <div className="column">
            <div className="Parent">
              <h2>Parent</h2>
              <img src="/pictures/Login_Page_Website_UI_Prototype__2_-removebg-preview.png" className="parentPic" alt="Parent" />
              <Link to="/parent" className="ParentSignUp">I WANT TO HIRE TUTOR</Link>
            </div>
          </div>
          <div className="column">
            <div className="Applicants">
              <h2>Applicants</h2>
              <img src="/pictures/Login_Page_Website_UI_Prototype__3_-removebg-preview.png" className="applicantPic" alt="Applicants" />
              <Link to="/applicant" className="ApplicantSignUp">I WANT A JOB</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
