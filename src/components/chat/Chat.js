import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MicNone, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Chat.css'

function Chat({messages}) {
    console.log(messages)

    const sendMessage = () => {

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
                    <input placeholder="Type a message" type="text"/>
                    <button type="submit">Send a message</button>
                </form>
                <MicNone/>
            </div>
        </div>
    )
}

export default Chat
