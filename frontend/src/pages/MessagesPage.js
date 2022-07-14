import { Layout } from "../components/container/Layout"
import { MessageCardLayout } from "../components/container/MessageCardLayout"
import { MessageCard } from "../components/MessageCard"
import { Meta } from '../components/Meta'

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
      

      <MessageCardLayout>
        <Col>
          <MessageCard
            title="Message One"
            date="11/11/1098"
            message="a studry message"
          />
        </Col>
        <Col>
          <MessageCard
            title="Message Two"
            date="11/11/1980"
            message="a studry message"
          />
        </Col>
      </MessageCardLayout>
    </Layout>
  )
}