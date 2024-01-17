const express = require('express');
const ProductManager = require('./ProductManager')
const app = express();
const PORT = 8080;

app.listen(PORT, () => console.log(`SERVIDOR FUNCIONANDO EN PUERTO ${PORT}`));

// ENDPOINT RETORNA TODOS LOS PRODUCTOS O UNA LISTA LIMITADA DE ESTOS
app.get('/products', async(req,res) => {
    const prodManager = new ProductManager();
    
    let result = await prodManager.getProducts();
    // if(!isNaN(limit) && limit > 0){
    //     result = await prodManager.getProducts().slice(0,limit)
    // }else{
    //     result = await prodManager.getProducts()
    // }
    res.send(JSON.stringify(result))
})



