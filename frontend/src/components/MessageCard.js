import Card from 'react-bootstrap/Card';

export const MessageCard = ({title, date, message}) => {
  return (
    <Card className="messageCard shadow">
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Subtitle>{ date }</Card.Subtitle>
        <Card.Text>{ message }</Card.Text>
      </Card.Body>
    </Card>
  )
}