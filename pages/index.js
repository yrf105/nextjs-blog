import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='/posts/first-post'>this page!</a>.)
        </p>
      </section>

      <section>
        <h2 className='text-2xl text-blue-900 font-bold my-4'>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className='my-2' key={id}>
              <Link href={`/posts/${id}`}> {title} </Link>
              <br />
              <div className='text-gray-500'>
              <Date dateString={date} />
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
