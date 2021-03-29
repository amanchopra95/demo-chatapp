class Room {
    constructor () {
        this._data = ['Room 1', 'Room 2', 'Room 3', 'Room 4']
    }

    get() {
        return this._data
    }
}

const roomInstance = new Room()
Object.freeze(roomInstance)

module.exports = roomInstance