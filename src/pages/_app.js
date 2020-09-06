import React from 'react'
import App from 'next/app'
import 'src/utils/theme/globals.css'
import Layout, { siteTitle } from 'src/components/shared/Layout'

//https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp