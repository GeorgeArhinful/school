import React,{Component} from 'react';

// import HomePageVideo from './../../../image/video.webm';
import image from './../../../image/pexels-photo-1007025.jpeg';
import admission from './../../../image/admission.jpg';
import tour from './../../../image/pexels-photo-1305305.jpeg';
import professional from './../../../image/professional.jpg';
import {Link} from 'react-router-dom';
import {loadUser} from './../../action/index.js';
import {connect} from 'react-redux'




class HomePage extends Component{
    componentDidMount(tprops){
        this.props.loadUser()
    }
    render(){
        return(
            <div>
                <header>
                    <div>
                        {/* vigeo background */}
                        <div className=''>
                            <div className=''>
                            <img alt='Tour' src={tour} className='w-100' style={{height:'80%'}}/>
                               {/* <video src={HomePageVideo}  playsInline webkit-playsInline className='v' loop={true} muted autoPlay='true'></video> */}
                            </div>
                     
                        </div>
                        {/* vigeo background */}
                    </div>
                </header>
                <section>
                    <div className="header-bottom-nav row">
                        <div className="col-lg col-12 text-center">
                            <Link to='/admission' className='m-auto text-orange'>FUTURE STUDENT</Link>
                        </div>
                        <div className = "col-lg col-12 text-center" >
                            <Link to='/login' className='m-auto text-orange'>CURRENT STUDENT</Link>
                        </div>
                        <div className = "col-lg col-12 text-center" >
                            <Link to='achivement' className='m-auto text-orange'>Achivement&INNOVATION</Link>
                        </div>
                        <div className = "col-lg col-12 text-center" >
                            <Link to='/staff' className='m-auto text-orange'>FACULTY & STAFF</Link>
                        </div>
                        <div className = "col-lg col-12 text-center" >
                            <Link to='/alumni' className='m-auto text-orange'>ALUMNI</Link>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <div className="row py-5 w-75 mx-auto">
                            <h2 className='text-center  mx-auto'>
                                WELCOME TO THE UNIVERSITY OF NKWANTA  
                            </h2>
                            <div className='row text-center pt-5 pb-4'>
                                <div className='col-md-6 col-lg-3 col-sm-6'>
                                    <h1>2000+</h1>
                                    <h4 className='text-orange text-center'>Clubs & Organizations</h4>
                                </div>
                                <div className='col-md-6 col-lg-3 col-sm-6'>
                                    <h1>2000+</h1>
                                    <h4 className='text-orange text-center'>Academic Programs</h4>
                                </div>
                                <div className='col-md-6 col-lg-3 col-sm-6'>
                                    <h1>2000+</h1>
                                    <h4 className='text-orange text-center'>Student-to-Faculty Ratio</h4>
                                </div>
                                <div className='col-md-6 col-lg-3 col-sm-6'>
                                    <h1>2000+</h1>
                                    <h4 className='text-orange text-center'>NCAA Division II Athletic Teams</h4>
                                </div>
                            </div>
                            <h6 className='lead py-3 text-secondary text-center'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque modi perferendis atque, tempore reprehenderit quasi quia sed ut voluptatum! Quisquam fugit similique a illum, provident nemo praesentium quia ex repudiandae.Quisquam fugit similique a illum, provident nemo praesentium quia ex repudiandae.
                                Quisquam fugit similique a illum, provident nemo praesentium quia ex repudiandae.
                            </h6>
                        </div>
                    </div>
                </section>
                <section>
                    < div className = 'small-side-navbar-section bg-vision' >
                        <div className='container '>
                            <div className='row'>
                                <div className=" col-lg-4 pl-0">
                                    < ul className = 'small-side-navbar  pl-0 ml-0' >
                                        <li className='py-2 '><a href="/" className='m-auto text-warning'><i className='fa rounded-circle bg-light p-3 mr-3 text-orange fa-building'></i>UNDERGRADUATE</a></li>
                                        <li className='py-2'>
                                        <a href="/" className='text-warning'><i className='text-orange fa rounded-circle fa-graduation-cap bg-light p-3 mr-3'></i> GRADUATE</a>
                                        </li>
                                        <li className='py-2'>
                                        <a href="/" className='text-warning'><i className='fa text-warning text-orange rounded-circle fas fa-globe bg-light p-3 mr-3 '></i>INTERNATIONAL</a>
                                        </li>
                                        <li className='py-2'>
                                        <a href="/" className='text-warning'><i className='fa  text-orange rounded-circle bg-light p-3 mr-3 fa-university'></i>CONTINUING EDUCATION</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className=" col-lg-4">
                                    <div className='image-bg-link h-100'>
                                        <div className='image-bg' style={{backgroundImage:`url(${admission})`}}>
                                            <div className='image-bg-cover mx-0 row' >
                                                <h3 className='w-100 pt-3 text-light pl-4'>ADMISSIONS
                                                    <p className='w-25 hr pt-2'></p>
                                                </h3>
                                                
                                                <Link to='/admission' className='w-100 mt-auto pb-5 pl-4 text-light'>LEARN MORE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-4">
                                    <div className='image-bg-link h-100'>
                                        <div className='image-bg 'style={{backgroundImage:`url(${tour})`}}>
                                            <div className='image-bg-cover row mx-0'>
                                                <h3 className='w-100 pt-3 text-light pl-4'>TOURS
                                                    <p className='w-25 hr pt-2'></p>
                                                </h3>
                                                <Link to='/gallary' className='w-100 mt-auto pb-5 text-light  pl-4'>EXPLORE CAMPUS</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section>
                    <div className=' pb-5'style={{height:'50vh'}} >
                        <UncontrolledCarousel  items={items} controls={false} className='' indicators={false}/>
                    </div>
                </section> */}
                <section>
                    <div className='  py-4'>
                        <div className='container'>
                            <div className='row container py-5 mx-auto'>
                                <div className="col-lg-4 col-md-4">
                                    <img src={professional} className='img-responsive img-fluid rounded-circle' alt=""/>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <h3 className='text-warning'>Our popular Courses forProfessionals</h3>
                                    <p className="text-secondary py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consectetur sed quae officia praesentium voluptatum esse nostrum aliquam sequi ipsum voluptatem vero ipsam nemo voluptas reiciendis debitis enim, unde tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consectetur sed quae officia praesentium voluptatum esse nostrum aliquam sequi ipsum voluptatem vero ipsam nemo voluptas reiciendis debitis enim, unde tempora</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=' bg-vision'>
                    <div className='row container px-3 py-5 mx-auto'>
                        <div className="col-lg-7 my-autos col-md-7 ">
                            <h3>Reaching Out to Reduce Impact</h3>
                            <h4 className='py-4 text-warning text-light'><i className='fa fa-quote-left'></i> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consectetur sed quae officia praesentium voluptatum esse nostrum aliquam sequi ipsum voluptatem vero ipsam nemo voluptas reiciendis debitis enim, unde tempora.Lorem ipsum dolor, <i className='fa fa-quote-right'></i></h4>


                            <Link to='/about/1' className='my-3 px-4 py-3 text-light mt-5 bg-orange'>Read More</Link>
                      
                        </div>
                        <div className="col-lg-5 my-3 col-md-5">
                            <img alt='EXPLORE' src={image} className='img-responsive img-fluid '/>
                        </div>
                    </div>
                </section>
               
                <section>
                    <div className='bg-image80'>
                        <div className='bg-image-cover row'>
                            <div className='mx-auto mt-auto'>
                                <h4>EXPLORE OUR VIRTUAL CAMPUS</h4>
                                <Link to='/gallary' className='btn mx-auto mb-4 bg-orange mt-2 px-4 py-2 btn-hover'>EXPLORE NOW</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-vision'>
                    <div className='row container py-5 mx-auto'>
                        < div className = "col-lg-6 col-md-6 my-auto col-12" >
                            <img alt='Program' src={image} className='img-responsive img-fluid '/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <h3>Our popular Courses forProfessionals</h3>
                            <p className="text-secondary py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consectetur sed quae officia praesentium voluptatum esse nostrum aliquam sequi ipsum voluptatem vero ipsam nemo voluptas reiciendis debitis enim, unde tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consectetur sed quae officia praesentium voluptatum esse nostrum aliquam sequi ipsum voluptatem vero ipsam nemo voluptas reiciendis debitis enim, unde tempora</p>

                            <Link to='/program' className='my-3 px-4 py-3 text-light bg-orange'>Read More</Link>
                        </div>
                    </div>
                </section>
                <section className='py-5'>
                    <div className='py-5'>
                        <h2 className='text-center'>We Provide Educational Solutions</h2>
                    </div>
                    <div className='three-box-section row'>
                        <div className='row container m-auto h-80 p-4'>
                            <div className='col-lg-4 box-section p-4'>
                                <div className='text-center py-3'>
                                    <i className='fa text-warning fa-2x fa-globe '></i>
                                </div>
                                <div className='text-center box-section-text'>
                                    <h4 className=' '>Online Courses Facilities</h4>
                                    <p className='text-left small text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex sequi earum vitae quia perferendis!</p>
                                    <Link to='/about/online' className=' text-orange py-2'>Read More</Link>
                                </div>
                            </div>
                            <div className='col-lg-4 box-section p-4'>
                                <div className='text-center py-3'>
                                    <i className='fa text-warning fa-2x fa-building'></i>
                                </div>
                                <div className='text-center box-section-text'>
                                    <h4 className=' '>Student Admin Panel</h4>
                                    <p className='text-left small text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex sequi earum vitae quia perferendis!</p>
                                    <Link to='/about/panel' className=' text-orange py-2'>Read More</Link>
                                </div>
                            </div>
                            <div className='col-lg-4 box-section p-4'>
                                <div className='text-center py-3'>
                                    <i className='fa text-warning fa-2x fa-support'></i>
                                </div>
                                <div className='text-center box-section-text'>
                                    <h4 className=' '>Perfect Guidelines</h4>
                                    <p className='text-left small text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex sequi earum vitae quia perferendis!</p>
                                    <Link to='/about/perfect' className='text-orange py-2'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <section className='w-100 mt-5'>
                            <h2 className='ml-5 text-center'>Upcoming Events</h2>
                            <hr className='w-25 m-auto pb-3'></hr>
                            <p className='text-center mb-4 pb-3 w-50 m-auto text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi provident magni nam voluptatum doloremque aliquid fuga vitae, maiores id facilis?</p>
                            <div className='row m-auto container'>
                                <div className="col-sm-6 my-3 col-md-4 col-lg-3">
                                    <div>
                                        <img src={image}  className='img-responsive img-fluid' alt=""/>
                                    </div>
                                    <div className='py-3'>
                                        <p className='text-secondary small mb-1'><b><i className='fa fa-calendar text-warning'></i> 05 june 2010  <i className="fa fa-clock-o ml-2 text-warning"></i> 3:30pm - 7:00pm</b></p>
                                        <h5><b>Lorem amet consectetur</b></h5>
                                        <p className='text-justify text-secondary pb-5 pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione praesentium inventore mollitia dolorum aliquam non reiciendis possimus?</p>
                                        <Link to='/news/1' className='py-2 px-3  bg-orange text-light'>Read More</Link>
                                    </div>
                                </div>
                                <div className="col-sm-6 my-3 col-md-4 col-lg-3">
                                    <div>
                                        <img src={image}  className='img-responsive img-fluid' alt=""/>
                                    </div>
                                    <div className='py-3 '>
                                        <p className='text-secondary small mb-1'><b><i className='fa fa-calendar text-warning'></i> 05 june 2010  <i className=" text-warning fa fa-clock-o ml-2"></i> 3:30pm - 7:00pm</b></p>
                                        <h5><b>Lorem amet consectetur</b></h5>
                                        <p className='text-secondary text-justify pb-5 pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione praesentium inventore mollitia dolorum aliquam non reiciendis possimus?</p>
                                        <Link to='/news/2' className='py-2 px-3  bg-orange text-light'>Read More</Link>
                                    </div>
                                </div>
                                <div className="col-sm-6 my-3 col-md-4 col-lg-3">
                                    <div>
                                        <img src={image}  className='img-responsive img-fluid' alt=""/>
                                    </div>
                                    <div className='py-3'>
                                        <p className='text-secondary small mb-1'><b><i className='fa fa-calendar text-warning'></i> 05 june 2010  <i className="text-warning fa fa-clock-o ml-2 text-warning"></i> 3:30pm - 7:00pm</b></p>
                                        <h5><b>Lorem amet consectetur</b></h5>
                                        <p className='text-secondary text-justify pb-5 pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione praesentium inventore mollitia dolorum aliquam non reiciendis possimus?</p>
                                        <Link to='/news/3' className='py-2 px-3  bg-orange text-light'>Read More</Link>
                                    </div>
                                </div>
                                <div className="col-sm-6 my-3 col-md-4 col-lg-3">
                                    <div>
                                        <img src={image}  className='img-responsive img-fluid' alt=""/>
                                    </div>
                                    <div className='py-3'>
                                        <p className='text-secondary small mb-1'><b><i className='fa fa-calendar text-warning'></i> 05 june 2010  <i className="fa fa-clock-o ml-2 text-warning"></i> 3:30pm - 7:00pm</b></p>
                                        <h5><b>Lorem amet consectetur</b></h5>
                                        <p className='text-secondary pb-5 text-justify pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione praesentium inventore mollitia dolorum aliquam non reiciendis possimus?</p>
                                        <Link to='/news/4' className='py-2 px-3 bg-orange text-light'>Read More</Link>
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

const mapStateToProps = (state)=>{
    console.log(state);
    
    return{
        state
    }
}
export default connect(mapStateToProps,{loadUser})(HomePage)