import { Layout } from "../components/container/Layout"
import { Meta } from '../components/Meta'
import { MessageDisplay } from '../components/Message/MessageDisplay'

import Col from "react-bootstrap/Col"

export const MessagesPage = () => {
  return (
    <Layout>
      <Meta
        title="Messages"
        description= 'Current Messages'
        url={`${window.location.href}`}
      />
      <div className="text-center my-3">
        <h3>Current Messages</h3>
      </div>

      <MessageDisplay />

    </Layout>
  )
}