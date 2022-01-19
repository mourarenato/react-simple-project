import React from "react";
//import { Link } from "react-router-dom";
import "../styles/style.css";

function WelcomePage() {
    return (
        <div className="welcome-body">
            <nav className="navbar sticky-top navbar-dark py-0 ">
            </nav>
            <div className="container">
                <div id="row_1" className="row">
                    <div id="col_1" className="col-12 text-white col-lg-6 mb-5">
                        <h1 className="welcome-title">Welcome</h1>
                        <p className="lead">
                            The best children's series you can find here!
                                <br />
                            <span class="mx-0" style={{ fontWeight: "400" }}>
                                Enjoy our system and tell us about your experience later!
                                </span>
                            <br />
                            <span class="mx-0" style={{ fontWeight: "400" }}>
                                First, you need sign in or sign up
                                </span>
                        </p>
                        <button id="bh" className="btn btn-outline-light px-0 mt-3">
                            <strong>Log In</strong>
                        </button>
                        <button id="bh" className="btn btn-outline-light px-0 mt-3">
                            <strong>Sign Up</strong>
                        </button>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="card w-card c1"></div>
                        <div className="card w-card c2"></div>
                        <div className="card w-card c3"></div>
                        <div className="card w-card c4"></div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default WelcomePage;
