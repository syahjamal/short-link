import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/qr_code-256.png"
                            width="30"
                            height="30"
                            alt=""
                            loading="lazy"
                            style={{background: "white"}}
                        />
                    </Link>
                    <button 
                        class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">
                                    Home 
                                    {/* <span className="sr-only">(current)</span> */}
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/history">History</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
