import {useState} from 'react'
import ToDoListComponent from './TodoList';
import ContentCallApi from './Content.js'
import Gifts from './Gift.js'
import Form from './Form.js'
import Counter from './Counter.js'
import CountDown from './CountDown.js'
import PreviewAvatar from './PreviewAvatar.js'
function App() {
  const [showIncrease,setShowIncrease] = useState(false);
  const [showForm,setShowForm] = useState(false);
  const [showRandomGift,setShowRandomGift] = useState(false);
  const [showToDoList,setShowToDoList] = useState(false);
  const [showCallApi,setShowCallApi] = useState(false);
  const [showCountDown,setShowCountDown] = useState(false);
  const [showPreview,setShowPreview] = useState(false);
  return (
    <div className="App" style={{padding:20}}>
      
      <button onClick={()=>(setShowIncrease(!showIncrease))}>Toggle Counter</button>
      <button onClick={()=>(setShowForm(!showForm))}>Toggle Form</button>
      <button onClick={()=>(setShowRandomGift(!showRandomGift))}>Toggle random gift</button>
      <button onClick={()=>(setShowToDoList(!showToDoList))}>Toggle to do list</button>
      <button onClick={()=>(setShowCallApi(!showCallApi))}>Toggle api content</button>
      <button onClick={()=>(setShowCountDown(!showCountDown))}>Toggle count down</button>
      <button onClick={()=>(setShowPreview(!showPreview))}>Toggle PreviewAvatar</button>
      {showIncrease && <Counter />}
      {showForm && <Form />}
      {showRandomGift && <Gifts />}
      {showToDoList && <ToDoListComponent />}
      {showCallApi&&<ContentCallApi />}
      {showCountDown && <CountDown />}
      {showPreview && <PreviewAvatar />}
    </div>
  );
}

export default App;
