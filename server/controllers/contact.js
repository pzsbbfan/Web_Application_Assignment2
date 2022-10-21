let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const contact = require('../models/contact');


//Create reference to the model
let Contact = require('../models/contact');


module.exports.displayContactList = (req,res,next)=>{
    contact.find((err,contactList)=>{
        if(err)
        {
            return console.error(err);
        }
        // only authenicated user can access this page
        else if(!req.user){
            res.redirect('/login');
        }
        else
        {
            //console.log(BookList);
            res.render('contact/list',
            {title: 'Business Contacts', 
            ContactList: contactList, 
            displayName: req.user ? req.user.displayName:''
            });
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('contact/add', 
    {title: 'Add Business Contact',
    displayName: req.user ? req.user.displayName:''
    });
}

module.exports.processAddpage = (req,res,next)=>{
    let newContact = Contact({
        "contactName": req.body.contactName,
        "contactNumber" : req.body.contactNumber,
        "email" : req.body.email
    });
    Contact.create(newContact, (err,Contact)=>{
        if (err) {
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the book list
            res.redirect('/contact-list');
        }
        
    });
}

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    
    Contact.findById(id, (err, contactToEdit) =>{
        if (err)
        {
            console.log(err);
            res.end;
        }
        else
        {
            //show the edit view
            res.render('contact/edit', 
            {title:'Edit Business Contact', 
            contact:contactToEdit,
            displayName: req.user ? req.user.displayName:''
            }); 
        }
    });
}

module.exports.processEditPage = (req,res,next)=>{
    let id = req.params.id;

    let updatedContact = Contact({
        "_id":id,
        "contactName": req.body.contactName,
        "contactNumber" : req.body.contactNumber,
        "email" : req.body.email
    });

    Contact.updateOne({_id:id}, updatedContact,(err) =>{
        if  (err){
            console.log(err);
            res.end;
        }
        else{
            //refresh book list
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req,res,next)=>{
    let id = req.params.id;

    Contact.remove({_id:id},(err)=>{
        if (err){
            console.log(err);
            res.end;
        }
        else{
            //refresh book list
            res.redirect('/contact-list');
        }
    });
}


