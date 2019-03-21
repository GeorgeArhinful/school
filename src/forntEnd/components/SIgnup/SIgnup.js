import React ,{Component} from 'react';
import './style.css';
import {Input} from 'reactstrap';
import {Link} from 'react-router-dom'

class SIgnup extends Component{
    render(){
        return(
            <div className='formcontain'>
                <div className='container h-100 w-100 row py-5 mx-auto'>
                    <div className='m-auto col-12 col-md-4 pt-2 pb-3 form-shadow'>
                        <h4 className='lead py-4 text-center'>Sign Up <samp className='h6 d-block pt-2'>as {this.props.match.params.status ==='under-graduate-admission'? 'Under Graduate Student':'Graduate Student' }</samp></h4>
                       

                        <form >
                            <div className='row'>
                                <div className='col-6'>
                                    <input type='text' name='firstName ' className=' my-signUp-input form-control' placeholder='Enter First Name'/>
                                </div>
                                <div className='col-6'>
                                    <input type='text' className='my-signUp-input form-control' name='lastName' placeholder='Enter Last Name'/>
                                </div>
                            </div>
                            <div>
                                <input name='Email' className='my-signUp-input w-100 form-control mt-2' placeholder='Enter Your Email'/>
                            </div>
                            <div>
                                <input name='password' className='my-signUp-input w-100 form-control mt-2' placeholder='Enter Password' type='password' />
                            </div>
                {/* school info start section*/}
                            <div className='row mt-2'>
                                <div className='col-6'>
                                <Input type="select" className='my-signUp-input' name="school" id="">
                                    <option>SELECT SCHOOL</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                              </Input>
                                </div>
                                <div className='col-6'>
                                    <input type='text' className='my-signUp-input form-control' placeholder='Enter Your Class' name='class'/>
                                </div>
                            </div>
                {/* school info close section*/}
                {/* date of birth info start section*/}
                            <div className='row mt-2'>
                                <div className="col-5">
                                    <Input type="select" className='my-signUp-input' name="brithMonth" id="">
                                            <option>Birth Month</option>
                                            <option name="brithMonth">SELECT MONTH</option>
                                            <option name="brithMonth">3</option>
                                            <option name="brithMonth">4</option>
                                            <option name="brithMonth">5</option>
                                    </Input>
                                </div>
                                <div className='col-3'>
                                    <input type='text' className='my-signUp-input w-100 form-control' placeholder='DAY' name='birthDay'/>
                                </div>
                                <div className='col-4'>
                                    <input type='number' className='my-signUp-input w-100 form-control' placeholder='Year' name='birthYear'/>
                                </div>
                            </div>
                {/* Date of birth info close section*/}
                            <div>
                                <Input type='select' className='my-signUp-input form-control mt-2' placeholder='Gender' name='gender'>
                                    <option>Gender</option>
                                    <option name="brithMonth">Male</option>
                                    <option name="brithMonth">Female</option>
                                    <option name="brithMonth">Not Say</option>
                                 
                                </Input>
                            </div>
                            <div>
                                <p className='text-secondary text-center w-75 pt-5 mx-auto small'>By clicking "Continue", you agree to the <a href='/'>Terms</a> and <a href='/'>Privacy Policy </a></p>
                            </div>
                            <div className='w-75 mx-auto'>
                                <button className='btn bg-orange w-100 mx-auto' style={{height:'50px',fontSize:'20px'}}>Submit</button>
                            </div>
                        </form>                

                        <div>
                            <p className='text-center py-4'>Already have an account? <Link to='/login'>Sign in </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SIgnup