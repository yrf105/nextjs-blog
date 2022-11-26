import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Fisrt Post</title>
      </Head>

      <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <hr/>
      <h1>First Post</h1>
      <p>窗前明月光，疑似地上霜。举头望明月，低头思故乡。</p>
    </Layout>
  )
}
