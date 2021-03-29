const User = require('../models/User')
const asyncHandler = require('../middlewares/asyncHandler')


exports.getUsers = asyncHandler(async (req, res, next) => {
    res.status(200).json(User.getAll())
})

exports.getUser = asyncHandler(async  (req, res, next) => {
    res.status(200).json(User.get(req.query.id))
})

exports.addUser = asyncHandler(async (req, res, next) => {
    req.io.emit('useradded', "New user is added in the room ")
    User.add(req.body)
    res.status(201).json({...req.body})
})

exports.removeUser = asyncHandler(async (req, res, next) => {
    const user = User.remove(req.query.id)
    req.io.emit('userremoved', 'User is removed')
    res.status(200).json(user)
})