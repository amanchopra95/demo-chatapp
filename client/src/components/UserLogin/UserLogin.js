import React, { useContext, useEffect, useState } from 'react'
import Main from '../Main/Main'
import cls from './UserLogin.module.css'
import SocketContext from '../../context/socket'


const UserLogin = (props) => {
    
    const [userName, setUserName] = useState(null)
    const [rooms, setRooms] = useState()
    const socket = useContext(SocketContext)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        let data = {
            'id': socket.id,
            'name': e.target.querySelector('input[type="text"]').value
        }
        fetch('/user', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json)
        .then(res => {
            setUserName(data['name'])
        })
    }

    const fetchRooms = () => {
        fetch('/room')
        .then(res => res.json())
        .then(res => setRooms(res))
    }

    useEffect(() => {
        console.log(userName)
        fetchRooms()
    }, [])

    return (
        <div>
            {
                userName ? <Main /> : (<form className={cls['flex']} onSubmit={onSubmitHandler}>
                            <label>User Name</label>
                            <input type="text" />
                            <label>Select the room</label>
                            <select>
                                {
                                    rooms ? rooms.map((room) => <option key={room}>{room}</option>) : null
                                }
                            </select>
                            <input type="submit" />
                    </form>)
            }
        </div>
    )
} 

export default UserLogin