import React, { useEffect, useState } from 'react';
import Card from './card/card';

import styles from './cards.module.css'

export default function Cards ({cartItems, setCartItems}) {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  // Функция загрузки данных
  async function loadCards () {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${(page - 1) * 20}`)
    const data = await res.json();
        
    if (data.items === 0) return; // Нет новых товаров

    console.log('data', data);
    
    
    const items = data.products
    
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
        {cards.map((card, index) => (
          <Card key={index} card={card} cartItems={cartItems} setCartItems={setCartItems}/>
        ))
        }
      </ul>

      {loading && <p>Загрузка...</p>}
    </>
  );
};