import Head from 'next/head'
import Layout, { siteTitle } from 'src/components/shared/Layout'
import { getAllPostSlugs, getPostData } from 'src/utils/api/blog'
import Date from 'src/components/shared/date'
import styles from "src/utils/theme/Home.module.css";

export default function Post({ postData }) {
  return (
    <>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article className={styles.section} >
      <h1 className={styles.h1_post}>{postData.title}</h1>
      <div>
        <Date dateString={postData.date} />
      </div>
      <div  dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData
    }
  }
}
