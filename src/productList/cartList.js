
import { useEffect, useState } from 'react';
import styles from './cartList.module.css';
import { useGlobalState } from '../globalContext/context';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart, isProductSaved } from '../store/cartSlice';


const CartList = (props) => {

    const {err, loading} = useGlobalState();
    const {id, category, title, image, price, rating} = props.cart;
    const isCartSaved = useSelector(isProductSaved(id))
    const dispatch = useDispatch();


    function shortText(text){

        const splitText = text.split(' ');
        const words = splitText.slice(0, 3);
        const newText = words.join(' ');
        return splitText.length > 4 ? newText + '..' : newText
    }

    const handleClick = (id) => {

        if(isCartSaved){
            dispatch(removeFromCart(id))
        }
        else{
            dispatch(addToCart(props.cart))
        }
    }

    if(loading) return (<div> ...Loading </div>)
    if(err) return(<div> Error while fetching </div>)

    return (
        <div className={styles.singleCart} key={id} >
           
            <h3> {shortText(title)}</h3>

            <img src={image} style={{width:'250px', height:'250px'}} alt={title} />
            <h5> {category} </h5>
            <h6> ${price} </h6>
            <button onClick={() => handleClick(id)}> {isCartSaved? 'Remove From Cart' : 'Add To Cart'} </button>
        </div>
    )
}

export default CartList