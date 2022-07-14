import { Layout } from "../components/container/Layout"
import { Meta } from "../components/Meta"

export const AboutPage = () => {
  return (
    <Layout>
      <Meta 
        title= 'About Us'
        description= 'A little About Us.'
        keywords= 'Daycare 5 star'
        url={`${window.location.href}`}
      />
      <p>Hello from about</p>
    </Layout>
  )
}