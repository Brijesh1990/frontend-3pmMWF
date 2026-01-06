import React from 'react'
import { MDBContainer} from 'mdb-react-ui-kit'
import NavbarApp from './NavbarApp'
import BannerApp from './BannerApp'
export default function FormApp() {
return (
<>
{/* navbar */}
<NavbarApp />
<BannerApp />
<MDBContainer className='w-25 mx-auto p-5 shadow mt-5 app'>
<h1 className='text-center'>Login Form</h1>
<hr className='mx-auto w-25 text-danger'/>
<form>
<div className='form-group mt-2'>
<input type="text" placeholder="Name *" className="form-control p-2" />
</div>

<div className='form-group mt-2'>
<input type="text" placeholder="Name *" className="form-control p-2" />
</div>

<div className='form-group mt-3'>
<input type="submit" value="Login"  className="btn btn-md btn-danger text-white" />
</div>
</form>
</MDBContainer>

{/* <MDBContainer className='w-25 mx-auto p-5 shadow mt-5 app'>
<h1 className='text-center'>Login Form</h1>
<hr className='mx-auto w-25 text-danger'/>
<form>
<div className='form-group mt-2'>
<input type="text" placeholder="Name *" className="form-control p-2" />
</div>

<div className='form-group mt-2'>
<input type="text" placeholder="Name *" className="form-control p-2" />
</div>

<div className='form-group mt-3'>
<input type="submit" value="Login"  className="btn btn-md btn-danger text-white" />
</div>
</form>
</MDBContainer>

<MDBContainer className='w-25 mx-auto p-5 shadow mt-5 app'>
<h1 className='text-center'>Login Form</h1>
<hr className='mx-auto w-25 text-danger'/>
<form>
<div className='form-group mt-2'>
<input type="text" placeholder="Name *" className="form-control p-2" />
</div>

<div className='form-group mt-2'>
<input type="text" placeholder="Name *" className="form-control p-2" />
</div>

<div className='form-group mt-3'>
<input type="submit" value="Login"  className="btn btn-md btn-danger text-white" />
</div>
</form>
</MDBContainer>

<MDBContainer className='w-25 mx-auto p-5 shadow mt-5 app'>
<h1 className='text-center'>Login Form</h1>
<hr className='mx-auto w-25 text-danger'/>
<form>
<div className='form-group mt-2'>
<input type="text" placeholder="Name *" className="form-control p-2" />
</div>

<div className='form-group mt-2'>
<input type="text" placeholder="Name *" className="form-control p-2" />
</div>

<div className='form-group mt-3'>
<input type="submit" value="Login"  className="btn btn-md btn-danger text-white" />
</div>
</form>
</MDBContainer> */}
</>
)
}
