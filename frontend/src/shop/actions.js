
import axios from 'axios';
import * as t from './types';
import { IP } from '../utils';
export const api = `${IP}/api/v1/products`;


export const getProducts = () => async (dispatch) => {
  dispatch({ type: t.PRODUCTS_LOADING });
  try {
    // const res = await axios.get(`${api}`);    
    const res = await axios.get(`https://fakestoreapi.com/products`);    
    dispatch({ type: t.PRODUCTS_LOADED, products: res.data });
    console.log('get1', res);
  }
  catch (err) {
    console.log(err);
    dispatch({ type: t.PRODUCTS_ERROR });
  }
}