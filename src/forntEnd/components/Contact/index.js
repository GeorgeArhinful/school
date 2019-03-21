import React ,{Component} from 'react';
import contact from './../../../image/contact.jpeg'

class Contact  extends Component{
    render(){
        return(
            <div>
                <section>
                    <div className='row w-100 show-navigation'>
                        <h4 className='my-auto pl-4'>CONTACT /</h4>
                    </div>
                    <div className='about-school-header-image' style={{backgroundImage:`url(${contact})`}}>
                        <div className='about-school-header-cover row'>
                            <h4  className='m-auto text-light pl-5 lead'>CONTACT</h4>
                        </div>
                    </div>
                    <div className='w-100 pt-5'>
                        <h1 className='text-center py-4'>CONTACT US</h1>
                            <hr className='w-25 m-auto'/>
                        <div className='row py-5'>
                            <div className="col-lg-4 col-md-4 col-12 row col">
                                <div className="col-4 border-right-dark text-right ">
                                    <i className='fa fa-mobile mr-3'></i>
                                </div>
                                <div className="col-8 my-auto contact-right">
                                    <h5> PHONE</h5>
                                    <p>1234567890</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 row col">
                                <div className="col-4 border-right-dark text-right">
                                    <i className='fa fa-envelope mr-3'></i>
                                </div>
                                <div className="col-8 my-auto contact-right">
                                    <h5> EMAIL</h5>
                                    <p>georgearhinful442@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 row col">
                                <div className="col-4 border-right-dark text-right">
                                    <i className='fa fa-map-marker mr-3'></i>
                                </div>
                                <div className="col-8 my-auto contact-right">
                                    <h5> LOCATION</h5>
                                    <p>1234567890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-100 pt-4'>
                            <div className='row'>
                                <div className='col-lg-7 bg-warning'>

                                </div>
                                <div className='col-lg-5 bg-vision'>
                                    <div className='p-5'>
                                    <h3 className='pb-4 text-light'>SEND  A MESSAGE</h3>
                                    <form>
                                        <div>
                                            <input  type='text' placeholder='Your First Name' className='form-control'/>
                                        </div>
                                        <div>
                                            <input  type='text' placeholder='Your Last Name' className='form-control my-3'/>
                                        </div>
                                        <div>
                                            <input  type='email' placeholder='Email' className='form-control'/>
                                        </div>
                                        <div>
                                            <textarea rows='5'placeholder='Your Message' className='form-control mt-3 mb-5'>

                                            </textarea>
                                        </div>
                                        <div>
                                            <button  type='submit' className='bg-orange form-control py-2'>SEND MESSAGE</button>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact