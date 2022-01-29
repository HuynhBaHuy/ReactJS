import { useRef,useEffect } from 'react'
import Video from './Video'

function Media() {
    const VideoComponentRef = useRef()

    useEffect(() => {
        console.log(VideoComponentRef.current)
    });
    const handlePlay = ()=>{
        VideoComponentRef.current.play()
    }
    const handlePause = ()=>{
        VideoComponentRef.current.pause()
    }
    return(
        <div>
            <Video
                ref={VideoComponentRef}
             />
            <br />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default Media