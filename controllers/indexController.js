const db = require('../database/models');
//TODO CAMBIAR TODO
let indexController = {
    index: async(req, res, next) => {
        let productosQuery = await db.Product.findAll()
            // res.render( 'index' ,{ user : req.session.user , shops: shops });
        res.json(productosQuery);
    },
}
module.exports = indexController;