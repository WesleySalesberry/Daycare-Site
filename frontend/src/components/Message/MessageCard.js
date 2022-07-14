import Card from 'react-bootstrap/Card';
import moment from 'moment'
import { FaTrashAlt} from "react-icons/fa";
import Message from '../../API/Message';

export const MessageCard = ({ itm, handleClick }) => {
  const messageID = itm._id
  
  // const handleDelete = async (messageID) => await Message.privateMessage.deleteMessage(messageID)
  
  return (
    <Card className="messageCard shadow">
      
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{itm.subject}</Card.Title>
          <Card.Title
            className='cursor-pointer' 
            onClick={() => handleClick(messageID)}
          ><FaTrashAlt /></Card.Title>
        </div>
        
        <Card.Subtitle>Sender: { itm.name }</Card.Subtitle>
        <Card.Subtitle
          className="py-2"
        >
          Email: <a className="text-decoration-none" href={`mailto:${itm.email}`}>{ itm.email }</a>
        </Card.Subtitle>
        <Card.Subtitle>{ moment(itm.date).format('dddd, MMMM DD YYYY') }</Card.Subtitle>
        <Card.Text>{ itm.message }</Card.Text>
      </Card.Body>
    </Card>
  )
}