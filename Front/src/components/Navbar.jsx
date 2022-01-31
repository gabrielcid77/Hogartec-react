
import React from "react";

const Navbar = () => {
    return (
        <div className="text-center text-lg-start bg-light text-muted ">

          <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex  ">
            <div className="container-fluid d-flex">
                <a className="navbar-brand" href="../AtencionAlCliente" >HOGARTEC</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                  <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse nav justify-content-end "  id="navbarSupportedContent">
                  <ul className="navbar-nav  me-auto mb-2 mb-lg-0  ">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="../Nosotros">Nosotros</a>
                    </li>
          
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="../AtencionAlCliente">Atencion al Cliente</a>
                    </li>
          
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="../Sucursal">Sucursal</a>
                    </li>
                                                 
       
                   </ul>
        
              </div>
            </div>
          </nav>

        </div>
    )
}

export default Navbar
