import React,{Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import logo from './../../../image/logo.png';

class NavbarContainer extends Component{
    render(){
        return <div>
            <div className="row py-1 px-4">
              <h5 className = "col-12 col-lg-4 my-auto mr-auto " >
                Welcome to<samp className='text-orange'> Nkwanta Univercity</samp>
              </h5>
              <hr className='w-100' style={{border:'0.5px solid black'}}/>
              <h6 className="ml-auto mr-4 col-lg-2 col-md-3 col-12">
                < i className = "fa fa-clock-o mr-2 text-orange" />
                <b>WORKING TIME:</b>
                <samp className="text-secondary d-block small">
                  Monday - Friday: 08 AM - 06 PM
                </samp>{" "}
              </h6>
                < h6 className = "mr-4 col-12 col-md-3 col-lg-2" >
                <i className="fa fa-map-marker mr-2 text-orange" />
                <b>FIND US:</b>
                <samp className="text-secondary d-block small ">
                  40 Baria Street 133/2, New York City, US
                </samp>
              </h6>
                < div className = "col-12 col-md-3 col-lg-3" >
                  <Link to = "/admission"
                  className = " text-decoration-none text-orange my-auto mr-2" >
                  {" "}
                  Apply Now
                </Link>
                  <Link to = "/login"
                  className = "text-decoration-none text-orange my-auto mr-2" >
                    {" "}
                  Login
                  </Link>
                  

                </div>
            </div>
            <div className="row mx-auto pr-3 bg-vision text-light py-3">
              <h1 className="mx-auto col-12 col-md-3 text-warning">
                <img alt='Logo' src={logo} />
              </h1>
              <div className="my-auto  px-2 ml-auto mylinks">
                <div>
                  <a className='text-orange'><samp className='cursor'> <i className='fa fa-home mr-2 text-orange '></i>Home</samp></a>
                  <div className="mx-auto bg-dark lost py-3 px-4">
                    <p className='my-1'><Link to="/" className="d-block nav-Link"><i className='fa fa-home mr-2'></i>Home</Link></p>
                    <p className='my-2'><a href='/' className="d-block">george</a></p>
                    <p className='my-2'><a href='/' className="d-block">george</a></p>
                    <p className='my-2'><a href='/' className="d-block">george</a></p>
                    <p className='my-2'><a href='/' className="d-block">george</a></p>
                  </div>
                </div>
              </div>

              <div className="my-auto px-2">
                <Link to="/about" className="text-orange nav-Link">
                  About
                </Link>
              </div>
              <div className="my-auto px-2">
                <Link to="/admission" className="text-orange my-auto px-2 nav-Link">
                  Admission
                </Link>
              </div>
              <div className="my-auto px-2">
                <Link to="/contact" className="text-orange my-auto px-2 nav-Link">
                  Contact
                </Link>
              </div>
              <div className="my-auto px-2">
                <Link to="/program" className="text-orange my-auto px-2 nav-Link">
                  Program
                </Link>
              </div>
            </div>
          </div>;
    }
}
export default NavbarContainer