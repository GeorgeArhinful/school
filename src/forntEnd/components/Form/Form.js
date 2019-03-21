import React from "react";
import "./Form.css";
import {Link} from 'react-router-dom';

class Form extends React.Component {
    render() {
        return (
            <div className='form-contain pt-2 pb-4'>
                <div className='w-100 row container mx-auto h-100'>
                    <div className='col-8 pt-5 px-5 mt-3'>
                    <h3 className='py-4 text-center'>Header Here</h3>
                        <h3 className='lead side-text'>Everyone seems to want to know who/what/where is a hipster. There’s a trend to declare that there is no real definition for what a hipster is, though the word is used loosely by just about every publication imaginable.
                        What is a hipster? You’d be surprised. It could very well be YOU.</h3>
                    </div>
                    <div className='col-4 h-100 mt-2 forms-shadow' style={{backgroundColor:'white'}}>
                        <div className='position-relative h-100'>
                            <div>
                                <h3 className='py-4 text-center'>School Name</h3>

                                <h4 className='py-4 text-center lead'>Sign in</h4>
                            </div>
                            <form>
                                <div>
                                    <input className='form-control myInput mt-4' placeholder='Enter Your Email' type='Email' />
                                </div>
                                <div>
                                    <input className='form-control myInput mt-4' type='password' placeholder='Enter Your Password'/>
                                </div>
                                <div>
                                    <button className='btn bg-orange w-100 mt-5 py-1' style={{height:'50px',fontSize:'20px'}}> Submit </button>
                                </div>
                              
                            </form>
                            <div className='mt-auto position-absolute mx-auto w-100' style={{bottom:'10px'}}>
                                <p className='text-center'>Don't have an account? Sign up as <Link to='/signup/graduate-admission'>  Graduate Student</Link> or <Link to='/signup/under-graduate-admission'>Under Graduate Student</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 
export default Form;