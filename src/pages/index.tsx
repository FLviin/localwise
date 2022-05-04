import Head  from "next/head";
import { InputInit } from "../components/InputInit";
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
     <title>LocalWise</title>
    </Head>
    
    <main className={styles.contentContainer}>
      <section className={styles.left}>
          <InputInit />
      </section>
      <section className={styles.right}>
          
      </section>
    </main>
    
    </>
    
  )
}
