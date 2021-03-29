import React, { useState, useEffect, useContext } from 'react'
import SocketContext from '../../context/socket'

const User = (props) => {

    const [users, setUsers] = useState()
    const socket = useContext(SocketContext)

    const fetchUsers = async () => {
        await fetch('/user/all')
        .then(res => res.json())
        .then(res => setUsers(res))
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        socket.on('useradded', (msg) => {
            fetchUsers()
        })
        socket.on('userremoved', (message) => {
            fetchUsers()
        })
    }, [])

    return (
        <div>
            <h6>Users attending this chat</h6>
            <ul>
                {
                    users ? users.map((user) => {
                        return <li key={user.id}>{user.name}</li>
                    }) : null
                }
            </ul>
        </div>
    )
}

export default User