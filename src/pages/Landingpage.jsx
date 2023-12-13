import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ArrowDownCircle, Check } from 'react-feather'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';



function Landingpage() {
  return (
    <>

      <div style={{
        backgroundImage: `url("https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/Header/WFH_1242x450.gif")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "450px"
      }}>

        <Row>


          <Col>

            <div style={{ paddingLeft: "10%" }}> <h1 style={{ color: "#2f4f4f", fontSize: "45px", paddingTop: "6%", fontFamily: 'Josefin Sans', fontWeight: "bold" }}>Office Furniture <br />Made Easy</h1>
            </div>

            <div style={{ paddingLeft: "10%" }}>
            <p style={{ color: "#2f4f4f" }}><span><Check /></span> Exceptional desks,chairs,tables and more</p>
            <p style={{ color: "#2f4f4f" }}><span><Check /></span> Get furnished in 5-15 business days</p>
            <p style={{ color: "#2f4f4f" }}><span><Check /></span> Free shipping and installation</p>
            <br />

            <Button variant="success">Build My Office</Button>{' '}
          </div>






          </Col>
          

          
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: "white", paddingTop: "40px" }}><ArrowDownCircle /></div>



      </div><br /><br />

      



    </>
  )
}

export default Landingpage