import React from 'react'
import cls from './ChatBox.module.css'

const ChatBox = () => {
    return (
        <React.Fragment>
            <div className={cls["message-box"]}>
                <div className={cls["message-window"]}>
                    
                </div>
                <div className={cls["w-100"]}>
                    <input className={cls['input']} type="text" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ChatBox