const express= require('express');
const routes=express.Router();


module.exports = function(router) {

    router.get('/api/productos', (req, res) => {
        res.json({
            familia : 'Familia del producto',
            producto: 'Producto',
            precio: 'importe',
            
        });
    });

    return router;

}