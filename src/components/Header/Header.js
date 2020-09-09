import React from 'react'
import logo from '../../assets/logo.svg'
import Slider from '../Carousel/Carousel'

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container justify-content-start flex-nowrap">
                    <a href="#" className="navbar-brand">
                        <img className="img-fluid w-75" src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarMenu"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon"></span>
                    </button>
                    <form className="form-inline ml-auto collapse navbar-collapse flex-grow-0 mr-2">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                            </button>
                    </form>
                    <div className="collapse navbar-collapse justify-content-end flex-grow-0" id="navbarMenu">
                        <ul className="navbar-nav navbar-right">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Best</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <div className="container mt-2">
                <form className="form-inline flex-nowrap d-md-none">
                    <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                            </button>
                </form>
                <Slider />
            </div>
        </header >
    )
}

export default Header;