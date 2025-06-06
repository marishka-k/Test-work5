import { useState } from "react";
import styles from './main.module.css'
import Reviews from "../reviews/reviews";
import Carts from "../carts/carts";
import Cards from "../cards/cards";


function Main({reviewsArr}) {

  const [cartItems, setCartItems] = useState([])
  
  return (
    <main className={styles.main}>
      <Reviews reviewsArr={reviewsArr} />
      <Carts cartItems={cartItems}/>
      <Cards cartItems={cartItems} setCartItems={setCartItems}/>      
    </main>
  );
}

export default Main;
