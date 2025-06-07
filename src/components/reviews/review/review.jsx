import styles from './review.module.css'

/* function RenderHTML({ htmlContent }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
} */

export default function Review({review}) {
  /* const htmlString = review.text.replace('hi', 'h2')   */

  return(
    <li className={styles.review}>
      {/* <RenderHTML htmlContent={htmlString} /> */}
      <p className={styles.text}>{review.body}</p>
    </li>
  )
}