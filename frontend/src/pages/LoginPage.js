import { Layout } from "../components/container/Layout"
import { Login } from "../components/Forms/Login"
import { Meta } from "../components/Meta"

export const LoginPage = () => {
  return (
    <Layout>
      <Meta 
        title= 'Admin Login'
        description= ''
        keywords= 'Daycare 5 star'
        url={`${window.location.href}`}
      />
      <Login />
    </Layout>
  )
}