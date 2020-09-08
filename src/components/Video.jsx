import React from 'react'
import useWebAnimations, {bounce,backInRight} from '@wellyshen/use-web-animations';
import Image from '../images/overlay.png'
import video from '../images/video.mp4'


const Video = () => {
    const rect= useWebAnimations({
        keyframes:[
            { transform: 'rotate(0deg)' }, 
            { transform: 'rotate(360deg)'}  
        ],
        timing:{
            duration: 5000,
            iterations: Infinity,
        }
    })
    return (
        <div className="video-sec">
            <div className="video-sec-text">
                <svg id="box-anim" ref={rect.ref}  viewBox = " 0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" height="9" width="9"  rx="1" stroke="yellow" strokeWidth="1" fill="none"></rect> 
                </svg> 
                <h1>Zapare <br/>Advantages.</h1>
                <ul>
                    <li> <i className="fab fa-affiliatetheme"></i>US experienced management team </li>
                    <li><i className="fab fa-affiliatetheme"></i>Secure work environment </li>
                    <li><i className="fab fa-affiliatetheme"></i>Compliance driven process </li>
                    <li><i className="fab fa-affiliatetheme"></i>Data driven quality review </li>
                    <li><i className="fab fa-affiliatetheme"></i>  Workforce management</li>
                    <li><i className="fab fa-affiliatetheme"></i>24x7 coverage </li>
                </ul>
              
            </div>
            <div className="video-and-image">
                <div className="video-sec-video">
                <video autoPlay={true} loop={true} muted={true} id="video" className="full" poster="img/poster.jpg">
                    <source src={video} type="video/mp4" />
                </video>
                </div>
                <div className="video-sec-img">
                    <img src={Image} alt=" image"/>
                </div>
            </div>

        </div>
    )
}

export default Video
