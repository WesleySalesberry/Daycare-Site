import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const DashboardCard = ({ count, title, hasLink }) => {
  return (
    <Card className="dashboard-card text-center" border={count > 0 ? "danger" : "primary" }>
      <Card.Header className={count > 0 ? "bg-danger" : "bg-primary" }>
        {
          hasLink ? 
            <>
              <Link to="/message">
               { title }
              </Link>
            </>
          :
            <>{title}</>
        }
      </Card.Header>
      <Card.Body>
        <Card.Text>
            {count > 1 ? `${count} Messages` : `${count} Message`}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}