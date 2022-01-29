import {useState} from 'react'
import {useEffect} from 'react'

function PreviewAvatar() {
    const [avatar,setAvatar] = useState('');
    useEffect(()=>{
        // cleanup avatar
        return()=>{
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    },[avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
    
    return (
        <div>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar &&(<img
             width= "80%"
             src={avatar.preview}
             alt={avatar.name}
             />)}
        </div>
    )
}
export default PreviewAvatar