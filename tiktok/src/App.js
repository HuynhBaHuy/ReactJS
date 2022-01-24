import {useState} from 'react'

const orders = [100,200,300]
const gifts = ['CPU core I9','RGB Keyboard','RAM 32GB RGB','27Inches 144HZ Sony Screen']

// Response from API
const courses = [
  {
    id:1,
    name:'HTML,CSS'
  },{
    id:2,
    name:'Javascript'
  },{
    id:3,
    name:'ReactJS'
  }
]
function App() {
  // random counter
  const [counter, setCounter] = useState(()=>{
    const total = orders.reduce((total, order) => total + order)
    console.log(total)
    return total
  })
  
  const handleIncrease = ()=>{
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)    
    setCounter(prevCounter => prevCounter+1)
  }

  //form => demo two-way binding
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [checkedRadio,setCheckedRadio] = useState(1)
  const [checkedCheckbox,setCheckedCheckbox] = useState([])
  const handleSubmit = ()=>{
    //call api
    console.log({
      name,email,checkedRadio,checkedCheckbox
    })
  }
  console.log(checkedCheckbox)
  const handleCheckedCheckbox = (id)=>{
    setCheckedCheckbox(prev=>{
      const isChecked = checkedCheckbox.includes(id)
      if(isChecked){
        // uncheck
        return checkedCheckbox.filter(item=> item!==id)
      }
      else{
        return [
          ...prev,
          id
        ]
      }
  })
  }

  // random gifts
  const [gift,setGift] = useState()
  const handleGetGift = ()=>{
    setGift(prevGift=>{
      let newGift = gifts[Math.floor(Math.random()*gifts.length)]
      while (newGift === prevGift){
        newGift = gifts[Math.floor(Math.random()*gifts.length)]
      }
      return newGift;
    })
  }
  return (
    <div className="App" style={{padding:20}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease} >Increase</button>
      <h1>Form</h1>
      <input 
        placeholder="Enter your email"
        onChange={e=>setEmail(e.target.value)}
      />
      <p>Email: {email||'Chưa nhập email'}</p>
      <input 
        placeholder="Enter your name"
        onChange={e=>setName(e.target.value)}
      />
      <p>Name: {name||'Chưa nhập tên'}</p>
      {courses.map(course=>(
        <div key={course.id}>
          <input
            type="radio"
            checked={checkedRadio === course.id}
            onChange={e=>setCheckedRadio(course.id)}
          />
          <label onClick={e=>setCheckedRadio(course.id)}>{course.name}</label>
        </div>
      ))}
      {courses.map(course=>(
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checkedCheckbox.includes(course.id)}
            onClick={e=>handleCheckedCheckbox(course.id)}
          />
          <label onClick={e=>handleCheckedCheckbox(course.id)}>{course.name}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <h1>{gift||'Chưa có phần thưởng'}</h1>
      <button onClick={handleGetGift}>Get gift</button>

    </div>
  );
}

export default App;
