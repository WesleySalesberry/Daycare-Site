import { Layout } from "../components/container/Layout"
import { DashboardCardPanel } from "../components/Dashboard/DashboardCardPanel"
import { Meta } from "../components/Meta"

export const DashboardPage = () => {

  return (
    <Layout>
      <Meta 
        title= 'Dashboard'
        description= 'A little About Us.'
        keywords= 'Daycare 5 star'
        url={`${window.location.href}`}
      />
      <DashboardCardPanel />
    </Layout>
  )
}
