
const router = require("express").Router()
const {createpoll, getNotfications,getPollById, replay, deletePoll} = require('../controllers/greenEyeController')


router.post('/',createpoll)

router.get('/my', getNotfications)

router.get('/:id',getPollById )

router.post('/reply',replay)

router.delete('/:id',deletePoll)




module.exports = router;