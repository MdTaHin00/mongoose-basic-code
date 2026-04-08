
//! models folder usersModel.js file require
const User = require('../models/usersModel')

const createUser = async (req, res) => {
    try {
        const bodyData = req.body
        //* User -> operal User var 
        //* create -> mongoose model data make kola
        const user = await User.create(bodyData)

        //! another method new add value
        // const user = new User (bodyData)
        //  user.role = 'admin'
        //* save()-> new add data save kola
        // await user.save();
        res.json(user)
    } catch (error) {
        res.json({
            message: "Account Create Failed",
            error: error
        })
    }
}


//! multiple account 
const multipleUser = async (req, res) => {
    try {
        const bodyData = req.body
        //* insertMany -> akar odik data create
        const result = await User.insertMany(bodyData)
        res.json(result)
    } catch (error) {
        res.json({
            message: " Multiple Account Create Failed",
            error: error
        })
    }
}


//! allUser display 
const getAllUsers = async (req, res) => {
    try {
        //* find()-> mongoDB database thaka data show call 
        const users = await User.find();
        res.json(users)

        if (!users) {
            res.status(404).json({
                message: "No users found"
            })
        }
    } catch (error) {
        res.json({
            message: "All User Display Failed",
            error: error
        })
    }
}


//! single data display for id
const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        //* select(-password)-> password var and result asva na
        //* -password -> password show hova na
        //? another wey 
        //* User.findId(id)
        const user = await User.findOne({ _id: id }).select('-password')
        res.json(user)
    } catch (error) {
        res.json({
            message: "User Not found",
            error: error
        })
    }
}

//! object kola export 
//* object deya a ja fila call kovo {createUser}
module.exports = {
    createUser,
    multipleUser,
    getAllUsers,
    getUserById
}