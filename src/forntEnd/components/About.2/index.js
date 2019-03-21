import React, {Component} from 'react';
import image1 from './../../../image/pexels-photo-1007023.jpeg'
import './style.css';


class About1 extends Component{
    render(){
        return(
            <div>
                <section>
                    <div className='about-school-header-image' style={{backgroundImage:`url(${image1})`,height:'60vh'}}>
                        <div className='h-100 w-100 about-school-header-cover d-flex'>
                            <h1  className='m-auto pl-5 text-warning '>SCHOOL</h1>
                        </div>
                    </div>
                    <div className='show-profile'>

                    </div>
                    <div className='container py-5 mb-2 text-secondary'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, suscipit in provident earum debitis, consequatur error quam nisi ipsum amet animi nesciunt ipsam dolor qui.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptatum fugit soluta repudiandae doloribus quis obcaecati quia facere tempore unde. Totam odio eveniet sint asperiores veniam magni accusantium ab a?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, deserunt quisquam consequatur praesentium facilis deleniti?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatem libero autem nobis quibusdam dolorum adipisci, animi natus praesentium ipsa unde, commodi nesciunt quod ad possimus amet consequuntur. Et, delectus perferendis! Laudantium ipsa explicabo recusandae?</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default About1