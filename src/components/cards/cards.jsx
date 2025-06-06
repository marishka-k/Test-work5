import React, { useEffect, useState } from 'react';
import Card from './card/card';

import styles from './cards.module.css'

export default function Cards ({cartItems, setCartItems}) {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Функция загрузки данных
  async function loadCards () {
    setLoading(true);
    const res = await fetch(`http://o-complex.com:1337/products?page${page}`)
    const data = await res.json();
        
    if (data.items === 0) return; // Нет новых товаров
    
    const items = data.items
    
    cards.length === 0
      ? setCards(items)
      : setCards(prev => [...prev, ...items])
    
    setPage((prev) => prev + 1);
    setLoading(false);
  };

  // Загружаем первую страницу при старте
  useEffect(() => {
    loadCards()
  }, []);

  // Следим за скроллом
  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10 && !loading) {
        loadCards();
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [loading]);
  

  return (
    <>
      <ul className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} card={card} cartItems={cartItems} setCartItems={setCartItems}/>
        ))
        }
      </ul>
      
      {loading && <p>Загрузка...</p>}
    </>
  );
};