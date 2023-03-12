import React, { FC } from "react";
import { AiFillHome, AiFillInstagram, AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import { FiPlusSquare } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Sidebar.module.css";

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<h2>CodeGram!!</h2>
			<ul className={styles.list}>
				<li>
					<AiFillHome size={24} />
                    <span>Home</span>
				</li>
				<li>
					<BsSearch size={24}  />
                    <span>Search</span>
				</li>
				<li>
					<MdOutlineExplore size={24}  />
                    <span>Explore</span>
				</li>
				<li>
					<AiFillInstagram size={24}  />
                    <span>Reels</span>
				</li>
				<li>
					<TbMessageCircle2 size={24}  />
                    <span>Messages</span>
				</li>
				<li>
					<AiOutlineHeart size={24}  />
                    <span>Notifications</span>
				</li>
				<li>
					<FiPlusSquare size={24}  />
                    <span>Create</span>
				</li>
				<li>
					<RxHamburgerMenu size={24}  />
                    <span>More</span>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
