import React from 'react';
import styles from './Shop.module.css';
import { connect } from 'react-redux';
import { getProducts } from './actions';
import Breadcrumb from './Breadcrumb';
import ProductList from './ProductList';
import ProductSkeleton from './ProductSkeleton';
import {logout} from '../account/actions'

const Shop = ({ products, getProducts, logout }) => {
    React.useEffect(() => {
        getProducts();
    }, []);

    return (
      <div style={{textAlign: 'center'}}>
			<Breadcrumb />
      <button onClick={logout}>Log out</button>
		<div className={styles.container}>
      {/* {products ? <ProductList products={products} /> : <ProductSkeleton /> } */}
      {/* <ProductSkeleton /> */}
      {new Array(25).fill().map((_, i) => {
        if (products && products[i]) {
          const { id, title, price, category, description, image } = products[i];
          return (
            <div key={id} className={styles.card}>
              <img className={styles.img} src={image} alt={title} />
              <div className={styles.title}>{title.substring(0, 50)}</div>
              <div className={styles.price}>{price}€</div>
            </div>
            ); 
          }
        else
          return (
            <div key={i} className={styles.cardSkeleton}>
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
          )
        })}
		</div>
    </div>
	);
}

const mapStateToProps = (state) => ({
    products: state.shop.products
  });
  
  export default connect(
    mapStateToProps, 
    { getProducts, logout }
  )(Shop);
  