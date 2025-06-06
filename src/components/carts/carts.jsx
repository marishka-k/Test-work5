import { useState } from "react";
import Cart from "./cart/cart";
import styles from "./carts.module.css";

export default function Carts({cartItems}) {
  const [number, setNumber] = useState('')

  const onClick = () => {
    const cleanItems = cartItems.map(({ name, price, ...rest }) => rest);
    const values = {
      phone: number,
      cart: cleanItems
    }

    console.log('values', values);
    
    
  }

  return (
    <div className={styles.content}>
      <h2 className={styles.title }>Добавленные товары</h2>
      <ul className={styles.carts} >
        {cartItems.map((cart, index) => (
          <Cart key={index} cart={cart}/>          
        ))
        }
      </ul>
      <div className={styles.buttons}>
        <input className={styles.button} type="text" name="name" value={number} onChange={(e) => setNumber(e.target.value)} placeholder='+7 (___) ___ __-__'/>
        <button type="button" onClick={onClick} className={styles.button}> Заказать </button>
      </div>

    </div>

    
  );
  
}