import './App.css';
import {useEffect, useState} from 'react'
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Pusher from 'pusher-js'
import axios from './axios'

function App() {

  const [messages,setMessages] = useState([]);

  //useEffect for fetching

  useEffect(()=>{
    axios.get('/messages/sync')
      .then(response=>{
        setMessages(response.data)
      })
  }, [])

  useEffect(()=>{
    const pusher = new Pusher('1da9a361a566d7dc83bc', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      setMessages([...messages, newMessage])
    });

    return ()=>{
      channel.unbind_all(); // to unbind so it will no listen to all messages everytime, only listen new message
      channel.unsubscribe();
    };

  }, [messages]) //add message here so it updates with the message

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
