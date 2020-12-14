import React from 'react'
import useWebAnimations, {bounce,backInRight} from '@wellyshen/use-web-animations';
import { useEffect } from 'react';
import { useState } from 'react';
import Aos from "aos"
import 'aos/dist/aos.css'

const Service = () => {
useEffect(()=>{
    Aos.init({});
},[])
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
// Animation for Box
const box= useWebAnimations({
    autoPlay:false,
    keyframes:[{transform: 'scale(.8)', opacity:'0', visiblity:"hidden"},{transform:'scale(1)', opacity:'1', visiblity:"hidden"}],
    timing:{iterations:1, duration: 1000}
})
const box2= useWebAnimations({
    autoPlay:false,
    keyframes:[{transform: 'scale(.8)', opacity:'0', visiblity:"hidden"},{transform:'scale(1)', opacity:'1', visiblity:"hidden"}],
    timing:{iterations:1, duration: 1000, delay:1000}
})
const box3= useWebAnimations({
    autoPlay:false,
    keyframes:[{transform: 'scale(.8)', opacity:'0', visiblity:"hidden"},{transform:'scale(1)', opacity:'1', visiblity:"hidden"}],
    timing:{iterations:1, duration: 1000, delay:1500}
})
const box4= useWebAnimations({
    autoPlay:false,
    keyframes:[{transform: 'scale(.8)', opacity:'0', visiblity:"hidden"},{transform:'scale(1)', opacity:'1', visiblity:"hidden"}],
    timing:{iterations:1, duration: 1000, delay:2000}
})
const box5= useWebAnimations({
    autoPlay:false,
    keyframes:[{transform: 'scale(.8)', opacity:'0', visiblity:"hidden"},{transform:'scale(1)', opacity:'1', visiblity:"hidden"}],
    timing:{iterations:1, duration: 1000, delay:2500}
})
const box6= useWebAnimations({
    autoPlay:false,
    keyframes:[{transform: 'scale(.8)', opacity:'0', visiblity:"hidden"},{transform:'scale(1)', opacity:'1', visiblity:"hidden"}],
    timing:{iterations:1, duration: 1000, delay:3000}
})
const box7= useWebAnimations({
    autoPlay:false,
    keyframes:[{transform: 'scale(.8)', opacity:'0', visiblity:"hidden"},{transform:'scale(1)', opacity:'1', visiblity:"hidden"}],
    timing:{iterations:1, duration: 1000, delay:3500}
})
const [sta, setSta]=useState(false)
    if(sta){
        box.getAnimation().play();
        box2.getAnimation().play();
        box3.getAnimation().play();
        box4.getAnimation().play();
        box5.getAnimation().play();
        box6.getAnimation().play();
        box7.getAnimation().play();
    }else{}
    return (
        <div className="services">
         <div className="service-left animate__animated ">
                <svg xmlns="http://www.w3.org/2000/svg" id="explore_shape" viewBox="0 0 1040.227 869.574">
                    <g id="Group_92" data-name="Group 92" transform="translate(104.451 -1977.649)">
                    <path id="Path_459" data-name="Path 459" d="M628.347,840.97C220.508,807.588-93.712,576.52,25.589,349.374S394.907,6.114,571.011.037s444.734,737.129,435.554,788.2S1036.186,874.354,628.347,840.97Z" transform="translate(902.344 2832.217) rotate(180)" fill="#e1eefc"></path>
                    <path id="Path_486" data-name="Path 486" d="M639.02,855.254C224.254,821.3-95.3,586.312,26.023,355.308S401.614,6.218,580.71.038,1033,749.687,1023.662,801.623,1053.786,889.2,639.02,855.254Z" transform="translate(935.125 2846.723) rotate(180)" fill="none" stroke="#d4e5f7" strokeWidth="1"></path>
                    <g id="Rectangle_56" data-name="Rectangle 56" transform="translate(179.131 2692.981) rotate(180)" fill="none" stroke="#638db9" strokeWidth="11" opacity="0.193">
                        <rect width="50.953" height="50.953" rx="25.477" stroke="none"></rect>
                        <rect x="5.5" y="5.5" width="39.953" height="39.953" rx="19.977" fill="none"></rect>
                    </g>
                    </g>
                </svg>
                <svg id="box-anim" ref={rect.ref}  viewBox = " 0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" height="9" width="9"  rx="1" stroke="yellow" strokeWidth="1" fill="none"></rect> 
                </svg>
            <div className="boxes">
                    <div className="box-left">
                        <span data-aos="fade-up" className="box white-bg" > <i>R</i> <p>Revenue cycle management</p></span>
                        <span data-aos="fade-up" className="box white-bg" ref={box2.ref} > <i>S</i> <p>Staff Augmentation</p></span>
                        <span data-aos="fade-up" className="box blue-bg" ref={box3.ref}> <i>R</i> <p>Payment Posting</p></span>
                    </div>
                    <div  className="box-center">
                        <span data-aos="fade-up" className="box blue-bg" ref={box4.ref}> <i>R</i> <p>Revenue cycle management</p></span>
                        <span data-aos="fade-up" className="box transparent-bg" ref={box5.ref}> <i>S</i> <p>Staff Augmentation</p></span>
                        <span data-aos="fade-up" className="box yellow-bg" ref={box6.ref}> <i>R</i> <p>Payment Posting</p></span>
                    </div>
                    <div className="box-right">
                        <span data-aos="fade-up" className="box white-bg" ref={box7.ref}> <i>R</i> <p>Revenue cycle management</p></span>
                        <span data-aos="fade-up" className= "small-box white-bg"></span>
                    </div>
            </div>
            </div>
            <div className="services-right">
                <h1>Services</h1>
                <p >We offer customized digital services and scalable operational strategies to prepare your Organization ride through the waves of uncertainty in the form of disruptive technology and government regulations so you can deliver accelerated and cost-effective services for your consumers</p>  
                <a >Explore Services</a>
            </div> 
        </div>
    )
}
export default Service
