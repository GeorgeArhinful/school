import React, {Component} from 'react';
import image1 from './../../../image/pexels-photo-1007023.jpeg';
import program from './../../../image/code1.jpg';
import {Link} from 'react-router-dom';

class Program extends Component{
    render(){
        const style={
            minHeight: 'inherit',
        }
        return(
            <div>
                <section>
                    <div className='row w-100 show-navigation'>
                        <h4 className='my-auto ml-5'>HOME / PROGRAM</h4>
                    </div>
                    <div className='about-school-header-image' style={{backgroundImage:`URL(${program})`}}>
                        <div className='about-school-header-cover row'>
                            <h1 className = 'm-auto text-light pl-5 lead' > PROGRAM </h1>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <h2 className='pt-5 pb-2 pl-5 text-black text-center mb-0'>Popular <samp className='text-orange'>Courses</samp> We Offer</h2>
                        <hr style={{border:'3px solid black',width:'10%'}}></hr>
                          <p className='w-50 text-center m-auto text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit perspiciatis consequatur iure ab quisquam, magnam omnis pariatur velit praesentium. Quaerat corrupti minus quod eaque.</p>
                    </div>
                    <div className='contraine container py-5 mx-auto mb-2 row program text-secondary'>
                        <div className='col-lg-4 col-md-6 col-12  h-100'>
                            <div className='course-div pb-2'>
                                <div className='course-img-div position-relative' style={style}>
                                    <img src={image1} className='h-100 w-100 '/>
                                    <div className='course-img-cover-div position-absolute w-100 h-100 '>
                                        <div className = 'd-flex w-100 h-100 link-icon'><Link className = 'm-auto' to={`/program/1`}> <i className = 'm-auto fa fa-link fa-2x text-light p-3'></i></Link></div>
                                    </div>
                                </div>
                                <div className='course-text-div'>
                                    <h5 className='text-warning mt-3 mb-0 px-3'><b>science</b></h5>
                                    <h3 style={{color:'black'}} className='mb-4 px-3'>Software Engineer</h3>
                                    <h6 className='text-secondary text-justify px-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis excepturi magnam perferendis odio accusantium molestiae laborum, cupiditate tempora vel. Excepturi consequatur voluptates alias laboriosam perferendis.</h6>
                                    <hr className='mb-0'></hr>
                                    <div className='px-3 my-3'>
                                        <h5 className='px-3  w-100 '><b> <i className='fa fa-users'></i> 20 Seat <i className='fa fa-clock-o ml-2'></i> 2years <samp className='ml-3 py-1 px-2 bg-orange'>$100</samp></b></h5>
                                    </div>
                                </div>
                                 
                            </div>
                        </div>
                         <div className='col-lg-4 col-md-6 col-12  h-100'>
                            <div className='course-div pb-2'>
                                <div className='course-img-div position-relative' style={style}>
                                    <img src={image1} className='h-100 w-100 '/>
                                    <div className='course-img-cover-div position-absolute w-100 h-100 '>
                                        <div className = 'd-flex w-100 h-100 link-icon'><Link className = 'm-auto' to='/program/2'> <i className = 'm-auto fa fa-link fa-2x text-light p-3'></i></Link></div>
                                    </div>
                                </div>
                                <div className='course-text-div'>
                                    <h5 className='text-warning mt-3 mb-0 px-3'><b>science</b></h5>
                                    <h3 style={{color:'black'}} className='mb-4 px-3'>Software Engineer</h3>
                                    <h6 className='text-secondary text-justify px-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis excepturi magnam perferendis odio accusantium molestiae laborum, cupiditate tempora vel. Excepturi consequatur voluptates alias laboriosam perferendis.</h6>
                                    <hr className='mb-0'></hr>
                                    <div className='px-3 my-3'>
                                        <h5 className='px-3  w-100 '><b> <i className='fa fa-users'></i> 20 Seat <i className='fa fa-clock-o ml-2'></i> 2years <samp className='ml-3 py-1 px-2 bg-orange'>$100</samp></b></h5>
                                    </div>
                                </div>
                                 
                            </div>
                        </div>
                         <div className='col-lg-4 col-md-6 col-12  h-100'>
                            <div className='course-div pb-2'>
                                <div className='course-img-div position-relative' style={style}>
                                    <img src={image1} className='h-100 w-100 '/>
                                    <div className='course-img-cover-div position-absolute w-100 h-100 '>
                                        <div className = 'd-flex w-100 h-100 link-icon'><Link className = 'm-auto' to='/program/3'> <i className = 'm-auto fa fa-link fa-2x text-light p-3'></i></Link></div>
                                    </div>
                                </div>
                                <div className='course-text-div'>
                                    <h5 className='text-warning mt-3 mb-0 px-3'><b>science</b></h5>
                                    <h3 style={{color:'black'}} className='mb-4 px-3'>Software Engineer</h3>
                                    <h6 className='text-secondary text-justify px-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis excepturi magnam perferendis odio accusantium molestiae laborum, cupiditate tempora vel. Excepturi consequatur voluptates alias laboriosam perferendis.</h6>
                                    <hr className='mb-0'></hr>
                                    <div className='px-3 my-3'>
                                        <h5 className='px-3  w-100 '><b> <i className='fa fa-users'></i> 20 Seat <i className='fa fa-clock-o ml-2'></i> 2years <samp className='ml-3 py-1 px-2 bg-orange'>$100</samp></b></h5>
                                    </div>
                                </div>
                                 
                            </div>
                        </div>
                         <div className='col-lg-4 col-md-6 col-12  h-100'>
                            <div className='course-div pb-2'>
                                <div className='course-img-div position-relative' style={style}>
                                    <img src={image1} className='h-100 w-100 '/>
                                    <div className='course-img-cover-div position-absolute w-100 h-100 '>
                                        <div className = 'd-flex w-100 h-100 link-icon'><Link className = 'm-auto' to='/program/4'> <i className = 'm-auto fa fa-link fa-2x text-light p-3'></i></Link></div>
                                    </div>
                                </div>
                                <div className='course-text-div'>
                                    <h5 className='text-warning mt-3 mb-0 px-3'><b>science</b></h5>
                                    <h3 style={{color:'black'}} className='mb-4 px-3'>Software Engineer</h3>
                                    <h6 className='text-secondary text-justify px-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis excepturi magnam perferendis odio accusantium molestiae laborum, cupiditate tempora vel. Excepturi consequatur voluptates alias laboriosam perferendis.</h6>
                                    <hr className='mb-0'></hr>
                                    <div className='px-3 my-3'>
                                        <h5 className='px-3  w-100 '><b> <i className='fa fa-users'></i> 20 Seat <i className='fa fa-clock-o ml-2'></i> 2years <samp className='ml-3 py-1 px-2 bg-orange'>$100</samp></b></h5>
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

export default Program