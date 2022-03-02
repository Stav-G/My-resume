import React from 'react'
import { contact, section5Title, social } from '../../profile'

const Contact = () => {

    return (
        <div className="parallax">
                <div  className="git-form">
                    <>
                <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                </div>
                </>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
                    <form method="POST" action="file:///C:/Users/Stav/Downloads/Stav_Gallula_CV%20(7).pdf">
                        <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                        <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                        <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                        <textarea id="msg" name="message" placeholder="Message" required></textarea>
                        <button style={{cursor: 'pointer'}} type="submit"><label style={{cursor: 'pointer'}} id="not-dark">Send Message</label></button>
                    </form>
                </div>
                <div className="col-12 col-sm-6 half">
                <div className="d-flex justify-content-center align-items-center flex-column mt-0 mt-md-5">
                  <div className="inline-block">
                    {social.linkedin && <a title="Visit Linkedin profile" target="_blank" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.github && <a title="Visit GitHub profile" target="_blank" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}
                  </div>
                    {social.resume && <a title="Download Resume" target="_blank" href={social.resume} download><i className="fas fa-download"></i></a>}
                </div>
                    <p className="lead">
                        <span className="leadInfo"> <a target="_blank" href={"tel:"+contact.phone}>{contact.phone} </a> </span>   
                        <span className="leadInfo"> <a target="_blank" href={"mailto:"+contact.mail}>{contact.mail}</a>  </span> 
                        <span className="leadInfo"> <a target="_blank" href={"https://waze.com/ul?q="+contact.city} >{contact.city}</a> </span>       
                    </p>
              
                </div>
            </div>
            </div>
        </div>
        </div>
    )
    
}

export default Contact
