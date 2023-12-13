import React from 'react'
import { Col, Row ,Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

function Content() {
  return (
    <>
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <h1>The Branch Difference</h1><br />


        </div>

   <div className='container m-7'>
            <Row>
    
    <Col>
    <Image style={{marginTop:"47px"}} width={150} src="https://www.spaceist.co.uk/wp-content/uploads/Put-simply-contract-grade-furniture-is-furniture-designed-specifically-for-use-in-commercial-spaces-300x300.jpg" roundedCircle />
    <h4 style={{color:"black",fontWeight:"bold",paddingTop:"10px"}}>Contract-grade <br />Office Furniture</h4>
    <p>Branch makes desks, chairs, tables <br /> and more that inspire and support <br /> your team. </p>
    
    </Col>
    <Col>
    <Image style={{marginTop:"48px"}} width={150} src="https://images.squarespace-cdn.com/content/v1/4f319d8dcb120104e6a86961/1594847571515-IGHZN34FQZLKW2V15MJ8/Studio+Croft+Blog+Phases+of+Interior+Design+Project+Design+Development+2.jpeg" roundedCircle />
    <h4 style={{color:"black",fontWeight:"bold",paddingTop:"10px"}}>Fast Design And Furnishing</h4>
    <p>Vishualize your office with a free plan <br /> in 72 hours Get furnished in 5-15 days </p>
    </Col>
    <Col>
    
    <Image style={{marginTop:"55px"}} width={150} height={140} src="https://media.istockphoto.com/id/625914204/photo/movers-unloading-furniture-from-truck.jpg?s=612x612&w=0&k=20&c=7fN_OwjvLgAsuWkhfDt3Qx18xpHyHKHcOO-frbV7aeA=" roundedCircle />
    <h4 style={{color:"black",fontWeight:"bold",paddingTop:"10px"}}>Free Shipping And Installation</h4>
    <p>Build your business, not Furniture. Design, delivery, and installation are free.  </p>
    </Col>
    <Col>
    <Image width={150} height={145} style={{marginTop:"48px"}} src="https://thearchitectsdiary.com/wp-content/uploads/2018/10/Chasing-Waves.jpg" roundedCircle />
    <h4 style={{color:"black",fontWeight:"bold",paddingTop:"10px"}}>Buy Direct And Save 40%+</h4>
    <p>We sell direct to save you 40% vs comparable contract lines. No hidden fees.</p>
    </Col>
    
    
    
    
    
            </Row>
   </div>

<div style={{backgroundColor:"lightblue",width:"100%",height:"100%"}}>
<Row>
<Col>
<div style={{paddingTop:"6.5%"}}>
  <Image src="https://static.vecteezy.com/system/resources/previews/024/344/087/original/business-woman-isolated-illustration-ai-generative-free-png.png" rounded style={{width:"350px"}}/>Sara .R &nbsp; &nbsp;Furni expert
  
</div>
</Col>
<Col>
<div style={{padding:"50px 20px"}}>
<h1 style={{fontFamily: 'Josefin Sans',fontSize:"50px",color:"black"}}>Meet Your Furni <br /> Expert</h1>
<p style={{color:"black"}}>Book a free consultation with a Furni Expert,<br /> who can design your space,plan for common <br /> issues, and quality you for bulk discounts.</p>



<div style={{padding:"20px 0"}}>
<Button variant="dark">Get Started</Button>{' '}
</div>

</div>

</Col>


</Row>


</div>


      
    
    
    </>
  )
}

export default Content