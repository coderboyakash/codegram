import EmojiPicker from 'emoji-picker-react'
import React, { FC } from 'react'
import styles from './Post.module.css'

const Reaction: FC = () => {
    return (
        <div className={styles.emoji_picker}>
            <EmojiPicker />
        </div>
    )
}

export default Reaction
