const router = require('express').Router()
const {
    getRooms
} = require('../controllers/room')

router.route('')
    .get(getRooms)

module.exports = router