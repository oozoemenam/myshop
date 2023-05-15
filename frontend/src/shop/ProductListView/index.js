import React from 'react';
import styles from './ProductListView.module.css';


const ProductListView = () => {
  return (
    <div className={styles.container}>
	<div className={styles.card}>
		<div class={`${styles.cardImg} ${styles.skeleton}`}>
		</div>
		<div className={styles.cardBody}>
			<h2 class={`${styles.cardTitle} ${styles.skeleton}`}>
			</h2>
			<p class={`${styles.cardIntro} ${styles.skeleton}`}>
			</p>
		</div>
	</div>
	<div className={styles.card}>
		<div className={styles.cardImg}>
			<img src="https://assets.codepen.io/285131/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg" />
		</div>
		<div className={styles.cardBody}>
			<h2 className={styles.cardTitle}>
				Drive (2011)
			</h2>
			<p className={styles.cardIntro}>
				Driver is a skilled Hollywood stuntman who moonlights as a getaway driv...
			</p>
		</div>
	</div>
</div>
  )
}

export default ProductListView;