import { useImperativeHandle,useRef,useEffect } from 'react'
import Video from './Video'

function Media() {
    const videoRef = useRef()

    useEffect(() => {
        console.log(videoRef.current)
    });
    const handlePlay = ()=>{
        videoRef.current.play()
    }
    const handlePause = ()=>{
        videoRef.current.pause()
    }
    return(
        <div>
            <Video
                ref={videoRef}
             />
            <br />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default Media