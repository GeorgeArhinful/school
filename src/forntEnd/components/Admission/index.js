import React, {Component} from 'react';
import image1 from './../../../image/pexels-photo-1007023.jpeg';
import {Link} from 'react-router-dom';

class Admission extends Component{
    render(){
        return(
            <div>
                <section>
                    <div className='row w-100 show-navigation'>
                        <h4 className='my-auto pl-5'>ADMISSION /</h4>
                    </div>
                    <div className='about-school-header-image' style={{backgroundImage:`url(${image1})`}}>
                        <div className='about-school-header-cover row'>
                            <h4  className='m-auto text-light pl-5 lead'>SCHOOL</h4>
                        </div>
                    </div>
                    {/* <div className='w-100'>
                        <div className='container row mx-auto py-5 mb-2 text-secondary'>
                            <div className="col-lg-12 pb-4 col-md-12">
                                <div className='admission-bg'>
                                    <div className='  admission-bg-cover'>
                                        <h1 className='m-auto my-auto'>Loremipsum dolorsit.</h1>
                                    </div>
                                </div>
                                <div className='bg-light pb-5 '>
                                    <p className='text-secondary py-4 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est aperiam quod aspernatur itaque harum repellat maxime, vero voluptate. Id!</p>
                                    <a href='#' className=' px-3'>Lorem, ipsumdolor.</a>
                                </div>
                            </div>
                       
                        </div>
                    </div> */}
                </section>
                <section>
                    <p className='text-orange w-50 text-center pt-4 mx-auto'> consectetur adipisicing elit. Quas eos quidem vel accusamus ducimus tenetur. Eligendi minima sint nobis deleniti veniam culpa dolorem quo amet sapiente</p>
                    <div className='w-100 py-5'>
                        <div className='row container mx-auto'>
                            <div className='col-lg-4  py-4 row col-md-12'>
                                <div className='col-4'> 
                                    <i className='mr-4 fa fas fa-graduation-cap text-warning fa-4x '></i>
                                </div>
                                <div className='col-8'>
                                    <h6 className='py-2'>GRADUATE ADMISSION</h6>
                                    <p className='text-secondary text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eos quidem vel accusamus ducimus tenetur. Eligendi minima sint nobis deleniti veniam culpa dolorem quo amet sapiente.</p>
                                    <Link to="/signup/graduate-admission" className='graduate-link btn btn-info btn-arrow'>GRADUATE ADMISSION WEBSITE </Link>
                                </div>
                            </div>
                            <div className='col-lg-4 py-4 pl-4 row col-md-12'>
                                <div className='col-4'> 
                                    <i className='mr-4 fa fas fa-university text-warning fa-4x '></i><i class="fas "></i>
                                </div>
                                <div className='col-8'>
                                    <h6 className='py-2'>CONTINUING EDUCATION</h6>
                                    <p className='text-secondary text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eos quidem vel accusamus ducimus tenetur. Eligendi minima sint nobis deleniti veniam culpa dolorem quo amet sapiente.</p>
                                    <Link to="/login" className='graduate-link btn btn-info btn-arrow'>CONTINUING EDUCATION WEBSITE </Link>
                                </div>
                            </div>
                            <div className='col-lg-4 py-4 pl-4 row col-md-12'>
                                <div className='col-4'> 
                                    <i className='mr-4 fa fas fa-graduation-cap text-warning fa-4x '></i>
                                </div>
                                <div className='col-8'>
                                    <h6 className='py-2'>UNDER GRADUATE ADMISSION</h6>
                                    <p className='text-secondary text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eos quidem vel accusamus ducimus tenetur. Eligendi minima sint nobis deleniti veniam culpa dolorem quo amet sapiente.</p>
                                    <Link to="/signup/under-graduate-admission" className='graduate-link btn btn-info btn-arrow'>UNDER GRADUATE ADMISSION</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Admission