import styles from './cart.module.css'

export default function Cart({ cart }) {
  

  return (
    <li className={styles.cart}>
      <p className={styles.text}>{cart.name}</p>
      <p className={styles.text}>{`х${cart.quantity}`}</p>
      <p className={styles.text}>{`${cart.quantity*cart.price}₽`}</p>
    </li>
  );
}
