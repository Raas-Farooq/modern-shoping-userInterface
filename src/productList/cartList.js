
import { useEffect, useState } from 'react';
import styles from './cartList.module.css';
import { useGlobalState } from '../globalContext/context';


const CartList = (props) => {
    // console.log("props items: ", props.cart)

    
    const {id, category, title, image, price, rating} = props.cart;
    const [found, setFound] = useState(false);


    function shortText(text){

        const splitText = text.split(' ');
        const words = splitText.slice(0, 3);
        const newText = words.join(' ');
        return splitText.length > 4 ? newText + '..' : newText
    }

    const handleClick = (id) => {
        let storedCarts = JSON.parse(localStorage.getItem('boughtItems'))|| [];

        console.log("handleClick Runs")
        const exist = storedCarts.some(cart => cart.id === id);
        if(exist){
            storedCarts = storedCarts.filter(cart => cart.id != id);
            localStorage.setItem('boughtItems', JSON.stringify(storedCarts));
        }

        else {
            const newCart = props.allProducts.find(product => product.id === id);
            console.log("clicked Cart: ", newCart);
            if(newCart){
                storedCarts.push(newCart);
                console.log("stored Items before storing: ", storedCarts);
                localStorage.setItem('boughtItems', JSON.stringify(storedCarts))
            }
        }
        setFound(!found);
    }

    useEffect(() => {
        const myWord =  shortText("going through the winds");
        console.log("Special: ", myWord)
    }, [])
  
    return (
        <div className={styles.singleCart} key={id} >
           
            <h3> {shortText(title)}</h3>

            <img src={image} style={{width:'250px', height:'250px'}} alt={title} />
            <h5> {category} </h5>
            <h6> {price} </h6>
            <button onClick={() => handleClick(id)}> {found ? 'Remove From Cart' : 'Add To Cart'} </button>
            {/* onClick={handleClick} */}
        </div>
    )
}

export default CartList