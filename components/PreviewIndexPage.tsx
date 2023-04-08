import IndexPage from 'components/IndexPage'
import { usePreview } from 'lib/sanity.preview'
import {
  type HomePage,
  homePageQuery,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const homePage: HomePage = usePreview(token, homePageQuery) || {}
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <IndexPage preview homePage={homePage} settings={settings} />
}
