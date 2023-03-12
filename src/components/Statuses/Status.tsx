import React, { FC } from "react";
import styles from "./Statuses.module.css";

type StatusProps = {
	label: String;
};

const Status: FC<StatusProps> = ({ label }) => {
	return (
		<div className={styles.status}>
			<div className={styles.status_image}>
				<img src="/assets/images/user.jpg" alt="profile" />
			</div>
			<div className={styles.status_name}>{label}</div>
		</div>
	);
};

export default Status;
