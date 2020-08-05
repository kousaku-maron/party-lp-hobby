import React from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import styles from './[id].module.css'
import YourPost from 'components/yourPost'
import { getPosts } from 'repositories/post'

type SerializedPostData = {
  createdAt: string
  id: string
  writer: string
  message: string
  imageURL: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()
  const paths = posts.map((post) => ({ params: { id: post.id } }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPosts()
  const post = posts.find((post) => post.id === params.id)
  const serializedData: SerializedPostData = {
    ...post,
    createdAt: post.createdAt.toDateString(),
  }
  return { props: { post: serializedData }, revalidate: 1 }
}

const PostPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.root}>
      <Head>
        <title>Party - Your LP</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>

      {post && <YourPost post={post} />}
    </div>
  )
}

export default PostPage
