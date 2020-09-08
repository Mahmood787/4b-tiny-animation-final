import React, { useEffect, useState } from 'react'
import Aboutimg from '../images/about-img.png';


const Section = () => {  
  const [scrolled, setScroll]=useState(false);
useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY>150){
            setScroll(true)
        }
        else{
            setScroll(false)
        } 
    })
},[])  

    return (
        <>    
            <div className="section-1 "  >
            <div className={scrolled ? "section-1-text section-1-anim-text":"section-1-text"} >
                <h1>We Are</h1>
                <p>
                    A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, Product Management or Service Delivery
                </p>
                <h4>About Us</h4>
            </div>
            <div className={scrolled ? "section-1-pic section-1-anim-pic" : "section-1-pic"}   >
              <img src={Aboutimg}  />
            
            </div>
        
        </div>
      </> 
    )
}

export default Section
