import React, { FC } from "react";
import styles from "./Post.module.css";
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2, TbSend } from "react-icons/tb";
import { HiOutlineBookmark } from "react-icons/hi";
import { FaRegSmile } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Post: FC = () => {
	return (
		<div className={styles.post_card}>
			<div className={styles.post_card_header}>
				<div className={styles.profile_info}>
					<img className={styles.post_profile_image} src="/assets/images/user.jpg" alt="profile" />
					&nbsp;
					<strong>coderboyakash</strong>
					<MdVerified color="#458eff" style={{ marginLeft:'2px' }} />
				</div>
				<span className={styles.profile_action}>
					<BiDotsHorizontalRounded size={24} />
				</span>
			</div>
			<div className={styles.post_images}>
				<img src="/assets/images/post.jpg" alt="" />
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
				<p className={styles.post_quote}>ashnoorkaur Honey, your soul’s golden☀️🌻🍯</p>
				<p className={styles.post_comments}>View all 698 comments</p>
				<p className={styles.recent_comments}>
					<span>
						<strong>aslimonalisa</strong> 
						Cutieeee
					</span>
					<AiOutlineHeart style={{ marginRight: '10px' }} size={18} />
				</p>
				<p className={styles.recent_comments}>
					<span>
						<strong>surabhi.samriddhi</strong> 
						Beauty
					</span>
					<AiOutlineHeart style={{ marginRight: '10px' }} size={18} />
				</p>
				<p className={styles.post_time}>2 HOURS AGO</p>
			</div>
			<div className={styles.comment_input}>
				<FaRegSmile size={24} className={styles.comment_smile} />
				<input type="text" placeholder="Add a comment..." />
				<span className={styles.send_comment}>Post</span>
			</div>
		</div>
	);
};

export default Post;
