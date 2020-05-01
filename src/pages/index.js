import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/shared/Layout/index'

export default function Home() {
  return (
    <Layout>
    
    <div className={styles.container}>
      <Head>
        <title>Carlos Montalvo</title>
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
    </Layout>
  )
}
