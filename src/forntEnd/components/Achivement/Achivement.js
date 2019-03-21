import React, { Component } from 'react';
import './style.css';
import {Link} from 'react-router-dom'

 class Achivement extends Component {
  render() {
    return (
      <div>
         <section className='py-5'>
                    <div className='py-5'>
                        <h2 className='text-center'>Our Achivement</h2>
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
                    </div>
                </section>
          
      </div>
    )
  }
}

export default Achivement