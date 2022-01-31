
/*import React, { useState} from 'react'
import Card from './Card'


const Coleccion = ({productos}) => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        peticion();
    });

    const peticion = async () => {

        const URL = "mongodb+srv://gabrielcid77:<burbuja>@cluster0.eeiyg.mongodb.net/Hogartec-productos?retryWrites=true&w=majority";

       // const URL = 'https://api.giphy.com/v1/gifs/trending?q=Goku&limit=10&api_key=XfTrLeRLQnMp091kQoOLQXHzHrMs0Cb2'

        const respuesta = await fetch(URL);
        const { data } = await respuesta.json();

        
        const producto = data.map(productos => {
            return {
                familia: 'Familia del producto',
                producto: 'Producto',
                precio: 'importe',
            }
        });        
        console.log(productos);
        setDatos(productos);
    }

    //peticion();

    return (
        <div>
            <h1>Productos</h1>
           
            {
                 datos.map(({familia, producto, precio}) => {
                    return <Card familia={familia} producto={producto} precio={precio} />
                })
            }
    
        </div>
    )
}

export default Coleccion*/
