import styles from './review.module.css'

function RenderHTML({ htmlContent }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}


export default function Review({review}) {
  const htmlString = review.text.replace('hi', 'h2')  

  return(
    <li className={styles.card}>
      <RenderHTML htmlContent={htmlString} />
    </li>
  )
}