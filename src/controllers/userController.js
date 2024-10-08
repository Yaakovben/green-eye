const {createUser} = require("../services/userService")

const register = async (req, res) => {
    try {
        await createUser(req.body)
        res.status(201).json({
            msg:"user created"
        })
    } catch (err) {
        res.status(401).json(err)
        
    }
}


const getProfile = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}


const setSettings = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    register,
    getProfile,
    setSettings
}