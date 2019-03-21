import React, { Component } from 'react';
import './style.css';
import {Link} from 'react-router-dom';



 class Toggle extends Component {
   constructor(){
     super();
     this.state={
      toggle: false
     };
     this.handleToggle = this.handleToggle.bind(this)
   }
   handleToggle(e){
    e.preventDefault();
      this.state.toggle?this.setState({toggle:false}) : this.setState({toggle:true});
   }
  render() {
    return (
      <div>
        <div className='toggle p-2'>
            <p onClick={this.handleToggle} className='toggle-head mb-1'>{this.props.header}</p>
            {
            this.state.toggle && (<p className='w-100 text-secondary'>{this.props.text}<samp><Link to={this.props.link}>read more</Link></samp></p>)
            }
        </div>
      </div>
    )
  }
}

export default Toggle
