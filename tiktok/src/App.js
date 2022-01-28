import {useState} from 'react'
import ToDoListComponent from './TodoList';
import ContentCallApi from './Content.js'
import Gifts from './Gift.js'
import Form from './Form.js'
import Counter from './Counter.js'
import CountDown from './CountDown.js'
import PreviewAvatar from './PreviewAvatar.js'
import ChatApp from './ChatApp.js'
import Product from './Product.js'
import UpDown from './UpDown.js'
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
      {showIncrease && <Counter />}
      {showForm && <Form />}
      {showRandomGift && <Gifts />}
      {showToDoList && <ToDoListComponent />}
      {showCallApi&&<ContentCallApi />}
      {showCountDown && <CountDown />}
      {showPreview && <PreviewAvatar />}
      {showChatApp && <ChatApp />}
      {showProduct && <Product />}
      {showUpDown && <UpDown />}
    </div>
  );
}

export default App;
