const Room = require('../models/Room')
const asyncHandler = require('../middlewares/asyncHandler')

exports.getRooms = asyncHandler(async (req, res, next) => {
    res.status(200).json(Room.get())
})