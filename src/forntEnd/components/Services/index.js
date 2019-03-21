import React, {Component} from 'react';
import image1 from './../../../image/pexels-photo-1007023.jpeg';
import service from './../../../image/service.jpg'


class Services extends Component{
    render(){
        return(
            <div>
                <section>
                    <div className='row w-100  show-navigation py-2'>
                        <h4 className='my-auto pl-5 ml-3 '>ABOUT / SERVICES</h4>
                    </div>
                    <div className='about-school-header-image' style={{backgroundImage:`url(${service})`}}>
                        <div className='about-school-header-cover row'>
                            <h1  className='m-auto text-light '>Services</h1>
                        </div>
                    </div>
                    <div className=''>
                        <div className='row container py-5 mx-auto'>
                            <div className="col-lg-6 col-md-6">
                                <h3>Our popular Courses forProfessionals</h3>
                                <p className="text-secondary py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consectetur sed quae officia praesentium voluptatum esse nostrum aliquam sequi ipsum voluptatem vero ipsam nemo voluptas reiciendis debitis enim, unde tempora.</p>
                                <div>
                                    <h4 className='text-dark lead'><i className='fa fas fa-bar-chart mr-3 text-warning'></i> BUSINESS & ACCOUNTING</h4>
                                    <h4 className='text-dark lead'> <i className='fa fas fa-medkit mr-3 text-warning'></i>HEALTH & PSYCHOLOGY</h4>
                                    <h4 className='text-dark lead'> <i className='fa fas fa-flask mr-3 text-warning'></i>SCIENCE & TECHNOLOGY</h4>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <img src={image1} className='image-boader' alt=""/>
                            </div>
                        </div>
                        <section>
                            <div className='service-bg-image'>
                                <div className='service-bg-image-cover '>
                                    <div className='row container mx-auto py-5'>
                                        <div className="col-md-6 col-lg-4 p-3 service text-center text-light">
                                            <div><i className='fas fa-graduation-cap fa'></i></div>
                                            <h4 className='py-3'>PROFESSIONAL EDUCATION</h4>
                                            <p className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque delectus dolore nisi minima vitae, possimus porro inventore, cum quod ratione illum aperiam? Adipisci, porro vero.</p>
                                        </div>
                                        <div className="col-md-6 col-lg-4 p-3 service text-center text-light">
                                            <div><i className='fas fa-pencil fa'></i></div>
                                            <h4 className='py-3'>SPECIALIST TEACHING</h4>
                                            <p className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque delectus dolore nisi minima vitae, possimus porro inventore, cum quod ratione illum aperiam? Adipisci, porro vero.</p>
                                        </div>
                                        <div className="col-md-6 col-lg-4 p-3 service text-center text-light">
                                            <div><i className='fas fa-keyboard-o  fa'></i></div>
                                            <h4 className='py-3'>DIPLOMA EDUCATION</h4>
                                            <p className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque delectus dolore nisi minima vitae, possimus porro inventore, cum quod ratione illum aperiam? Adipisci, porro vero.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className='bg-dark py-5'>
                                <h2 className='text-center text-light'>We are always ahead Professional Education for Your Future</h2>
                                <div className='row container mx-auto py-5'>
                                    <div className="col-lg-3 text-center my-3 my-3 my-lg-0 text-light col-md-6">
                                        <div className=''>
                                            <i className='fa fas fa-smile-o fa-3x'></i>
                                        </div>
                                        <h1 className='py-4'>9000</h1>
                                        <h4 className='text-warning text-center'>HAPPY CUSTOMERS</h4>
                                    </div>
                                    <div className="col-lg-3 text-center my-3 my-3 my-lg-0 text-light col-md-6">
                                        <div className=''>
                                            <i className='fa fas fa-bookmark fa-3x'></i>
                                        </div>
                                        <h1 className='py-4'>20</h1>
                                        <h4 className='text-orange text-center'>APPROVED COURSES</h4>
                                    </div>
                                    <div className="col-lg-3 text-center my-3  my-3 my-lg-0 text-light col-md-6">
                                        <div className=''>
                                            <i className='fa fas fa-users fa-3x'></i>
                                        </div>
                                        <h1 className='py-4'>800</h1>
                                        <h4 className='text-orange text-center'>CERTIFIED TEACHERS</h4>
                                    </div>
                                    <div className="col-lg-3 text-center my-3 my-lg-0 text-light col-md-6">
                                        <div className=''>
                                            <i className='fa fas fa-trophy fa-3x'></i>
                                        </div>
                                        <h1 className='py-4'>400</h1>
                                        <h4 className='text-orange text-center'>AWARDS WON</h4>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services