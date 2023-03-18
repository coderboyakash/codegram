import React, { FC, Fragment, useState } from 'react'
import styles from './Post.module.css'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import {
    AiFillLeftCircle,
    AiFillRightCircle,
    AiOutlineHeart,
} from 'react-icons/ai'
import { TbMessageCircle2, TbSend } from 'react-icons/tb'
import { HiOutlineBookmark } from 'react-icons/hi'
import { FaRegSmile } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import ActionModal from './ActionModal'
import Reaction from './Reaction'

const Post: FC = () => {
    const [modalShow, setModalShow] = useState(false)
    const [pickerShow, setPickerShow] = useState(false)
    const [translateX, setTranslateX] = useState(0)
    const [page, setPage] = useState(1)
    const totalPages = Math.ceil(2 / 2)

    const handleLeftClick = () => {
        setPage((prev) => prev - 1)
        setTranslateX((prev) => prev + 500)
    }
    const handleRightClick = () => {
        setPage((prev) => prev + 1)
        setTranslateX((prev) => prev - 500)
    }
    const handleClose = () => {
        setModalShow(false)
    }
    return (
        <Fragment>
            <div className={styles.post_card}>
                <div className={styles.post_card_header}>
                    <div className={styles.profile_info}>
                        <img
                            className={styles.post_profile_image}
                            src="/assets/images/user.jpg"
                            alt="profile"
                        />
                        &nbsp;
                        <strong>coderboyakash</strong>
                        <MdVerified
                            color="#458eff"
                            style={{ marginLeft: '2px' }}
                        />
                    </div>
                    <span className={styles.profile_action}>
                        <BiDotsHorizontalRounded
                            onClick={() => setModalShow(true)}
                            size={24}
                        />
                    </span>
                </div>
                <div className={styles.post_slider}>
                    <div
                        style={{ transform: `translateX(${translateX}px)` }}
                        className={styles.post_images}
                    >
                        <img
                            src="https://wallpapers.com/images/featured/avfu043y2kv52wha.jpg"
                            alt=""
                        />
                        <img
                            src="https://w0.peakpx.com/wallpaper/916/987/HD-wallpaper-coding-7itech-blue-dark-glitter-neon-power.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.caret_container}>
                        {page !== totalPages ? (
                            <AiFillLeftCircle
                                onClick={handleLeftClick}
                                size={26}
                                className={styles.caret}
                            />
                        ) : (
                            <span></span>
                        )}
                        {page === totalPages ? (
                            <AiFillRightCircle
                                onClick={handleRightClick}
                                size={26}
                                className={styles.caret}
                            />
                        ) : (
                            <span></span>
                        )}
                    </div>
                </div>
                <div className={styles.post_reaction}>
                    <div className={styles.post_reaction_left}>
                        <AiOutlineHeart size={28} />
                        <TbMessageCircle2 size={28} />
                        <TbSend size={28} />
                    </div>
                    <div className={styles.post_reaction_right}>
                        <HiOutlineBookmark size={26} />
                    </div>
                </div>
                <div className={styles.post_description}>
                    <p className={styles.post_likes}>42,911 likes</p>
                    <p className={styles.post_quote}>
                        ashnoorkaur Honey, your soul’s golden☀️🌻🍯
                    </p>
                    <p className={styles.post_comments}>
                        View all 698 comments
                    </p>
                    <p className={styles.recent_comments}>
                        <span>
                            <strong>aslimonalisa&nbsp;</strong>
                            Cutieeee
                        </span>
                        <AiOutlineHeart
                            style={{ marginRight: '10px' }}
                            size={18}
                        />
                    </p>
                    <p className={styles.recent_comments}>
                        <span>
                            <strong>surabhi.samriddhi&nbsp;</strong>
                            Beauty
                        </span>
                        <AiOutlineHeart
                            style={{ marginRight: '10px' }}
                            size={18}
                        />
                    </p>
                    <p className={styles.post_time}>2 HOURS AGO</p>
                </div>
                <div className={styles.comment_input}>
                    {pickerShow && <Reaction />}
                    <FaRegSmile
                        onClick={() => setPickerShow(!pickerShow)}
                        size={24}
                        className={styles.comment_smile}
                    />
                    <input type="text" placeholder="Add a comment..." />
                    <span className={styles.send_comment}>Post</span>
                </div>
            </div>
            <ActionModal show={modalShow} handleClose={handleClose} />
        </Fragment>
    )
}

export default Post
