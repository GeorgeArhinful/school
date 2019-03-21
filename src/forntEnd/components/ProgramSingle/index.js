import React , {Component} from 'react';
import program from './../../../image/code1.jpg';
import {Link} from 'react-router-dom';


class ProgramSingle extends Component{
    render(){
        const style={
            borderBottom:'2px solid grey',
            color:'white'
        }
        const numCircle ={
            borderRadius: '50%',
            border:'1px solid gold',
            color:'gold'
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
               <section className=' container mt-5 bg-light p-5'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-8 col-12'>
                            <img alt='Program' src={program} className='w-100 img-responsive'/>
                        </div>
                        <div className='col-lg-4 col-md-4 bg-dark p-3 col-12'>
                            <h2 className='text-light'>Course Features</h2>
                            <hr style={{border:'3px solid gold',width:'10%'}} className='m-0 my-3'></hr>
                            <p style={style} className='pb-3'>Lectures  <span className='position-absolute' style={{right:'30px'}}>10</span></p>
                            <p style={style} className='pb-3'>Quizzes <span className='position-absolute' style={{right:'30px'}}>50</span></p>
                            <p style={style} className='pb-3'>Duration  <span className='position-absolute' style={{right:'30px'}}>3years</span></p>
                            <p style={style} className='pb-3'>Skill Level  <span className='position-absolute' style={{right:'30px'}}>Beginner</span></p>
                            <p style={style} className='pb-3'>Students  <span className='position-absolute' style={{right:'30px'}}>30</span></p>
                            <p style={style} className='pb-3'>Certificate  <span className='position-absolute' style={{right:'30px'}}>Yes</span></p>
                            <p  className='text-light mb-0'>Assessments <span className='position-absolute' style={{right:'30px'}}>Yes</span></p>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-lg-8 col-md-8 col-12 w-100 row'>
                            <div className="col-12 col-md-4 row m-0" >
                                <div className='col-5'>
                                    <img alt='Program' src={program} style={{borderRadius:'50%'}} className='w-100'/>
                                </div>
                                <div className='col-7'> 
                                    <h6 className=''>TEACHER:<samp className='text-secondary d-block'>Nkwanta Boi</samp></h6>
                                    
                                </div>
                            </div>
                            <div className="col-12 col-md-4 row" >
                                <div className='col-5 col-md-3'>
                                    <i style={{borderRadius:'50%'}} className='fa-2x text-warning w-100 fa fa-bolt'></i>
                                </div>
                                <div className='col-7 col-md-9'> 
                                    <h6 className=''>CATEGORY:<samp className='text-secondary d-block'>Web Designi</samp></h6>
                                    
                                </div>
                            </div>
                            <div className="col-12 col-md-4 row" >
                                <div className='col-5 col-md-3'>
                                    <i style={{borderRadius:'50%'}} className='fa-2x text-warning w-100 fa fa-users'></i>
                                </div>
                                <div className='col-7 col-md-9'> 
                                    <h6 className=''>ENROLLED:<samp className='text-secondary d-block'>302 Student Enrolled</samp></h6>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12 row'>
                            <h4 className='text-center m-auto'>$300.00 <Link to={`/forms/${this.props.match.params.category}`} className=' btn bg-warning small p-2' style={{border:'0'}}>Enroll Now</Link></h4>
                        </div>
                    </div>
                    <div>
                        <h4 className='my-4'>SUBJECT NAME</h4>
                        <p className='text-secondary mb-4'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laboriosam cum, cupiditate sed omnis eaque! Laudantium vel quo soluta laborum adipisci cum pariatur ipsam at illum, expedita ut, eaque quasi!
                        </p>
                         <p className='text-secondary mb-4'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laboriosam cum, cupiditate sed omnis eaque! Laudantium vel quo soluta laborum adipisci cum pariatur ipsam at illum, expedita ut, eaque quasi!
                        </p>
                        <h5 className='text-warning mb-2'>Course Requirement</h5>
                        <p className='ml-4'><samp className='p-1 mr-4' style={numCircle}>01</samp>World's Fast Online Courses.</p>
                        <p className='ml-4'><samp className='p-1 mr-4' style={numCircle}>02</samp>Over 34 lectures and 99M hours of content!
.</p>
                        <p className='ml-4'><samp className='p-1 mr-4' style={numCircle}>03</samp>Learn Web Programming at your home!</p>
                        <p className='ml-4'><samp className='p-1 mr-4' style={numCircle}>04</samp>Best Online tutorial platform</p>
                        <p className='ml-4'><samp className='p-1 mr-4' style={numCircle}>05</samp>With Available zero to hero course.</p>
                        <p className='ml-4'><samp className='p-1 mr-4' style={numCircle}>06</samp>We have 300M+ Active Student.</p>
                        <p className='ml-4'><samp className='p-1 mr-4' style={numCircle}>07</samp>Improve your skill with learning our courses.</p>
                        
                    </div>
               </section>
            </div>
        )
    }
}

export default ProgramSingle