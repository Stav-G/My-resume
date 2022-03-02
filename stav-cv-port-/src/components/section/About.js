import React from 'react'
import Skills from '../layouts/Skills'
import { prevJobs, skillsBar, section2Exp, section2Edu, education, section2Vol,volunteering, section2Skill, skills } from '../../profile'

function createSkill(skillId) {
    return (
        <Skills 
        key={skillId.id} 
        faClass={skillId.faClass} 
        label={skillId.name}             
        /> 
    );
  }

function About(){
    return(
    <div>
        <div id="about" className="effect2">
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="row">
            <div className="row">
            <div className="col-12  d-md-block About-title">
                 <h1>{section2Exp}</h1>
            </div>
            {prevJobs.map(jobItem => (
            <div className="col-12   about">
                <div className="About-title-box">
                <h1 id="About" className="red-line">{jobItem.workPlace}</h1>
                </div>
                {jobItem.paragraph.map(singleParagraph => (   
                    <p className="lead about-text">                
                    {singleParagraph}  
                    </p> 
                    ))}                            
            </div>
            ))}            
            </div>
            </div>

            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="row">
            <div className="row">
            <div className="col-12  d-md-block About-title">
                 <h1>{section2Edu}</h1>
            </div>
            {education.map(educationItem => (
            <div className="col-12   about">
                <div className="About-title-box">
                <h1 id="About" className="red-line">{educationItem.place}</h1>
                </div>
                {educationItem.details.map(singleDetail => (   
                    <p className="lead about-text">                
                    {singleDetail}  
                    </p> 
                    ))}                            
            </div>
            ))}            
            </div>
            </div>

            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="row">
            <div className="row">
            <div className="col-12  d-md-block About-title">
                 <h1>{section2Vol}</h1>
            </div>
            {volunteering.map(volunteeringItem => (
            <div className="col-12   about">
                <div className="About-title-box">
                <h1 id="About" className="red-line">{volunteeringItem.place}</h1>
                </div>
                {volunteeringItem.details.map(singleDetail => (   
                    <p className="lead about-text">                
                    {singleDetail}  
                    </p> 
                    ))}                            
            </div>
            ))}            
            </div>
            </div>

            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="row">
            <div className="row">
            <div className="col-12  d-md-block About-title">
                 <h1>{section2Skill}</h1>
            </div>
            {skills.map(skillItem => (
            <div className="col-12   about">
                <div className="About-title-box">
                <h1 id="About" className="red-line">{skillItem.area}</h1>
                </div>
                {skillItem.details.map(detailItem => (   
                    <p className="lead about-text">                
                    {detailItem}  
                    </p> 
                    ))}                            
            </div>
            ))}            
            </div>
            </div>

            <div id="Skills"> 
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map(createSkill)}
                </div> 
            </div>
        </div>
    </div>

    )
}



export default About
