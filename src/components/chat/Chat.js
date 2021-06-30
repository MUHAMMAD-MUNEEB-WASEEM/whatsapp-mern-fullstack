import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MicNone, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, {useState} from 'react'
import axios from '../../axios'
import './Chat.css'

function Chat({messages}) {

    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault(); //avoiding from refresh

        
    await axios.post('/messages/sync',{
        "message": input,
        "name": "muneeb",
        "timestamp": "Just now!",
        "recieved": true,
    });

    setInput('');
    }

    return (
        <div className="chat">
            
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) =>(
                    <p className={`chat__message ${message.recieved && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                        
                        {message.message}
                        
                        <span className="chat__timestamp">
                            {message.timestamp }
                        </span>
                    </p>
                ))}

            </div>

            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}placeholder="Type a message" type="text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicNone/>
            </div>
        </div>
    )
}

export default Chat
