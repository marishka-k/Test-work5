import Loader from "../loader/loader";
import Review from "./review/review";
import styles from './reviews.module.css'

export default function Reviews({reviewsArr}) {

  return (
    <ul className={styles.reviews}>
      {reviewsArr.length > 0
        ? reviewsArr.map((review, index) => (
          <Review key={index} review={review} />
        )) 
        : <Loader/>
      }

    </ul>
  )
  
}