import React, {Component} from 'react';
import logo from './../../../image/logo.png';
import {Link} from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <div>
                <section>
                    <div className='row bg-danger py-4'>
                    <h1 className='m-auto text-light lead'>INSPIRING GREATNESS</h1>
                    </div>
                </section>
                < footer className = 'w-100 bg-vision text-light' >
                    <div className="container py-3">
                        <div className="row mx-auto w-75">
                            <div className="col"><a href='/'>Home</a></div>
                            <div className="col"><Link className='text-white'  to='/about'>About</Link></div>
                            <div className="col"><Link className='text-white'  to='/service'>Services</Link></div>
                            <div className="col"><Link className='text-white' to='/gallary' >Gallary</Link></div>
                            <div className="col"><Link className='text-white' to='/contact'>Contact</Link></div>
                        </div>
                        <hr className='bg-secondary w-100'/>
                        <div className="row pt-3 pb-4 footer-links">
                            <div className="col-md-6 col-lg-2">
                                <h5>Website</h5>
                                <h6  className=''><b><a href='/' className='text-secondary'>accessibility</a></b></h6>
                                <p  className=''><b><a href='/' className='text-secondary'>sitemap</a></b></p>
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <h5>About</h5>
                               <p className=''><b><Link to='/about' className='text-secondary'>School</Link></b></p>
                               <p className=''><b><Link to='/program' className='text-secondary'>Program outLine</Link></b></p>
                               <p className=''><b><Link to='/admission' className='text-secondary'>Admission</Link></b></p>
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <h5>Quick Navigate</h5>
                              <p className=''><b><Link to='/alumni' className='text-secondary'>ALUMNI</Link></b></p>
                              <p className=''><b><Link to='/staff' className='text-secondary'>FACULTY & STAFF</Link></b></p>
                              <p className=''><b><Link to='/achivement' className='text-secondary'>ACHIVEMENT&INNOVATION</Link></b></p>
                              <p className=''><b><Link to='/news/1' className='text-secondary'>News</Link></b></p>
                            </div>
                            <div className="col-md-6 col-lg-3">
                               <a href='facebook.com'><i className='text-orange fa fa-3x mx-2 fa-facebook-official'></i></a>
                               <a href='instagram.com'><i className='text-orange fa fa-3x mx-2 fa-instagram'></i></a>
                               <a href='linkedin.com'><i className='text-orange fa fa-3x mx-2 fa-linkedin-square'></i></a>
                               <a href='twitter.com'><i className='text-orange fa fa-3x mx-2 fa-twitter-square'></i></a>
                               <a href='youtube.com'><i className='text-orange fa fa-3x mx-2 fa-youtube-play'></i></a>
                               <a href='music.com'><i className='text-orange fa fa-3x mx-2 fa-music'></i></a>
                            </div>
                            <div className="col-md-6 col-lg-3 d-flex">
                                <a href='/' className='m-auto'><img alt='Logo' src={logo}></img></a>
                            </div>
                        </div>
                        <hr className='bg-secondary w-100 '/>
                        <div className="agileits_w3layouts-copyright ">
			                <p className=''>© 2018 Success path. All Rights Reserved | Design by
                                <a href="https://georgearhinful.github.io/portfolio/" target="=_blank" className='text-warning'> NkwantaDev </a>
			                </p>
		                </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer