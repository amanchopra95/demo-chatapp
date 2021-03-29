import React, { useContext, useEffect, useRef, useState } from 'react'
import cls from './ChatBox.module.css'
import SocketContext from '../../context/socket'

const ChatBox = (props) => {

    const input = useRef()
    const messageBox = useRef()
    const socket = useContext(SocketContext)
    const [messages, setMessages] = useState([])
    const onInputHandler = (e) => {
        
    }

    const onKeyDownHandler = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            let message = input.current.value
            // Update the backend with the messages
            socket.emit('add message', message)
            input.current.value = null
        }
    }

    useEffect(() => {
        socket.on('message added', message => {
            let newMessages = [...messages, message]
            setMessages(newMessages)
            messageBox.current.scrollTop = messageBox.current.scrollHeight
        }) 
    }, [messages])

    return (
        <React.Fragment>
            <div className={cls["message-box"]}>
                <div className={cls["message-window"]} ref={messageBox}>
                    {
                        messages.map((message, i) => {
                            return (
                                <div key={message + `_${i}`} className={cls["chat-box"]}>
                                    <p></p>
                                    <p>{message}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={cls["w-100"]}>
                    <input className={cls['input']} 
                        type="text" 
                        ref={input}
                        onInput={onInputHandler}
                        onKeyDown={onKeyDownHandler}  />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ChatBox