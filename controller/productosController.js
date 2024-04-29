const fs = require( 'fs' );
const path = require('path');

const productosFilePath = path.join(__dirname, '../data/productos.json' ) ;
const productos = JSON.parse( fs.readFileSync(productosFilePath , 'utf8')); 

const productosController = {
    list: (req, res) => {
        res.render('productos', {productos})
    },

    create: (req,res)=>{ 
        res.render('/products/admin');
    },

    stock: (req, res) =>{
        console.log(req.file)
        const {descripcion, descuento, precio, detalle} = req.body;
        const nuevoProduct = {
            id: productos.length + 1,
            descripcion, 
            descuento, 
            precio,
            detalle 
        };

     
    try {
            productos.push(nuevoProduct);
            fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "));
            res.redirect("/productos")
        }
        catch(err){
            console.log("Error al guardar el producto");
            console.error(err);
            res.status(500).send("Error al guardar el producto");
        }
    
    
    },
}

module.exports = productosController;