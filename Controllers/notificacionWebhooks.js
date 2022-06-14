const PagoProducto = async (req,res)=>{
    console.log(req.body);
    res.status(200).send('SUCCESS!');
}

module.exports = {PagoProducto}