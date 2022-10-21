/* 
File name: index.js
Student name: Zhikun Fan
StudentID: 301250119
Date 09/30/2022
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);


/* GET About page. */
router.get('/about', indexController.displayAboutPage);


/* GET Services page. */
router.get('/services', indexController.displayServicesPage);



/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);


/* GET Projects page. */
router.get('/projects', indexController.displayProjectPage);

/*Get Route for displaying the Login page  */
router.get('/login', indexController.displayLoginPage);

/*Get Route for displaying the processing Login page */
router.post('/login',indexController.processLoginPage);

/*Get Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/*Get Route for displaying the processing Register page */
router.post('/register',indexController.processRegisterPage);

/*Get to perform UserLogout */
router.get('/logout',indexController.performLogout);


module.exports = router;