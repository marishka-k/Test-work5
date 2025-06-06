import Review from "./review/review";
import styles from './reviews.module.css'

export default function Reviews({reviewsArr}) {

  return (
    <ul className={styles.cards}>
      {reviewsArr.length > 0
        ? reviewsArr.map(review => (
          <Review key={review.id} review={review} />
        )) 
        : <p>нет отзывов</p>
      }

    </ul>
  )
  
}