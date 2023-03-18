import React from 'react'
import Post from '../../components/Post/Post'
import Sidebar from '../../components/Sidebar/Sidebar'
import Statuses from '../../components/Statuses/Statuses'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.home_wrapper}>
            <Sidebar />
            <main className={styles.posts_wrapper}>
                <Statuses />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </main>
        </div>
    )
}

export default Home
