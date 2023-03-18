import React, { FC } from 'react'
import { Modal } from 'react-bootstrap'
import styles from './Post.module.css'

const ActionModal: FC<any> = ({ handleClose, show }) => {
    return (
        <Modal
            dialogClassName={styles.action_modal_dialog}
            contentClassName={styles.action_modal}
            show={show}
            onHide={handleClose}
            centered
        >
            <Modal.Body className={styles.action_modal_body}>
                <ul className={styles.actions}>
                    <li className={styles.wran}>Report</li>
                    <li className={styles.wran}>Unfollow</li>
                    <li>Add to favourites</li>
                    <li>Go to post</li>
                    <li>Share to...</li>
                    <li>Copy link</li>
                    <li>Embed</li>
                    <li>About this account</li>
                    <li>Cancel</li>
                </ul>
            </Modal.Body>
        </Modal>
    )
}

export default ActionModal
