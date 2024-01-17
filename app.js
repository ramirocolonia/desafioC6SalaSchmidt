const express = require('express');
const ProductManager = require('./ProductManager')
const app = express();
const PORT = 8080;

app.listen(PORT, () => console.log(`SERVIDOR FUNCIONANDO EN PUERTO ${PORT}`));

// ENDPOINT RETORNA TODOS LOS PRODUCTOS O UNA LISTA LIMITADA DE ESTOS
app.get('/products', (req,res) => {
    const prodManager = new ProductManager();
    let limit = req.query.limit
    let result = []
    if(!isNaN(limit) && limit > 0){
        result = prodManager.getProducts().slice(0,limit)
    }else{
        result = prodManager.getProducts()
    }
    res.send(result)
})



