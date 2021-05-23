import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <h1>whatsapp clone</h1>

      {/*Sidebar */}
      <Sidebar/>

      {/*Chat*/}
      <Chat/>
    </div>
  );
}

export default App;
