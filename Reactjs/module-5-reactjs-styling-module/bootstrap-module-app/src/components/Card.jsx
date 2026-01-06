import React from 'react'
import { Container,Row,Card,CardBody,CardHeader,CardImg } from 'react-bootstrap'
import img1 from '../assets/images/2D__57497__498261.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.png'
export default function CardApp() {
  return (
    <>
        <Container>
           <h1 align="center">Cards Managements </h1>
            <hr className='w-25 mx-auto' />
            <Row>
         
                <div className='col-md-4'>
                   <Card className='p-5 border-0'>
                    {/* <CardHeader></CardHeader> */}
                    <CardImg src={img1} className='img-fluid w-50 mx-auto' />
                   </Card> 
                   <CardBody>
                    <h1 className='text-center'>Peace of card</h1>
                    <h1 className='text-center fs-5'>Price : Rs. 145-/</h1>
                    <h1 className='text-center fs-4'><span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span></h1>
                    <p className='text-center'><button type='button' className='btn btn-md btn-outline-danger'>AddToCart</button></p>
                   </CardBody>
                </div>

                 <div className='col-md-4'>
                   <Card className='p-5 border-0'>
                    {/* <CardHeader></CardHeader> */}
                    <CardImg src={img2} className='img-fluid w-50 mx-auto' />
                   </Card> 
                   <CardBody>
                    <h1 className='text-center'>Peace of card</h1>
                    <h1 className='text-center fs-5'>Price : Rs. 145-/</h1>
                    <h1 className='text-center fs-4'><span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span></h1>
                    <p className='text-center'><button type='button' className='btn btn-md btn-outline-danger'>AddToCart</button></p>
                   </CardBody>
                </div>


                 <div className='col-md-4'>
                   <Card className='p-5 border-0'>
                    {/* <CardHeader></CardHeader> */}
                    <CardImg src={img3} className='img-fluid w-50 mx-auto' />
                   </Card> 
                   <CardBody>
                    <h1 className='text-center'>Peace of card</h1>
                    <h1 className='text-center fs-5'>Price : Rs. 145-/</h1>
                    <h1 className='text-center fs-4'><span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span></h1>
                    <p className='text-center'><button type='button' className='btn btn-md btn-outline-danger'>AddToCart</button></p>
                   </CardBody>
                </div>

                 <div className='col-md-4'>
                   <Card className='p-5 border-0'>
                    {/* <CardHeader></CardHeader> */}
                    <CardImg src={img2} className='img-fluid w-50 mx-auto' />
                   </Card> 
                   <CardBody>
                    <h1 className='text-center'>Peace of card</h1>
                    <h1 className='text-center fs-5'>Price : Rs. 145-/</h1>
                    <h1 className='text-center fs-4'><span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span></h1>
                    <p className='text-center'><button type='button' className='btn btn-md btn-outline-danger'>AddToCart</button></p>
                   </CardBody>
                </div>


                 <div className='col-md-4'>
                   <Card className='p-5 border-0'>
                    {/* <CardHeader></CardHeader> */}
                    <CardImg src={img3} className='img-fluid w-50 mx-auto' />
                   </Card> 
                   <CardBody>
                    <h1 className='text-center'>Peace of card</h1>
                    <h1 className='text-center fs-5'>Price : Rs. 145-/</h1>
                    <h1 className='text-center fs-4'><span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span></h1>
                    <p className='text-center'><button type='button' className='btn btn-md btn-outline-danger'>AddToCart</button></p>
                   </CardBody>
                </div>
                 <div className='col-md-4'>
                   <Card className='p-5 border-0'>
                    {/* <CardHeader></CardHeader> */}
                    <CardImg src={img2} className='img-fluid w-50 mx-auto' />
                   </Card> 
                   <CardBody>
                    <h1 className='text-center'>Peace of card</h1>
                    <h1 className='text-center fs-5'>Price : Rs. 145-/</h1>
                    <h1 className='text-center fs-4'><span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span></h1>
                    <p className='text-center'><button type='button' className='btn btn-md btn-outline-danger'>AddToCart</button></p>
                   </CardBody>
                </div>


                 <div className='col-md-4'>
                   <Card className='p-5 border-0'>
                    {/* <CardHeader></CardHeader> */}
                    <CardImg src={img3} className='img-fluid w-50 mx-auto' />
                   </Card> 
                   <CardBody>
                    <h1 className='text-center'>Peace of card</h1>
                    <h1 className='text-center fs-5'>Price : Rs. 145-/</h1>
                    <h1 className='text-center fs-4'><span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span>
                    <span className='bi bi-star'></span></h1>
                    <p className='text-center'><button type='button' className='btn btn-md btn-outline-danger'>AddToCart</button></p>
                   </CardBody>
                </div>
            </Row>
        </Container>
    </>
  )
}
