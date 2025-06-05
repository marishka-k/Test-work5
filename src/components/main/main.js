import { useEffect } from "react";
import Home from "../home/home";
import styles from './main.module.css'

function Main({reviewsArr}) {

  useEffect(() => {
    console.log('reviewsArr', reviewsArr);   
  }, [reviewsArr]);
  
  return (
    <main className={styles.main}>
      <Home/>
    </main>
  );
}

export default Main;
