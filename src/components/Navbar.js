/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Playeras</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">pantalones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">sudaderas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">chamarras</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar