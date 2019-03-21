import React, { Component } from 'react';
import image1 from './../../../image/pexels-photo-1007023.jpeg'

 class Staff extends Component {
  render() {
    return (
      <div>
        <div>
            <hr className='p-0 my-1'/>
             <section className='w-100 py-4 text-light bg-vision'>
                                <div>
                                    <h1 className='text-center  pt-3 '>OUR <samp className='text-orange'><b>TEAM</b></samp></h1>

                                    <p className='text-secondary text-center w-75 mx-auto mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consectetur sed quae officia praesentium voluptatum esse nostrum aliquam sequi ipsum voluptatem vero ipsam nemo voluptas reiciendis debitis enim, unde tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consectetur sed quae officia praesentium voluptatum</p>
                                </div>
                                <div className='row py-5 text-light container m-auto'>
                                    <div className="col-md-6 col-lg-3 col-sm-6 my-3">
                                        <div className='team-image'>
                                            <img alt='team' src={image1} className='img-responsive img-fluid'/>
                                        </div>
                                        <div className='w-100  team-info-holder p-4'>
                                            <h4 className='py-3'>NKWANTA442</h4>
                                            <div className='link-icons pb-3 m-auto'> 
                                                <a href='facebook.com'><i className='text-orange fab fa fa-facebook'></i></a>
                                                <a href='twitter.com'><i className='text-orange fab fa fa-twitter '></i></a> 
                                                <a href='linkedin.com'><i className='text-orange fab fa fa-linkedin'></i></a>
                                            </div>
                                            <p className='text-secondary team-info'><i className="fas text-danger fa fa-dot-circle-o" aria-hidden='true'></i> Teacher</p>
                                            <p className='text-secondary team-info'><i className="fas text-danger fa fa-phone" aria-hidden='true'></i> 0000 000 000 </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-lg-3 my-3">
                                        <div className='team-image'>
                                                <img alt='Team' src={image1} className='img-responsive w-100 img-fluid'/>
                                            </div>
                                            <div className='w-100 team-info-holder p-4'>
                                                <h4 className='py-3'>NKWANTA442</h4>
                                                <div className='link-icons pb-3 m-auto'> 
                                                    <a href = 'facebook.com' > < i className = 'text-orange fab fa fa-facebook' > </i></a >
                                                    <a href='twitter.com'><i className='text-orange fab fa fa-twitter '></i></a> 
                                                    <a href='linkedin.com'><i className='text-orange fab fa fa-linkedin'></i></a>
                                                </div>
                                                <p className='text-secondary team-info'><i className="fas text-danger fa fa-dot-circle-o" aria-hidden='true'></i> Teacher</p>
                                                <p className=' text-secondary team-info'>
                                                <i className="fas text-danger fa fa-phone" aria-hidden='true'></i> 0000 000 000 </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-lg-3 my-3">
                                        <div className='team-image'>
                                            <img alt='Team' src={image1} className='img-responsive img-fluid'/>
                                        </div>
                                        <div className='w-100 team-info-holder p-4'>
                                            <h4 className='py-3 '>NKWANTA442</h4>
                                            <div className='link-icons pb-3 m-auto'> 
                                                <a href='facebook.com'><i className='text-orange fab fa fa-facebook'></i></a>
                                                <a href='twitter.com'><i className='text-orange fab fa fa-twitter '></i></a> 
                                                <a href='linkedin.com'><i className='text-orange fab fa fa-linkedin'></i></a>
                                            </div>
                                            <p className='text-secondary team-info'><i className="fas text-danger fa fa-dot-circle-o" aria-hidden='true'></i> Teacher</p>
                                            <p className='text-secondary team-info'><i className="fas text-danger fa fa-phone" aria-hidden='true'></i> 0000 000 000 </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-lg-3 my-3">
                                        <div className='team-image'>
                                            <img alt='Team' src={image1} className='img-responsive img-fluid'/>
                                        </div>
                                        <div className='w-100 team-info-holder p-4'>
                                            <h4 className='py-3'>NKWANTA442</h4>
                                            <div className='link-icons pb-3 m-auto'> 
                                                <a href='facebook.com'><i className='text-orange fab fa fa-facebook'></i></a>
                                                <a href='twitter.com'><i className='text-orange fab fa fa-twitter '></i></a> 
                                                <a href='linkedin.com'><i className='text-orange fab fa fa-linkedin'></i></a>
                                            </div>
                                            <p className='text-secondary team-info'><i className="fas text-danger fa fa-dot-circle-o" aria-hidden='true'></i> Teacher</p>
                                            <p className='text-secondary team-info'><i className="fas text-danger fa fa-phone" aria-hidden='true'></i> 0000 000 000 </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
     
        </div> 
    </div>
    )
  }
}


export default Staff