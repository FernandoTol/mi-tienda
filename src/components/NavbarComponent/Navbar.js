import  "bootstrap/dist/css/bootstrap.min.css";

import { CartWidget } from './CartComponent/cartwidget'


export const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Babidas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Desayunos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Comidas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Cenas</a>
                            </li>
                            <li><CartWidget/></li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar