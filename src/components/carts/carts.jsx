import { useEffect, useState } from "react";
import Cart from "./cart/cart";
import styles from "./carts.module.css";
import { useDispatch } from "react-redux";
import { getOrderRequest } from "../../services/actions/order-details";
import { saveCart, savePhone, getPhone } from "../../utils/localStorage";
import Modal from "./modal/modal";

export default function Carts({cartItems, setCartItems}) { 
  const dispatch = useDispatch();
  const [phone, setPhone] = useState(getPhone())
  const [openModal, setOpenModal] = useState(false);
  const [canSent, setCanSent] = useState(false)

  // Сохраняем при изменении
  useEffect(() => {
    saveCart(cartItems);
  }, [cartItems]);

  useEffect(() => {
    savePhone(phone);
  }, [phone]); 

  useEffect(() => {
    if (phone.replace(/\D/g, '').length !== 11 || cartItems.length === 0) {
      setCanSent(false);
    } else setCanSent(true)
  }, [phone, cartItems ]); 

  const onClick = () => {
    const cleanItems = cartItems.map(({ name, price, ...rest }) => rest);
    const values = {
      phone: phone.replace(/\D/g, ''),
      cart: cleanItems
    }
    const data = {
      title: "заказ от пользователя",
      body: JSON.stringify(values),
      userId: 1
    }

    dispatch(getOrderRequest(data))  
    setCartItems([])
    setOpenModal(true)  
  }

  const handlePhoneChange = (e) => {
    let input = e.target.value;

    // Оставляем только цифры
    const cleaned = input.replace(/\D/g, '');

    // Применяем маску
    let formatted = '';
    if (cleaned.length > 0) {
      formatted = '+7 (';
      if (cleaned.length > 1) formatted += cleaned.slice(1, 4);
      if (cleaned.length >= 4) formatted += ') ' + cleaned.slice(4, 7);
      if (cleaned.length >= 7) formatted += ' ' + cleaned.slice(7, 9);
      if (cleaned.length >= 9) formatted += '-' + cleaned.slice(9, 11);
    } else {
      formatted = '+7 (';
    }

    setPhone(formatted);
  };



  return (
    <div className={styles.content}>
      <h2 className={styles.title }>Добавленные товары</h2>
      <ul className={styles.carts} >
        {cartItems.length > 0
          ? cartItems.map((cart, index) => (
              <Cart key={index} cart={cart}/>          
            ))
          : <li>
              <p className={styles.text}>Корзина пустая</p>
            </li>
        }
      </ul>
      <div className={styles.buttons}>
        <input className={phone.replace(/\D/g, '').length !== 11 ? `${styles.button} ${styles.error} ` : `${styles.button}`} type="text" name="name" value={phone} onChange={handlePhoneChange} placeholder='+7 (___) ___ __-__'/>
        <button type="button" onClick={onClick} className={canSent ? `${styles.button}` : `${styles.button} ${styles.button_disabled} `}> Заказать </button>
      </div>

      <Modal open={openModal} setOpen={setOpenModal}/>

    </div>

    
  );
  
}