import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import image from './../../../image/pexels-photo-1007025.jpeg';

 class Alumni extends Component {
  render() {
    return (
      <div>
            <section className='w-100 mt-5'>
                <h2 className='ml-5 text-center'>ALUMNI</h2>
                <hr className='w-25 m-auto pb-3'></hr>
                <p className='text-center mb-4 pb-3 w-50 m-auto text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi provident magni nam voluptatum doloremque aliquid fuga vitae, maiores id facilis?</p>
                <div className='row m-auto container'>
                    <div className="col-sm-6 my-3 col-md-4 col-lg-3">
                        <div>
                            <img src={image}  className='img-responsive img-fluid' alt=""/>
                        </div>
                        <div className='py-3'>
                            <h5 className='text-secondary'><b>Lorem amet consectetur</b></h5>
                            <p className='text-black  small mb-1'><b><i className='fa fa-calendar text-warning'></i> 05 june 2010  <i class="fa fa-graduation-cap ml-2 text-warning"></i>S. A. T</b></p>
                            <p className='text-justify text-secondary pb-5 pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione praesentium inventore mollitia dolorum aliquam non reiciendis possimus?</p>
                            <Link to='/about/name' className='p-2 bg-orange text-light'>Read More</Link>
                        </div>
                    </div>
                    <div className="col-sm-6 my-3 col-md-4 col-lg-3">
                        <div>
                            <img src={image}  className='img-responsive img-fluid' alt=""/>
                        </div>
                        <div className='py-3 '>
                            <h5 className='text-secondary'><b>Lorem amet consectetur</b></h5>
                            <p className='text-black  small mb-1'><b><i className='fa fa-calendar text-warning'></i> 05 june 2010  <i class=" text-warning fa fa-graduation-cap ml-2"></i> M. T. C</b></p>
                            <p className='text-secondary text-justify pb-5 pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione praesentium inventore mollitia dolorum aliquam non reiciendis possimus?</p>
                            <Link to='/about/name' className='p-2 bg-orange text-light'>Read More</Link>
                        </div>
                    </div>
                    <div className="col-sm-6 my-3 col-md-4 col-lg-3">
                        <div>
                            <img src={image}  className='img-responsive img-fluid' alt=""/>
                        </div>
                        <div className='py-3'>
                            <h5 className='text-secondary'><b>Lorem amet consectetur</b></h5>
                            <p className='text-black  small mb-1'><b><i className='fa fa-calendar text-warning'></i> 05 june 2010  <i class="text-warning fa fa-graduation-cap ml-2 text-warning"></i> E-Maths</b></p>
                            <p className='text-secondary text-justify pb-5 pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione praesentium inventore mollitia dolorum aliquam non reiciendis possimus?</p>
                            <Link to='/about/name' className='p-2 bg-orange text-light'>Read More</Link>
                        </div>
                    </div>
                    <div className="col-sm-6 my-3 col-md-4 col-lg-3">
                        <div>
                            <img src={image}  className='img-responsive img-fluid' alt=""/>
                        </div>
                        <div className='py-3'>
                            <h5 className='text-secondary'><b>Lorem amet consectetur</b></h5>
                            <p className='text-black small mb-1'><b><i className='fa fa-calendar text-warning'></i> 05 june 2010  <i class="fa fa-graduation-cap ml-2 text-warning"></i> English</b></p>
                            <p className='text-secondary pb-5 text-justify pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione praesentium inventore mollitia dolorum aliquam non reiciendis possimus?</p>
                            <Link to='/about/name' className='p-2 bg-orange text-light'>Read More</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
  }
}


export default Alumni