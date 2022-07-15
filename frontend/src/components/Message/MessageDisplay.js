import { useEffect, useState } from 'react'

import { MessageCardLayout } from '../container/MessageCardLayout'
import { MessageCard } from './MessageCard'
import Message from '../../API/Message';
import { Alert } from 'react-bootstrap';

export const MessageDisplay = () => {
  const [ messages, setMessages ] = useState([])
  const [ count, setCount ] = useState(0);
  const [response, setResponse ] = useState('')
  const [error, setError ] = useState('')

  const getMessage = async () => {
    const res = await Message.privateMessage.allMessages();
    setMessages(res.data)
    setCount(res.count)
    
  }

  useEffect(() => {
    getMessage()
  },[])

  

  const handleDelete = async (messageID) => {
    const res = await Message.privateMessage.deleteMessage(messageID)
    setResponse(res.data)
    getMessage();
  }

  setTimeout(() => {
    setResponse('')
  }, 5000)

  if(messages){
    return (
      <MessageCardLayout>
        {
          response ? 
            <Alert variant="success" className="text-center">
                { response }
            </Alert>
          :
            ""
        }
        
        {/* <div className='text-center bg-success rounded'>
          <h4>{ response }</h4>
        </div> */}
        {
          messages.map(itm => (
            <MessageCard
              key={itm._id}
              itm={itm}
              handleClick={handleDelete}
            />
          ))
        }
      </MessageCardLayout>
    )
  }else if(error){
    console.log(error)
  }else {
    console.log('Loading')
  }
}