import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export default function ContainerApp() {
  return (
    <div>
     <Container className='w-50 mx-auto  p-5 mt-5'>
        {/* <Row>
            <Col className='p-3 bg-dark text-white'>1</Col>
            
            <Col className='p-3 bg-secondary'>2</Col>
            
            <Col className='p-3 bg-danger'>3</Col>

             <Col className='p-3 bg-secondary w-25'>4</Col>
            
            <Col className='p-3 bg-danger 75'>5</Col>
        </Row> */}

{/* 
          <Row>
            <div className='col-md-8 p-4 bg-dark text-white'>1</div>
            <div className='col-md-4 p-4 bg-danger'>1</div>
        </Row> */}



        
          <Row>
            <div className='col-9 p-4 bg-dark text-white'>1</div>
            <div className='col-3 p-4 bg-danger'>1</div>
        </Row>


     </Container>
      
    </div>
  )
}
