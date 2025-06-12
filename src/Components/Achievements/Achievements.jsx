import React from 'react'
import  './achievements.css'
import { Col, Container, Row } from 'react-bootstrap'
import ImageBg from '../../assets/image/archivmentbanner.png'
import award from '../../assets/image/award.png'

const data =[{img:award ,heading:`CBSE 10th Maths 2025:`, content:`95% match – 36 out of 38 questions were based on problems solved in our videos!`},
    {img:award ,heading:`Telangana Board 10th Maths 2025:`,content:`94.5% match – 17 out of 18 questions aligned with our video solutions!`},
    {img:award ,heading:`Andhra Pradesh Board 10th Maths 2025:`,content:`94% match – 31 out of 33 questions mirrored problems taught in our videos!`}]
const Achievements = () => {
  return (
    <div className='achievements'  style={{
        backgroundImage: `url(${ImageBg})`
      }}>
<Container>
    <div className='heading'>
        <h5>Results Delivered in 2025</h5>
    </div>
    <Row>
       
        {data?.map((item)=>{
            return<><Col  md={4} className='mb-4'>
                 <div className="content_box h-100">
                    <img src={item?.img} />
                    <h6>{item?.heading}</h6>
            <p>{item?.content}</p>
            </div>
            </Col>
            </>
            
        })}
        
    </Row>
</Container>


    </div>
  )
}

export default Achievements