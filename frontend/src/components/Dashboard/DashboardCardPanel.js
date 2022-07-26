import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { DashboardCard } from "../Cards/DashboardCards"
import { useEffect, useState } from "react"
import Dashboard from "../../API/Dashboard"

export const DashboardCardPanel = () => {
  const [ count, setCount ] = useState(0)
  const getCount = async () => {
    const { count } = await Dashboard.dashboard.messageCount();
    setCount(count)
  }

  useEffect(() => {
    getCount()
  })

  return (
    <Row xs={1} md={1} className="gy-4 d-flex justify-content-center my-2">
      <Col md="auto">
        <DashboardCard
          title={"Messages"}
          count={count}
          hasLink={true}
        />
      </Col>
      <Col md="auto">
        <DashboardCard
          title={"Downloads"}
          count={2}
          hasLink={false}
        />
      </Col>
      <Col md="auto">
        <DashboardCard
          title={"Messages"}
          count={2}
          hasLink={false}
        />
      </Col>
    </Row>
  )
}