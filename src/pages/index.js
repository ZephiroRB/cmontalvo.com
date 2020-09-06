import React from "react";
import Head from "next/head";
import styles from "src/utils/theme/Home.module.css";
import { getSortedPostsData } from "src/utils/api/blog";
import Date from "src/components/shared/Date";
import Link from "next/link";

export default function Index({ allPostsData }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Carlos Montalvo</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Hi! 👋🏼 I'm{" "}
            <a href="https://github.com/ZephiroRB" target="_blank">
              Carlos Montalvo
            </a>
          </h1>

          <p className={styles.description}>Backend Developer</p>
        </main>
      </div>
      <section className={styles.section}>
        <div>
          <div>
            <h2>Blog</h2>
            <ul>
              {allPostsData.map(({ slug, date, title }) => (
                <li key={slug}>
                  <Link href="/blog/[slug]" as={`/blog/${slug}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
