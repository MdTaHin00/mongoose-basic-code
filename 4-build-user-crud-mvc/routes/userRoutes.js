const express = require('express');

const router = express.Router();

//! controllers folder userControllers file require 
const { createUser, multipleUser, getAllUsers, getUserById } = require('../controllers/userControllers');

      //? post method
//! /create-account route
//* /api/users/create-account
router.post("/create-account", createUser)

//! /multiple-account route 
//* /api/users/multiple-account
router.post("/multiple-account",multipleUser)
 
     //? get method
//! allUser display   
 //* /api/users/allUser   
router.get("/allUser", getAllUsers)


//! single data display for id
 //* /api/users/singleData/dynamic id 
router.get("/singleData/:id", getUserById)


module.exports = router;