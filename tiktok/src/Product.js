import {useState,useMemo,useRef} from 'react'

function Product(){
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [products,setProducts] = useState([])
    const nameRef = useRef()
    const handleSubmit = ()=>{
        setProducts(prevProducts =>[...prevProducts, {name, price:parseInt(price)}])
        setName('');
        setPrice('');
        nameRef.current.focus();
    }
    const total = useMemo(()=>{
        const result = products.reduce((result,prod)=> 
            {
                console.log('re-calculating') 
                return result + prod.price
            }
        ,0)
    return result;
    },[products])
    return (
        <>
            <input
                ref = {nameRef}
                value ={name}
                placeholder = 'Enter name ...'
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input 
                value ={price}
                placeholder = 'Enter price ...'
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total: {total}
            <ul >
                {products.map((product,index) =>(
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>

        </>
    )
}
export default Product