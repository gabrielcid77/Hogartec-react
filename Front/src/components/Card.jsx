import React from 'react'
import Coleccion from './coleccion'


const Card = () => {


    return (

                  
        <div className=' container-fluid'>
                 <div className=" row row-cols- row-cols-md-2 g-5 ">
                    <div className="col">
                            <div className="card ">
                                <img src="../img/pequeñoselectros-612x612.jpg" className="card-img-top" alt="Pequeños Electros"></img>
                                <div className="card-body">
                                        <h5 className="card-title">Pequeños Electros</h5>
                                        <a className="btn btn-primary"  href="../coleccion" role="button">Ver</a>
                                
                                </div>
                            </div>
                     </div>

                    <div className="col">
                            <div className="card ">
                                <img src="../img/heladeraylavarropas-612x612.jpg" className="card-img-top" alt="Electro Hogar"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Electro Hogar</h5>
                                    <a className="btn btn-primary" href="../coleccion" role="button">Ver</a>
                        
                                </div>
                            </div>
                        </div>

                <div className="col">
                        <div className="card ">
                            <img src="../img/tvysonido-612x612.jpg" className="card-img-top" alt="Tv y Sonido"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Television y Sonido</h5>
                                    <a className="btn btn-primary" href="../coleccion" role="button">Ver</a>
                                    
                                </div>
                        </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src="../img/casayjardin-612x612.jpg" className="card-img-top" alt="Casa y Jardin"></img>
                            <div className="card-body">
                                <h5 className="card-title">Casa y Aire Libre</h5>
                                <a className="btn btn-primary" href="../coleccion" role="button">Ver</a>
                                
                            </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card ">
                            <img src="../img/celuycompu.jpg" className="card-img-top" alt="Celu y Compu"></img>
                            <div className="card-body">
                                <h5 className="card-title">Celulares y PCs</h5>
                                <a className="btn btn-primary" href="../coleccion" role="button">Ver</a>
                            
                            </div>
                    </div>
                </div>



                <div className="col">
                    <div className="card ">
                            <img src="../img/municipal-1.png" className="card-img-top" alt="Muni"></img>
                            <div className="card-body">
                                <h5 className="card-title">Convenio Municipales</h5>
                                <a className="btn btn-primary" href="../coleccion" role="button">Ver</a>
                            
                            </div>
                    </div>
                </div>







            </div>

            







           

       
    </div>     

         

         

        
    )
}


export default Card