import React from 'react'
import "../footer.css"
import github from "../github.png"
import linkedin from "../linkedin.png"
import twitter from "../x.png"
import whatsapp from "../whatsapp.png"

const Footer = () => {
  return (
    <div className='footer_container'>
    
    <div className="line">
    </div>
    <div className="info_container">
      <div>© 2024 Kevin Irungu. All Rigths Reserved.</div>
      <div className="socials">
      <a href="/"> <img src={github} alt="github logo" style={{width: "2.5rem", height: "2.5rem"}}></img> </a>
      <a href="/"><img src={linkedin} alt="linkedin logo" style={{width: "2.5rem", height: "2.5rem"}}></img></a>
      <a href="/"><img src={twitter} alt="twitter logo" style={{width: "2.5rem", height: "2.5rem"}}></img></a>
      <a href="/"><img src={whatsapp} alt="whatsapp logo" style={{width: "2.5rem", height: "2.5rem"}}></img></a>
  
      </div>

    </div>

      
      </div>
  )
}

export default Footer