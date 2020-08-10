const db = require('../database/models');
//TODO CAMBIAR TODO
let productsController = {
    productsCant: async(req, res, next) => {
                let productosQuery = await db.Product.findAll({
                    where: {
                        shop_idshop: req.params.id
                    },
                    include: [{
                        association: "shopProduct",
                    }]
                })
        res.json(productosQuery.length);
    },
}
module.exports = productsController;