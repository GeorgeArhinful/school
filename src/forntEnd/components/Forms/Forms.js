import React, { Component } from 'react';
import './style.css';
import admission from './../../../image/admission.jpg';
import {Link} from 'react-router-dom';

class Forms extends Component {
  render() {
    return (
      <div >
            <div className='form-bg-img' style={{backgroundImage:`url(${admission})`}}>
                <div className='form-bg-img-cover d-flex p-5'>
                    <form className='m-auto w-50  my-4' style={{borderRadius:'5%',backgroundColor:'white'}}>
                        <div><h2 className='text-center py-5'>Register</h2></div>
                        <div className='pb-5'>
                            <div >
                                <input placeholder='Your User Name OR Email' className='form-control py-4 my-3 w-75 mx-auto'/>
                            </div>
                            <div >
                                <input placeholder='Your Password' className='form-control py-4 my-3 w-75 mx-auto'/>
                            </div>
                          
                            <p className=' my-3 w-75 mx-auto'><input type='checkbox' name='term' value='true'/> I agree all statements in Terms of service</p>
                            <div className='my-4 w-75 mx-auto'>
                                <button className=' py-2 m-0  w-50 bg-orange' type='submit d-block'>Submit</button>
                            </div>
                            <p className=' mt-5 w-75 mx-auto'>New to this site? <Link to='/admission'> Create an account. </Link></p>
                        </div>
                    </form>
                </div>
            </div> 
      </div>
    )
  }
}

export default Forms 
