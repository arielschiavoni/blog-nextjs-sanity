import Container from 'components/Container'
import Header from 'components/Header'
import IndexPageHead from 'components/IndexPageHead'
import Layout from 'components/Layout'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, settings } = props
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Header title={title} description={description} />
        {/* <Container></Container> */}
      </Layout>
    </>
  )
}
