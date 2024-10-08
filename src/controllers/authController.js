const {login:loginFromService} = require("../services/authService")
const login = async (req, res) => {
    try {
        const token  = await loginFromService(req.body);
        res.cookie("token", token)
        res.json({
            msg:`Welcome ${req.body.user_name}! so good to see you`,
        })
    } catch (err) {
        res.status(400).send(err.message)
    }

}



const logout = async (req, res) => {
    try {

    } catch (error) { 

    }
}




module.exports = {
    login,
    logout,
}