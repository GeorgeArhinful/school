import React , {Component} from 'react'
import program from './../../../image/code1.jpg';


class NewsSingle extends Component {
    render(){
        const style={
            borderBottom:'2px solid grey',
            color:'white'
        }
        // const numCircle ={
        //     borderRadius: '50%',
        //     border:'1px solid gold',
        //     color:'gold'
        // }
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
                        <div className='col-lg-8 col-md-8 col-12'>
                            <img alt='News' src={program} className='w-100 img-responsive'/>
                        <div className=' my-3'>
                        
                    
                        <h4 className='my-4 '>Title</h4>
                        <p className='text-secondary mb-4'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laboriosam cum, cupiditate sed omnis eaque! Laudantium vel quo soluta laborum adipisci cum pariatur ipsam at illum, expedita ut, eaque quasi!
                        </p>
                         <p className='text-secondary mb-4'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laboriosam cum, cupiditate sed omnis eaque! Laudantium vel quo soluta laborum adipisci cum pariatur ipsam at illum, expedita ut, eaque quasi!
                        </p>
                        <h5 className='text-orange col-12 mb-3 '>Popular Events</h5>
                        
                    </div>
                        </div>
                        {/* side news */}
                        <div className='col-lg-4 col-md-4 bg-dark p-3 col-12'>
                        { /* Course Features */ }
                            <h2 className='text-light'>Course Features</h2>
                            <hr style={{border:'3px solid gold',width:'10%'}} className='m-0 my-3'></hr>
            
                            <div style={style} className='row pt-3 w-100'>
                                <div className='col-4'> 
                                    <img alt='New' src={program}  className='w-100'/>
                                </div>
                                <div className='col-8'>
                                    <h6>	
                                Dummy text of the printing and typesetting industry
                            <samp className='d-block text-secondary'>27.02.15</samp></h6>
                                </div>
                            </div>
                             <div style={style} className='row pt-3 w-100'>
                                <div className='col-4'> 
                                    <img alt='New' src={program}  className='w-100'/>
                                </div>
                                <div className='col-8'>
                                    <h6>	
                                Dummy text of the printing and typesetting industry
                            <samp className='d-block  text-secondary'>27.02.15</samp></h6>
                                </div>
                            </div>
                             <div style={style} className='row pt-3 w-100'>
                                <div className='col-4'> 
                                    <img alt='New' src={program}  className='w-100'/>
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
                                <lu>
                                    <li><b>Admition</b></li>
                                    <li><b>Employment</b></li>
                                    <li><b>Education</b></li>
                                    <li><b>Campus</b></li>
                                </lu>

                            { /* Category */ }
                            { /* Sponsor Add  */ }
                            <h2 className='text-light py-3'>Sponsor Add</h2>
                            <hr style={{border:'3px solid gold',width:'10%'}} className='m-0 my-3'></hr>
                            
                             <div className='w-100'> 
                                <img alt='New' src={program}  className='w-100'/>
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

export default NewsSingle