import React from 'react';
import styles from './ProductSkeleton.module.css';
import { v4 as uuidv4 } from 'uuid';


const ProductSkeleton = () => {
  return (
  <div className={styles.container}>
    {new Array(12).fill().map((_, i) => {
      console.log('i', i);
    return (
      <div key={uuidv4()} className={styles.cardSkeleton}>
          <div className={styles.animatedBackground}> 
          <div className={styles.wrapper}>
            <div className={styles.cardSkeletonImg}></div>
          </div>
            <div className={styles.skelMaskContainer}>
              <div className={`${styles.skelMask} ${styles.skelMask1}`}></div>
              <div className={`${styles.skelMask} ${styles.skelMask2}`}></div>
              <div className={`${styles.skelMask} ${styles.skelMask3}`}></div>
              <div className={`${styles.skelMask} ${styles.skelMask4}`}></div>
              <div className={`${styles.skelMask} ${styles.skelMask5}`}></div>
              <div className={`${styles.skelMask} ${styles.skelMask6}`}></div>
            </div>
          </div>
        </div>
    );
})}
  </div>
  )
}

export default ProductSkeleton;
