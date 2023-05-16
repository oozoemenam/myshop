import React from 'react';
import styles from './ProductSkeleton.module.css';


const ProductSkeleton = () => {
  return (
  <div className={styles.container}>
    {new Array(12).fill().map(() => (
      <div className={styles.cardSkeleton}>
          <div className={styles.animatedBackground}> 
          <div className={styles.wrapper}>
            <div className={styles.cardSkeletonImg}></div>
          </div>
            <div className={styles.skelMaskContainer}>
              <div class={`${styles.skelMask} ${styles.skelMask1}`}></div>
              <div class={`${styles.skelMask} ${styles.skelMask2}`}></div>
              <div class={`${styles.skelMask} ${styles.skelMask3}`}></div>
              <div class={`${styles.skelMask} ${styles.skelMask4}`}></div>
              <div class={`${styles.skelMask} ${styles.skelMask5}`}></div>
              <div class={`${styles.skelMask} ${styles.skelMask6}`}></div>
            </div>
          </div>
        </div>
    ))}
  </div>
  )
}

export default ProductSkeleton;
