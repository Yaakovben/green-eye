
const router = require("express").Router()
const {createpoll, getNotfications,getPollById, replay, deletePoll} = require('../controllers/greenEyeController')
const { onlyCommanders, onlySoldiersCommanders } = require("../middlewares/authMiddelwares")


router.post('/', onlyCommanders ,createpoll)

router.get('/my',onlySoldiersCommanders, getNotfications)

router.get('/:id',onlyCommanders,getPollById )

router.post('/reply',onlySoldiersCommanders,replay)

router.delete('/:id',onlyCommanders,deletePoll)




module.exports = router;