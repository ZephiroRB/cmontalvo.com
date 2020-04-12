import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos Montalvo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! 👋🏼 I'm <a href="https://github.com/ZephiroRB" target="_blank">Carlos Montalvo</a>
        </h1>

        <p className={styles.description}>
          Backend Developer
        </p>

      
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by NextJs
        </a>
      </footer>
    </div>
  )
}
