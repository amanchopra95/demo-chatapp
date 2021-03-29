const router = require('express').Router()
const {
    getUser,
    getUsers,
    addUser,
    removeUser
} = require('../controllers/user')

router.route('')
    .get(getUser)
    .post(addUser)
    .delete(removeUser)

router.route('/all')
    .get(getUsers)

module.exports = router

