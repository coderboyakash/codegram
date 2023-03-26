import React, { FC } from 'react'
import { AiFillHome, AiFillInstagram, AiOutlineHeart } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { TbMessageCircle2 } from 'react-icons/tb'
import { FiPlusSquare } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { CiLogout } from 'react-icons/ci'
import styles from './Sidebar.module.css'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/Auth/AuthSlice'

const Sidebar: FC = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {      
        dispatch(logout())
    }
    return (
        <div className={styles.sidebar}>
            <h2>CodeGram!!</h2>
            <ul className={styles.list}>
                <li>
                    <AiFillHome size={24} />
                    <span>Home</span>
                </li>
                <li>
                    <BsSearch size={24} />
                    <span>Search</span>
                </li>
                <li>
                    <MdOutlineExplore size={24} />
                    <span>Explore</span>
                </li>
                <li>
                    <AiFillInstagram size={24} />
                    <span>Reels</span>
                </li>
                <li>
                    <TbMessageCircle2 size={24} />
                    <span>Messages</span>
                </li>
                <li>
                    <AiOutlineHeart size={24} />
                    <span>Notifications</span>
                </li>
                <li>
                    <FiPlusSquare size={24} />
                    <span>Create</span>
                </li>
                <li>
                    <RxHamburgerMenu size={24} />
                    <span>More</span>
                </li>
                <li>
                    <CiLogout size={24} />
                    <span onClick={handleLogout}>Logout</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
