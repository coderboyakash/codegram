import React, { useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import Status from "./Status";
import styles from './Statuses.module.css'

const Statuses = () => {
    const [translate, setTranslate] = useState(0)
    const [page, setPage] = useState(1)
    const statuses = [
        {id: 1, name: 'coderboyakash'},
        {id: 2, name: 'vishal'},
        {id: 3, name: 'suraj'},
        {id: 4, name: 'mahesh'},
        {id: 5, name: 'ram'},
        {id: 6, name: 'shayam'},
        {id: 7, name: 'vivek'},
        {id: 8, name: 'suneja'},
        {id: 9, name: 'barbara'},
        {id: 10, name: 'barbara'},
        {id: 11, name: 'barbara'},
        {id: 12, name: 'barbara'}
    ]
    const totalPages = Math.ceil(statuses.length / 6)
    
    const handleLeftClick = () => {
        setPage(prev => prev - 1)
        setTranslate(prev => prev + 500)
    }
    const handleRightClick = () => {
        setPage(prev => prev + 1)
        setTranslate(prev => prev - 500)
    }    
    

    
	return (
        <div className={styles.statuses_wrapper}>
            <div style={{ transform: `translateX(${translate}px)` }} className={styles.statuses}>
                {statuses.map(status => (
                    <Status key={status.id} label={status.name} />
                ))}
            </div>
            {page !== 1 && <AiFillLeftCircle onClick={handleLeftClick} size={28} className={styles.left_caret} style={{ color: '#fff' }} />}
            {page !== totalPages && <AiFillRightCircle onClick={handleRightClick} size={28} className={styles.right_caret} style={{ color: '#fff' }} />}
        </div>
    );
};

export default Statuses;
