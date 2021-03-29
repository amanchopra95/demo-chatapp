class UserSchema {
    constructor (user) {
        this.id = user.id,
        this.name = user.name
        this.message = []
    }
}

class User {
    constructor () {
        this._data = {}
    }

    getAll() {
        const users = Object.values(this._data)
        return users;
    }

    add(user) {
        if (this._data[user.id]) {
            this._data[user.id] = new UserSchema({...this._data[user.id], ...user})
        }
        this._data[user.id] = new UserSchema(user)
    }

    get(id) {
        return this._data[id]
    }

    remove(id) {
        delete this._data[id]
    }

    addMessage(message) {
        this._data[message.id].message.push(message)
    }
}

const userStore = new User()
Object.freeze(userStore)

module.exports = userStore