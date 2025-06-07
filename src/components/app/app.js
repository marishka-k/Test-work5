
import React , { useEffect, useState } from 'react';
import Header from '../app-header/app-header';
import { useDispatch, useSelector } from 'react-redux';


import Main from '../main/main';
import { getReviews } from '../../services/actions/reviews';
import styles from './app.module.css'

function App() {

  const [ reviewsArr, setReviewsArr] = useState([])
  const dispatch = useDispatch();  
  
  useEffect(() => {
    dispatch(getReviews());    
  }, [dispatch]);

  const reviews = useSelector((store) => store.reviews);

  useEffect(() => {
    let _reviewsArr = []
    if (reviews) { _reviewsArr = reviews.reviews.comments ? [...reviews.reviews.comments] : [] }
    setReviewsArr(_reviewsArr )   
  }, [reviews]);

  return (
    <body className={styles.page}>
      <Header />
      <Main reviewsArr={reviewsArr}/>      
    </body>  
  );
}

export default App;
