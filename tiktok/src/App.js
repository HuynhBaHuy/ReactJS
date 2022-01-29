import {useState} from 'react'
import List from './List';
import ApiContent from './ApiContent'
import Gifts from './RandomGift'
import Form from './Form'
import Counter from './Counter'
import CountDown from './CountDown'
import Avatar from './Avatar'
import ChatApp from './Chat'
import Product from './Product'
import UpDown from './Control'
import ToDoApp from './ToDo'

function App() {
  const [showIncrease,setShowIncrease] = useState(false);
  const [showForm,setShowForm] = useState(false);
  const [showRandomGift,setShowRandomGift] = useState(false);
  const [showToDoList,setShowToDoList] = useState(false);
  const [showCallApi,setShowCallApi] = useState(false);
  const [showCountDown,setShowCountDown] = useState(false);
  const [showPreview,setShowPreview] = useState(false);
  const [showChatApp,setShowChatApp] = useState(false);
  const [showProduct,setShowProduct] = useState(false);
  const [showUpDown,setShowUpDown] = useState(false);
  const [showToDo,setShowToDo] = useState(false);
  return (
    <div className="App" style={{padding:20}}>
      
      <button onClick={()=>(setShowIncrease(!showIncrease))}>Toggle Counter</button>
      <br />
      <button onClick={()=>(setShowForm(!showForm))}>Toggle Form</button>
      <br />
      <button onClick={()=>(setShowRandomGift(!showRandomGift))}>Toggle random gift</button>
      <br />
      <button onClick={()=>(setShowToDoList(!showToDoList))}>Toggle to do list</button>
      <br />
      <button onClick={()=>(setShowCallApi(!showCallApi))}>Toggle api content</button>
      <br />
      <button onClick={()=>(setShowCountDown(!showCountDown))}>Toggle count down</button>
      <br />
      <button onClick={()=>(setShowPreview(!showPreview))}>Toggle PreviewAvatar</button>
      <br />
      <button onClick={()=>(setShowChatApp(!showChatApp))}>Toggle chat app</button>
      <br />
      <button onClick={()=>(setShowProduct(!showProduct))}>Toggle product</button>
      <br />
      <button onClick={()=>(setShowUpDown(!showUpDown))}>Toggle up down</button>
      <br />
      <button onClick={()=>(setShowToDo(!showToDo))}>Toggle to do</button>
      <br />
      {showIncrease && <Counter />}
      {showForm && <Form />}
      {showRandomGift && <Gifts />}
      {showToDoList && <List />}
      {showCallApi&&<ApiContent />}
      {showCountDown && <CountDown />}
      {showPreview && <Avatar />}
      {showChatApp && <ChatApp />}
      {showProduct && <Product />}
      {showUpDown && <UpDown />}
      {showToDo && <ToDoApp />}
    </div>
  );
}

export default App;
