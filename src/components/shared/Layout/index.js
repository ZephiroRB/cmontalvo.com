import Head from 'next/head'
export const siteTitle = 'Carlos Montalvo - Full Stack Developer'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I'm a Full Stack Developer — Software Development Engineer by profession. 🐱‍💻 based in Queretaro, Mexico ☀️."
        />
       <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
    </div>
  )
}