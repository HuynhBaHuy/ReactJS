import './App.css'
import {useState} from 'react'
import List from './Component/List';
import ApiContent from './Component/ApiContent'
import Gifts from './Component/RandomGift'
import Form from './Component/Form'
import Counter from './Component/Counter'
import CountDown from './Component/CountDown'
import Avatar from './Component/Avatar'
import ChatApp from './Component/Chat'
import Product from './Component/Product'
import UpDown from './Component/Control'
import ToDoApp from './Component/ToDo'
import Theme from './Component/ThemeComponent'
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
  const [showThemes,setShowThemes] = useState(false);
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
      <button onClick={()=>(setShowThemes(!showThemes))}>Toggle themes</button>
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
      {showThemes && <Theme />}
    </div>
  );
}

export default App;
