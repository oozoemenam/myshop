import React from 'react';
import styles from './Breadcrumb.module.css';

const Breadcrumb = () => {
  return (
    <nav>
        <ol class={`${styles.cdBreadcrumb} ${styles.customSeparator}`}>
            <li><a href="#0">Home</a></li>
            <li><a href="#0">Products</a></li>
            <li class={styles.current}><em>Project</em></li>
        </ol>
    </nav>
  )
}

export default Breadcrumb;
