//route for book
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let contactController = require('../controllers/contact')


//helper function for guard purposes
function requireAuth(req,res,next)
{
    //check if the user if logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

/*Get Route for book list page - READ Operation */
router.get('/',contactController.displayContactList);


/*Get Route for displaying the Add page - CREATE Operation */
router.get('/add',requireAuth, contactController.displayAddPage);

/*Get Route for displaying the processing Add page - CREATE Operation */
router.post('/add',requireAuth, contactController.processAddpage);

/*Get Route for displaying the Edit page - CREATE Operation */
router.get('/edit/:id',requireAuth, contactController.displayEditPage);

/*Get Route for displaying the processing Edit page - CREATE Operation */
router.post('/edit/:id',requireAuth,contactController.processEditPage);

/*Get to perform deletion - DELETE Operation */
router.get('/delete/:id',requireAuth, contactController.performDelete);


module.exports = router;