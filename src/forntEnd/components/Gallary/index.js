import React, {Component} from 'react';
import image1 from './../../../image/pexels-photo-1007023.jpeg'

class Gallary extends Component{
    render(){
        return(
            <div>
                <section>
                    <div className='row w-100 show-navigation'>
                        <h4 className='my-auto '>About <i className=''></i>GALLARY</h4>
                    </div>
                    <div className='about-school-header-image' style={{backgroundImage:`url(${image1})`}}>
                        <div className='about-school-header-cover row'>
                            <h4  className='m-auto text-light lead'>GALLARY</h4>
                        </div>
                    </div>
                    <div className='container py-5 mb-2 mx-auto row text-secondary'>
                        <div className='col-sm-6 col-md-4 col-lg-3 my-3 gallary '>
                            <div className = 'position-relative' >
                                <img src={image1} alt="" className='gallary-image mx-auto w-100 img-responsive img-fuild' />
                                <div className='d-flex gallary-view position-absolute'> 
                                    <div className='m-auto links'>
                                        <h4 > <i className = 'links fa fa-link  py-2 px-2' > </i></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 my-3 gallary '>
                            < div className = 'position-relative' >
                                <img src={image1} alt="" className='gallary-image mx-auto w-100 img-responsive img-fuild' />
                                <div className='d-flex gallary-view position-absolute'> 
                                    <div className='m-auto links'>
                                        <h4 > <i className = 'links fa fa-link  py-2 px-2' > </i></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className='col-sm-6 col-md-4 col-lg-3 my-3 gallary '>
                            < div className = 'position-relative' >
                                <img src={image1} alt="" className='gallary-image w-100 mx-auto img-responsive img-fuild' />
                                < div className = 'd-flex gallary-view w-100 position-absolute' >
                                   <div className='m-auto links'>
                                        <h4 > <i className = 'links fa fa-link  py-2 px-2' > </i></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className='col-sm-6 col-md-4 col-lg-3 my-3 gallary '>
                            < div className = 'position-relative' >
                                <img src={image1} alt="" className='gallary-image mx-auto w-100 img-responsive img-fuild' />
                                < div className = 'd-flex gallary-view w-100 position-absolute' >
                                    <div className='m-auto links'>
                                        <h4 > <i className = 'links fa fa-link  py-2 px-2' > </i></h4>
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

export default Gallary