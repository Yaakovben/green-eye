const router = require("express").Router()
const {login, logout} = require('../controllers/authController');
const { onlySoldiersCommanders } = require("../middlewares/authMiddelwares");



router.post('/login' ,login)

router.delete('/logout' ,onlySoldiersCommanders,logout)


module.exports = router;

