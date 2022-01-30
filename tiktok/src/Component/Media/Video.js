import {forwardRef,useImperativeHandle,useRef} from 'react'
import clsx from 'clsx'

import video1 from '../../videos/video-1.mp4'
import styles from './Media.module.scss'
function Video(props,ref){
    const videoRef = useRef()
    useImperativeHandle(ref,()=>({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))

    return (
        <video
            className = {clsx(styles.video,styles.container)}
            ref={videoRef}
            src = {video1}
        />
    )
}
export default forwardRef(Video)