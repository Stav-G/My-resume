import React from 'react';
import HeaderButton from '../layouts/HeaderButton'

const Header = () => {

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }
    document.documentElement.classList.add('dark-mode')

    const toggleDarkMode = (e) =>  {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        }


    return (
        <div>
            <div className="Header">
                <h1>Stav Gallula</h1>
                <label className="switch">
                <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <p data-aos="fade-up" data-aos-duration="3000" className="line-1 ">
            <p>Highly motivated, fast learning, solving problems, and hard-working student in my final year of Computer Science degree. Passionate for data and code with proven tech skills and organizational. 
I'm Looking for my first challenge in the tech industry.</p>
           
            </p>
          
            <HeaderButton/>
            </div>
            <img id="not-dark" className="gtp inverse-dark animatePic" onClick={scrollTo} alt="Contact Me" title="Contact Me"  src="img/profile.png"></img>
        </div>
    )
    
}

export default Header;