import React from 'react'
import './howItWorks.css'
const HowItWorks = () => {
    const steps = [
        {
          number: 1,
          title: "Subscription",
          description: "A very affordable subscription fee grants students access to the platform's resources.",
        },
        {
          number: 2,
          title: "Course Selection",
          description: "Subscribers can choose from a variety of courses aligned with different exams and educational goals.",
        },
        {
          number: 3,
          title: "Access to Content",
          description: "Once subscribed, students gain access to comprehensive course materials, including video lectures, study notes, practice tests, and mock exams.",
        },
        {
          number: 4,
          title: "Expert Guidance",
          description: "Students can interact with subject matter experts through Q&A sessions, forums, or personalized mentorship.",
        },
        {
          number: 5,
          title: "Personalized Learning",
          description: "The platform may offer personalized learning paths or recommendations based on individual student needs and progress.",
        },
      ];
  return (
    <div className='howItWorks'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">

                
            <h4>HOW IT WORKS</h4>
            <h3>We Make Your Online Learning Journey Easy</h3>
            </div>
            </div>

<div className="inner_Sec">
    <div className="row">

   
       {steps?.map((item)=>{
        return<>
        <div className="col-md-6 col-lg-4 ">
         <div className="journey_box">
      <div className="circle">
        <div className="text">{item?.number.toString().padStart(2, "0")}</div>
      </div>
      <div className="content">
        <h3>{item?.title}</h3>
        <p>{item?.description}</p>
      </div>
    </div></div>
        </>
       })}
       
       </div> </div>

    </div>
    </div>
  )
}

export default HowItWorks