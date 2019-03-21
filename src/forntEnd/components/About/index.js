import React, {Component} from 'react';
import image1 from './../../../image/pexels-photo-1007023.jpeg';
import about from './../../../image/about.jpeg';
import {Link} from 'react-router-dom';

class About extends Component{
    render(){
        return(
            <div>
                <section>
                    <div className='row w-100 show-navigation'>
                        <h3 className='my-auto pl-4'>ABOUT / SCHOOL</h3>
                    </div>
                    <div className='about-school-header-image' style={{backgroundImage:`url(${about})`}}>
                        <div className='about-school-header-cover row'>
                            <h1  className='m-auto pl-5 text-light '>SCHOOL</h1>
                        </div>
                    </div>
                        <div className='w-100'>
                            <div className='row container m-auto py-5'>
                                <div className='col-lg-5 row my-3'>
                                    <div className='col-lg-5 my-2'>
                                        <a href='/'><img alt='About us' src={image1} className='img-responsive w-100 img-fluid'/></a>
                                    </div>
                                    <div className='col-lg-7 my-2'>
                                    <a href='/'><img alt='About us' src={image1} className='image-responsive img-fluid'/></a>
                                    </div>
                                    <div className='pb-3 my-2 col-lg-12'>
                                    <a href='/'><img alt='About us' src={image1} className='image-responsive img-fluid'/></a>
                                    </div>
                                </div>
                                <div className='col-lg-7 my-3'>
                                    <h2><b>About Our Education</b></h2>
                                    <hr style={{width:'10%',border:'5px solid gold'}} className='text-left text-warning mr-auto m-0 mb-5'></hr>
                                    <p className='test-justify text-secondary'> dolore quibusdam quod pariatur fugit cupiditate itaque repudiandae rem, placeat dolorum obcaecati odit tempore accusamus? Debitis id reprehenderit natus excepturi molestias expedita dolores voluptatem, quo deserunt sequi maiores unde.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nostrum numquam voluptatum eos delectus facere facilis consectetur sit. Atque, dignissimos voluptas, dolore quibusdam quod pariatur fugit cupiditate itaque repudiandae rem, placeat dolorum obcaecati odit tempore accusamus? Debitis id reprehenderit natus excepturi molestias expedita dolores voluptatem, quo deserunt sequi maiores unde.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nostrum numquam voluptatum eos delectus facere facilis consectetur sit. Atque, dignissimos voluptas, dolor sit amet consectetur adipisicing elit. Et nostrum numquam voluptatum eos delectus facere facilis consectetur sit. Atque, dignissimos voluptas, dolore quibusdam quod pariatur .</p>
                                    <button style={{border:'0px'}} className='bg-orange text-light px-4 py-3'>Our Courses</button>
                                </div>
                            </div>
                            <section>
                                <div className='w-100 py-5 bg-vision'>
                                    <div className='row container text-light mx-auto py-5'>
                                        <div className="col-md-5 my-3">
                                            <h3 className="pb-3 ">VISION</h3>
                                            <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima soluta inventore accusantium obcaecati, quod voluptas dicta officiis, maiores non fugiat deleniti laudantium harum distinctio maxime assumenda alias, et iste provident veritatis beatae dolor!  distinctio maxime assumenda alias, et iste provident veritatis beatae dolor!</p>
                                        </div>
                                        <div className="col-md-7 my-3">
                                            <h3 className="pb-3">RANKING</h3>
                                            <div className='row'>
                                                <div className="col-lg-6 my-2 row">
                                                <i className='fa fas fa-5x text-warning col-lg-4 fa-trophy'></i>
                                                <h6 className=' m-auto col-lg-8'> First in Lorem, ipsum dolor.</h6>
                                                </div>
                                                <div className="col-md-6 my-2 row">
                                                <i className='fa fas fa-5x text-warning col-lg-5 fa-graduation-cap'></i>
                                                <h6 className='m-auto col-lg-7'> 1000 Graduate Lorem, ipsum dolor.</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className='w-100 py-5'>
                                    <div className="">
                                        <div className="head-title text-center">
                                            <h1>OUR PLANS</h1>
                                        </div>
                                        <div className="row container mx-auto pt-3 py-5">
                                            <div className="col-lg-4 col-md-6 my-3">
                                                <div className="hover-to-display-child">
                                                    <div className="child-to-display">
                                                        <p className='small pb-3 text-secondary'>Date on 10</p>
                                                        <h3>Plan heading</h3>
                                                        <p className='small py-4 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi at voluptates quia corrupti harum qui ipsa libero. Nam, adipisci suscipit?</p>
                                                        <Link to='/plan'>Read more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 my-3">
                                                <div className="hover-to-display-child">
                                                    <div className="child-to-display">
                                                        <p className='small pb-3 text-secondary'>Date on 10</p>
                                                        <h3>Plan heading</h3>
                                                        <p className='small py-4 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi at voluptates quia corrupti harum qui ipsa libero. Nam, adipisci suscipit?</p>
                                                        <Link to='/plan'>Read more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 my-3">
                                                <div className="hover-to-display-child">
                                                    <div className="child-to-display">
                                                        <p className='small pb-3 text-secondary'>Date on 10</p>
                                                        <h3>Plan Heading</h3>
                                                        <p className='small py-4 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi at voluptates quia corrupti harum qui ipsa libero. Nam, adipisci suscipit?</p>
                                                        <Link to='/plan'>Read more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='w-100 py-4 text-light bg-vision'>
                                <div>
                                    <h1 className='text-center  pt-3 '>OUR TEAM</h1>
                                </div>
                                <div className='row py-5 text-light container m-auto'>
                                    <div className="col-md-6 col-lg-3 col-sm-6 my-3">
                                        <div className='team-image'>
                                            <img alt='About us' src={image1} className='img-responsive img-fluid'/>
                                        </div>
                                        <div className='w-100  team-info-holder p-4'>
                                            <h4 className='py-3'>NKWANTA442</h4>
                                            <div className='link-icons pb-3 m-auto'> 
                                                <a href='facebook.com'><i className='fab fa fa-facebook'></i></a>
                                                <a href='twitter.com'><i className='fab fa fa-twitter '></i></a> 
                                                <a href='linkedin.com'><i className='fab fa fa-linkedin'></i></a>
                                            </div>
                                            <p className='text-secondary team-info'><i className="fas text-danger fa fa-dot-circle-o" aria-hidden='true'></i> Teacher</p>
                                            <p className='text-secondary team-info'><i className="fas text-danger fa fa-phone" aria-hidden='true'></i> 0000 000 000 </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-lg-3 my-3">
                                        <div className='team-image'>
                                                <img alt='About Our Team' src={image1} className='img-responsive w-100 img-fluid'/>
                                            </div>
                                            <div className='w-100 team-info-holder p-4'>
                                                <h4 className='py-3'>NKWANTA442</h4>
                                                <div className='link-icons pb-3 m-auto'> 
                                                    <a href='facebook.com'><i className='fab fa fa-facebook'></i></a>
                                                    <a href='twitter.com'><i className='fab fa fa-twitter '></i></a> 
                                                    <a href='linkedin.com'><i className='fab fa fa-linkedin'></i></a>
                                                </div>
                                                <p className='text-secondary team-info'><i className="fas text-danger fa fa-dot-circle-o" aria-hidden='true'></i> Teacher</p>
                                                <p className='text-secondary team-info'><i className="fas text-danger fa fa-phone" aria-hidden='true'></i> 0000 000 000 </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-lg-3 my-3">
                                        <div className='team-image'>
                                            <img alt='About Our Team' src={image1} className='img-responsive img-fluid'/>
                                        </div>
                                        <div className='w-100 team-info-holder p-4'>
                                            <h4 className='py-3 '>NKWANTA442</h4>
                                            <div className='link-icons pb-3 m-auto'> 
                                                <a href='facebook.com'><i className='fab fa fa-facebook'></i></a>
                                                <a href='twitter.com'><i className='fab fa fa-twitter '></i></a> 
                                                <a href='linkedin.com'><i className='fab fa fa-linkedin'></i></a>
                                            </div>
                                            <p className='text-secondary team-info'><i className="fas text-danger fa fa-dot-circle-o" aria-hidden='true'></i> Teacher</p>
                                            <p className='text-secondary team-info'><i className="fas text-danger fa fa-phone" aria-hidden='true'></i> 0000 000 000 </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-lg-3 my-3">
                                        <div className='team-image'>
                                            <img alt='About Our Team' src={image1} className='img-responsive img-fluid'/>
                                        </div>
                                        <div className='w-100 team-info-holder p-4'>
                                            <h4 className='py-3'>NKWANTA442</h4>
                                            <div className='link-icons pb-3 m-auto'> 
                                                <a href='facebook.com'><i className='fab fa fa-facebook'></i></a>
                                                <a href='twitter.com'><i className='fab fa fa-twitter '></i></a> 
                                                <a href='linkedin.com'><i className='fab fa fa-linkedin'></i></a>
                                            </div>
                                            <p className='text-secondary team-info'><i className="fas text-danger fa fa-dot-circle-o" aria-hidden='true'></i> Teacher</p>
                                            <p className='text-secondary team-info'><i className="fas text-danger fa fa-phone" aria-hidden='true'></i> 0000 000 000 </p>
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

export default About