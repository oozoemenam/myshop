import React from 'react';
import styles from './ProductList.module.css';
import { connect } from 'react-redux';
import { getProducts } from '../actions';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const ProductList = ({ products, getProducts }) => {
	React.useEffect(() => {
		getProducts();
	}, []);

	return (
		<Link to='#' className={styles.container}>
			{products && products.map(({ id, title, price, category, description, image }) => {
			return (
			<div key={id} className={styles.card}>
				<img className={styles.img} src={image} alt={title} />
				<div className={styles.title}>{title.substring(0, 50)}</div>
				<div className={styles.price}>{price}€</div>
			</div>
			);
		
			})}
		</Link>
	);
}


const mapStateToProps = (state) => ({
  products: state.shop.products
});

export default connect(
  mapStateToProps, 
  { getProducts }
)(ProductList);
