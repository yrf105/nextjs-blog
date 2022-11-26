import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'

export default function Post({postData}) {
  return (<Layout>
    <Head>
      <title> {postData.id} </title>
    </Head>
    <h1 className='text-2xl'>
    {postData.title}
    </h1>
    <div className='text-gray-400'>
      <Date dateString={postData.date} />
    </div>
    <hr />
    <div class="html-md" dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
  </Layout>)
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
