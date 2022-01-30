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
import ToDoGlobals from './Component/ToDoGlobals'
import Media from './Component/Media'
import Button from './Component/Button'
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
  const [showToDoGlobal,setShowToDoGlobal] = useState(false);
  const [showMedia,setShowMedia] = useState(false);
  return (
    <div className="App" style={{padding:20}}>
      
      <Button onClick={()=>(setShowIncrease(!showIncrease))}>Toggle Counter</Button>
      <Button onClick={()=>(setShowForm(!showForm))}>Toggle Form</Button>
      <Button onClick={()=>(setShowRandomGift(!showRandomGift))}>Toggle random gift</Button>
      <Button onClick={()=>(setShowToDoList(!showToDoList))}>Toggle to do list</Button>
      <Button onClick={()=>(setShowCallApi(!showCallApi))}>Toggle api content</Button>
      <Button onClick={()=>(setShowCountDown(!showCountDown))}>Toggle count down</Button>
      <Button onClick={()=>(setShowPreview(!showPreview))}>Toggle PreviewAvatar</Button>
      <Button onClick={()=>(setShowChatApp(!showChatApp))}>Toggle chat app</Button>
      <Button onClick={()=>(setShowProduct(!showProduct))}>Toggle product</Button>
      <Button onClick={()=>(setShowUpDown(!showUpDown))}>Toggle up down</Button>
      <Button onClick={()=>(setShowToDo(!showToDo))}>Toggle to do</Button>
      <Button onClick={()=>(setShowThemes(!showThemes))}>Toggle themes</Button>
      <Button onClick={()=>(setShowToDoGlobal(!showToDoGlobal))}>Toggle to do global</Button>
      <Button primary onClick={()=>(setShowMedia(!showMedia))}>Toggle media</Button>
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
      {showToDoGlobal && <ToDoGlobals />}
      {showMedia && <Media />}
    </div>
  );
}

export default App;
