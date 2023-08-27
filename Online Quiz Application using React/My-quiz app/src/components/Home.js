import React,{Fragment} from 'react';
import {Helmet} from 'react-helmet';
import { Link } from "react-router-dom";
// import ClassComponent from './quiz.Test'



const Home =()=>(
<Fragment>
    <Helmet><title>Quiz App</title></Helmet>
    <div id="home">
        <section>
            <h1>Quiz App</h1>
            

            <div className="play-button-container">
                
                    <Link className="play-button" to="/play/instructions/">Play</Link>
              
            </div>
            <div className="auth-container">
                <Link to="/login" className="auth-buttons" id="login-buttons">
                    Login
                </Link>
                <Link to="/register" className="auth-buttons" id="signup-buttons">
                    Sign up
                </Link>
            </div>
        </section>
    </div>
    </Fragment> 
)
export default Home;