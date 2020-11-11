import React from "react"
import {Link} from "react-router-dom"
import Particles from "react-particles-js"
import "./signup.css"

const Signup = () => {
    return (<div className="signupBackground">
        <Particles className="particleBackground" />
        <div className="container">
            <div className="row">
                <div className="col s12 m12">
                    <div className="col s12 offset-m3 m6">
                        <div class="card signupBox">
                            <div class="card-content white-text center-align">
                                
                                <h1 className="signupHeading">Sign Up</h1>
                                <div class="input-field">
                                    <input id="name" type="text" class="validate white-text" />
                                    <label for="name">Name</label>
                                </div>
                                <div class="input-field">
                                    <input id="email" type="email" class="validate white-text" />
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-field">
                                    <input id="password" type="password" class="validate white-text" />
                                    <label for="password">Password</label>
                                </div>
                                <div class="input-field">
                                    <input id="rollNo" type="text" class="validate white-text" />
                                    <label for="rollNo">Roll No.</label>
                                </div>
                                <button class="btn waves-effect waves-light" type="submit" name="action">Sign Up
                                    <i class="material-icons right">
                                        send
                                    </i>
                                </button>
                            </div>
                            <div class="card-action center-align">
                                
                                <Link to="/login" className="white-text">Already have an account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Signup;