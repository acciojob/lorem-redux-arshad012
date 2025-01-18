import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchLorem } from "../redux/loremSlice";
import styles from './loremIpsum.module.css';

const LoremIpsum = () => {
    const {lorems, status, error} = useSelector(state => state.lorems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLorem());
    },[])
    
    return (
        <div>
            <div className={styles.heading}>
                <h1>A short Naration of Lorem Ipsum</h1>
                <p>Below contains A title and body gotten from <br /> a random API. Please take your time to review</p>
            </div>
        
        {
            status == 'succeeded' &&
            <div className={styles.loremContainer}>
                {
                    lorems.map((lorem) => (
                        <div key={lorem.id} className={styles.loremCard}>
                            <p><span style={{fontWeight:'bold'}}>Title:</span>{lorem.title}</p>
                            <p><span style={{fontWeight:'bold'}}>Body:</span>{lorem.body}</p>
                        </div>
                    ))
                }
            </div>
        }
        </div>
    )
}

export default LoremIpsum;