import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


function Footer() {
  return (
    <>

    <div style={{backgroundColor:"lightcyan"}}>
  <Row>
<Col>
<Image src="https://static.vecteezy.com/system/resources/previews/013/442/545/original/table-office-desk-furniture-equipment-png.png" rounded style={{width:"350px",paddingLeft:"10%"}}/>
</Col>
<Col>

<div style={{paddingTop:"15%"}}>
  <h1>Ready To Furnish Your Office</h1>
  
  <Button style={{padding:"5px 30px",margin:"0 28%"}} variant="outline-dark">Get Started</Button>
</div>


</Col>





  </Row>

    <p className='text-center'>All Rights Reserved &copy; <b>FURNI.</b> &reg;2023</p>
    </div>
 
    
    
    </>
  )
}

export default Footer