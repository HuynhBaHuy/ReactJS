import {useState} from 'react'
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
function Form(){
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
    return (
        <div>
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
            onChange={e=>setCheckedRadio(course.id)}
            checked={checkedRadio === course.id}
          />
          <label onClick={e=>setCheckedRadio(course.id)}>{course.name}</label>
        </div>
      ))}
      {courses.map(course=>(
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checkedCheckbox.includes(course.id)}
            onChange={e=>handleCheckedCheckbox(course.id)}
          />
          <label onClick={e=>handleCheckedCheckbox(course.id)}>{course.name}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Form