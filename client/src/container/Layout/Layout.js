import React, { useContext, useEffect } from 'react'
import SocketContext from '../../context/socket'
import UserLogin from '../../components/UserLogin/UserLogin'

const Layout = (props) => {

    const socket = useContext(SocketContext)

    useEffect(() => {
        socket.on("message", (message) => {
            console.log("Layout Message ", message)
        })
    })

    return (
        <UserLogin />
    )
}

export default Layout