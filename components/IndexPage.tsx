// import Container from 'components/Container'
import Header from 'components/Header'
import IndexPageHead from 'components/IndexPageHead'
import Layout from 'components/Layout'
import type { HomePage, Settings } from 'lib/sanity.queries'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  homePage: HomePage
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, settings, homePage } = props
  const { title, subtitle } = settings

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Header title={title} subtitle={subtitle} />
        <div>
          <pre>{JSON.stringify(homePage, null, 2)}</pre>
        </div>

        {/* <Container></Container> */}
      </Layout>
    </>
  )
}
