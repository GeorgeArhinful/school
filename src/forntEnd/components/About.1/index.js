import React, {Component} from 'react';
import image1 from './../../../image/pexels-photo-1007023.jpeg';
import './style.css';
import {Link} from 'react-router-dom';


import program from './../../../image/code1.jpg';


class About1 extends Component{
    render(){
        const style={
            borderBottom:'2px solid grey',
            color:'white'
        }

        return(
            <div style={{backgroundColor:'rgb(186, 187, 187,0.5)'}} className='pb-5'>
               <section className='mb-5'>
                    <div className='row w-100 show-navigation'>
                        <h4 className='my-auto ml-5'>Home <i className=''></i> / Program / {this.props.match.params.category}</h4>
                    </div>
                    <div className='about-school-header-image' style={{backgroundImage:`URL(${program})`}}>
                        <div className='about-school-header-cover row'>
                            <h1 className = 'm-auto text-light pl-5 lead' >{this.props.match.params.category} </h1>
                        </div>
                    </div>
               </section>
               <section className=' container-fluid mt-5 bg-light p-5'>
                    <div className='row'>
                        <section className='col-lg-8 col-md-8 bg-dark p-3 col-12'>
                            <div className='about-school-header-image' style={{backgroundImage:`url(${image1})`,height:'60vh'}}>
                                <div className='h-100 w-100 about-school-header-cover d-flex'>
                                    <h1  className='m-auto pl-5 text-warning '>SCHOOL</h1>
                                </div>
                            </div>
                            <div className='show-profile'>

                            </div>
                            <div className='container py-5 mb-2 text-light'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, suscipit in provident earum debitis, consequatur error quam nisi ipsum amet animi nesciunt ipsam dolor qui.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptatum fugit soluta repudiandae doloribus quis obcaecati quia facere tempore unde. Totam odio eveniet sint asperiores veniam magni accusantium ab a?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, deserunt quisquam consequatur praesentium facilis deleniti?</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatem libero autem nobis quibusdam dolorum adipisci, animi natus praesentium ipsa unde, commodi nesciunt quod ad possimus amet consequuntur. Et, delectus perferendis! Laudantium ipsa explicabo recusandae?</p>
                            </div>
                  
                        </section>
                        
                
                        
                        {/* side news */}
                        <div className='col-lg-4 col-md-4 bg-dark p-3 col-12'>
                        { /* Course Features */ }
                            <h2 className='text-light'>Course Features</h2>
                            <hr style={{border:'3px solid gold',width:'10%'}} className='m-0 my-3'></hr>
            
                            <div style={style} className='row pt-3 w-100'>
                                <div className='col-4'> 
                                    <img alt='About' src={program}  className='w-100'/>
                                </div>
                                <div className='col-8'>
                                    <h6>	
                                Dummy text of the printing and typesetting industry
                            <samp className='d-block text-secondary'>27.02.15</samp></h6>
                                </div>
                            </div>
                             <div style={style} className='row pt-3 w-100'>
                                <div className='col-4'> 
                                    <img alt='About' src={program}  className='w-100'/>
                                </div>
                                <div className='col-8'>
                                    <h6>	
                                Dummy text of the printing and typesetting industry
                            <samp className='d-block  text-secondary'>27.02.15</samp></h6>
                                </div>
                            </div>
                             <div style={style} className='row pt-3 w-100'>
                                <div className='col-4'> 
                                    <img  alt='About' src={program}  className='w-100'/>
                                </div>
                                <div className='col-8'>
                                    <h6>	
                                Dummy text of the printing and typesetting industry
                            <samp className='d-block text-secondary'>27.02.15</samp></h6>
                                </div>
                            </div>
                            { /* Course Features */ }
                            { /* Category */ }
                            
                            <h2 className='text-light py-3'>Category</h2>
                            <hr style={{border:'3px solid gold',width:'10%'}} className='m-0 my-3'></hr>
                            <p className='my-1'><b><Link to='/alumni' className='text-secondary'>ALUMNI</Link></b></p>
                            <p className='my-1'><b><Link to='/staff' className='text-secondary'>FACULTY & STAFF</Link></b></p>
                            <p className='my-1'><b><Link to='/achivement' className='text-secondary'>ACHIVEMENT&INNOVATION</Link></b></p>
                            <p className='my-1'><b><Link to='/news/1' className='text-secondary'>News</Link></b></p>
                            { /* Category */ }
                            { /* Sponsor Add  */ }
                            <h2 className='text-light py-3'>Sponsor Add</h2>
                            <hr style={{border:'3px solid gold',width:'10%'}} className='m-0 my-3'></hr>
                            
                             <div className='w-100'> 
                                <img alt='Sponser' src={program}  className='w-100'/>
                            </div>
                            { /* Sponsor Add  */ }
                        </div>
                        { /* side news */ }
            
                    </div>
     
               </section>
            </div>
        )
    }
}

export default About1


