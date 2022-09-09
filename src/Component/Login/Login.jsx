import React from "react";

import "./Login.css"

function Login() {
    return (
        <div className="login-container">
            <div className="row">
                <div className="col-md">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">Sign in</h5>
                            <hr />
                            <div className="row mb-1">
                                <div className="col-md">
                                    <input id="username" className="form-control" placeholder="Username" type="text" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col">
                                    <input id="password" className="form-control" placeholder="Password" type="password" />
                                </div>
                            </div>
                            <hr />
                            <div className="row float-center mb-1">
                                <div className="col button-container">
                                    <button id="btnLogin" className="btn btn-success">Login</button>
                                    <button id="btnCancel" className="btn btn-danger">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;