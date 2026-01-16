import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Row } from 'react-bootstrap'

export default function Header() {
  return (
    <div>
      <Container fluid className='p-3 shadow fixed bg-white'>
        <Row>
          <div className='col-md-3'>
             <h5>Call: 1234567890</h5>
          </div>

           <div className='col-md-6'>
             {/* search box */}
             <input type="text" placeholder="Search..." className='form-control' />
          </div>
           <div className='col-md-3 text-center fs-3'>
             {/* social media icons */}
                <Link to="#" className='ms-2'><i className="bi bi-facebook"></i></Link>
                <Link to="#" className='ms-2'><i className="bi bi-twitter"></i></Link>
                <Link to="#" className='ms-2'><i className="bi bi-instagram"></i></Link>


          </div>
        </Row>
      </Container>
    </div>
  )
}
