import React from 'react'
import {
    Link
  } from "react-router-dom";

class Navbar extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="Atlas">Aerchain</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to="/"><a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/categories"><a class="nav-link" href="/view">Categories </a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;