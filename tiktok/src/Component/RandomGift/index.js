import {useState} from 'react'
const gifts = ['CPU core I9','RGB Keyboard','RAM 32GB RGB','27Inches 144HZ Sony Screen']
function Gifts(){
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
    return(
        <div>
            <h1>{gift||'Chưa có phần thưởng'}</h1>
            <button onClick={handleGetGift}>Get gift</button>
        </div>
    )
}
export default Gifts