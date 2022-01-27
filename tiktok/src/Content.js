import {useEffect,useState} from 'react'

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - it dung
// - Gọi callback sau khi component thêm element vào DOM 
// => đoạn thẻ div được chạy trước rồi sau đó mới chạy callback
// 2. useEffect(callback,[])
// - Chỉ gọi callback một lần sau khi component mounted lần đầu tiên, không gọi lại như trên
// 3. useEffect(callback,[deps])
// - Callback sẽ được gọi lại mỗi khi dependencies thay đổi

//--------
// 1. callback luôn được gọi sau khi component mounted
// 2. Cleanup function trước được gọi trước khi component unmounted
// 3.  Cleanup function luôn được gọi trước khi callback trừ lần mounted đầu tiên

const tabs = ['posts','todos','albums','comments']

function Content() {

    const [title,setTitle] = useState('');
    const [posts,setPosts] = useState([]);
    const [type,setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);
    //useEffect(callback,[deps])
    // call API
    useEffect(()=>{
        // set title cho page   
        document.title = title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(res=>setPosts(res))
    },[type])

    // scroll
    useEffect(()=>{

        const handleScroll = ()=>{
            if(window.scrollY>=200){
                setShowGoToTop(true);
            }else{
                setShowGoToTop(false);
            }
        }
        window.addEventListener('scroll',handleScroll)

        // Cleanup function
        return ()=>{
            console.log('Unmounting...')
            window.removeEventListener('scroll',handleScroll)
            console.log('Remove event scroll listener')
        }
    },[])
    return(
        <div>
            {tabs.map((tab,index)=>(
                <button 
                    key={index}
                    style = {type=== tab?{color:'#fff',background:'#333'}:{}}
                    onClick={()=>setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input 
                value={title}
                onChange={e=>setTitle(e.target.value)}
            />
            <ul>
                {posts.map((post)=>(
                    <li key={post.id}>
                        {post.title||post.name}
                    </li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style = {{
                        position: 'fixed',
                        right:20,
                        bottom:20
                    }}
                >
                    Go to Top
                </button>
            )}
        </div>
    )
}

export default Content