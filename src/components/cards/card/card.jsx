
import styles from './card.module.css'

export default function Card({card, cartItems, setCartItems}) {

  const addItem = () => {
   if (!cartItems.find(el => el.id === card.id)) {
    setCartItems(prev => [...prev, {id: card.id, name: card.title, quantity: 1, price: card.price }])
   } 
  }

  const minusClick = () => {
    if(cartItems.find(el => el.id === card.id)) {
      let _cartItem = cartItems.find(el => el.id === card.id)
      if (_cartItem.quantity === 1) {
        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== card.id)
        setCartItems(updatedCartItems)
      } else {
        const index = cartItems.findIndex(cartItem => cartItem.id === card.id);
        let updatedCartItems = [...cartItems]
        updatedCartItems[index].quantity = cartItems[index].quantity - 1        
        setCartItems(updatedCartItems)
      }
    }
  }
  const plusClick = () => {
    const index = cartItems.findIndex(cartItem => cartItem.id === card.id);
    let updatedCartItems = [...cartItems]
    updatedCartItems[index].quantity = cartItems[index].quantity + 1    
    setCartItems(updatedCartItems)
  }
  
  
  return (
    <li className={styles.card}>
      <img className={styles.image} src={card.image_url} alt={`image${card.id}`} /> 
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      <p >{`Цена: ${card.price}₽`}</p>

      {cartItems.find(el => el.id === card.id)
        ? <div className={styles.button_full}>
            <button type="button" onClick={minusClick} className={styles.button}> - </button>
            <p className={styles.quantity}>{cartItems.find(el => el.id === card.id).quantity}</p>
            <button type="button" onClick={plusClick} className={styles.button}> + </button>
          </div>
        : <div className={styles.button_one}>
            <button type="button" onClick={addItem} className={styles.button}> Купить </button>
          </div>
        
      }
    
    </li>
  )
  
}