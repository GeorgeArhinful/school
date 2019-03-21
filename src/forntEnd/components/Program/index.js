import React, {Component} from 'react';
import program from './../../../image/code1.jpg';
import Toggle from '../Toggle';

class Program extends Component{
    render(){
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
                    <div className='contraine container py-5 m-auto mb-2  program text-secondary'>
                   
                           <Toggle className='col-12' text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laboriosam cum, cupiditate sed omnis eaque! Laudantium vel quo soluta laborum adipisci cum pariatur ipsam at illum, expedita ut, eaque quasi!'} header={'Lorem ipsum, dolor sit amet'} link={'/program/6'}/>
                        <Toggle className='col-12' text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laboriosam cum, cupiditate sed omnis eaque! Laudantium vel quo soluta laborum adipisci cum pariatur ipsam at illum, expedita ut, eaque quasi!'} header={'Lorem ipsum, dolor sit amet'} link={'/program/7'}/>
                        <Toggle className='col-12' text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laboriosam cum, cupiditate sed omnis eaque! Laudantium vel quo soluta laborum adipisci cum pariatur ipsam at illum, expedita ut, eaque quasi!'} header={'Lorem ipsum, dolor sit amet'}link={'/program/8'}/>                                <Toggle className='col-12' text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laboriosam cum, cupiditate sed omnis eaque! Laudantium vel quo soluta laborum adipisci cum pariatur ipsam at illum, expedita ut, eaque quasi!'} header={'Lorem ipsum, dolor sit amet'} link={'/program/6'}/>
                        <Toggle className='col-12' text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laboriosam cum, cupiditate sed omnis eaque! Laudantium vel quo soluta laborum adipisci cum pariatur ipsam at illum, expedita ut, eaque quasi!'} header={'Lorem ipsum, dolor sit amet'} link={'/program/7'}/>
                        <Toggle className='col-12' text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laboriosam cum, cupiditate sed omnis eaque! Laudantium vel quo soluta laborum adipisci cum pariatur ipsam at illum, expedita ut, eaque quasi!'} header={'Lorem ipsum, dolor sit amet'}link={'/program/8'}/>                        
                       
                        

                    </div>
                </section>
            </div>
        )
    }
}

export default Program