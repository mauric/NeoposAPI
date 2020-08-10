const db = require('../database/models');
//TODO CAMBIAR TODO
let indexController = {
    index: async ( req , res , next  ) => {
        let user = await db.User.findAll() 
       // res.render( 'index' ,{ user : req.session.user , shops: shops });
        res.JSON(user);
    },
}
module.exports = indexController;