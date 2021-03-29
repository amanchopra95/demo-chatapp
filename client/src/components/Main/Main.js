import React from 'react'
import ChatBox from '../../components/ChatBox/ChatBox'
import User from '../../components/Users/User'
import cls from './Main.module.css'

const Main = (props) => {
    return (
        <main className={cls['main']}>
            <header className={cls['header']}>
                <h1>Chat App</h1>
            </header>
            <aside className={cls['aside']}>
                <User />
            </aside>
            <section className={cls['section']}>
                <ChatBox />
            </section>
            <footer className={cls['footer']}>
                <div>
                    <p>Thanks</p>
                </div>
            </footer>
        </main>
    )
}

export default Main