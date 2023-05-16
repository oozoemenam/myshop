import React from 'react';
import styles from './Shop.module.css';
import { connect } from 'react-redux';
import { getProducts } from './actions';
import Breadcrumb from './Breadcrumb';
import ProductList from './ProductList';
import ProductSkeleton from './ProductSkeleton';

const Shop = ({ products, getProducts }) => {
    React.useEffect(() => {
        getProducts();
    }, []);

    return (
		<div className={styles.container}>
			<Breadcrumb />
      {products ? <ProductList products={products} /> : <ProductSkeleton /> }
      {/* <ProductSkeleton /> */}
		</div>
	);
}

const mapStateToProps = (state) => ({
    products: state.shop.products
  });
  
  export default connect(
    mapStateToProps, 
    { getProducts }
  )(Shop);
  