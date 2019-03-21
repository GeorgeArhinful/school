import React, { Component } from 'react';
import './App.css';
import NavbarContainer from './forntEnd/components/Navbar';
import HomePage from './forntEnd/components/homepage';
import Footer from './forntEnd/components/Footer';
import Contact from './forntEnd/components/Contact';
import About from './forntEnd/components/About';
import About1 from './forntEnd/components/About.1';
import {Route} from 'react-router-dom'
import Services from './forntEnd/components/Services';
import Program from './forntEnd/components/Program';
import Admission from './forntEnd/components/Admission';
import Gallary from './forntEnd/components/Gallary';
import ProgramSingle from './forntEnd/components/ProgramSingle';
import Forms from './forntEnd/components/Forms';
import NewsSingle from './forntEnd/components/NewsSingle';
import Form from './forntEnd/components/Form';
import SIgnup from './forntEnd/components/SIgnup/SIgnup.js';
import AlumniContainer from './forntEnd/components/Alumni';
import StaffContainer from './forntEnd/components/Staff';
import AchivementContainer from './forntEnd/components/Achivement/index.js';

class App extends Component {
  render() {
    return (
      <div className="">
      <NavbarContainer/>
      <Route path='/' component={HomePage} exact/>
      <Route path='/contact' component={Contact} exact/>
      <Route path='/about/:id' component={About1} exact/>
      <Route path='/plan' component={Services} exact/>
      <Route path='/about' component={About} exact/> 
      <Route path='/program' component={Program} exact/>
      <Route path='/admission' component={Admission} exact/>
      <Route path='/gallary' component={Gallary} exact/>
      <Route path='/program/:category' component={ProgramSingle} exact/>
      <Route path='/news/:category' component={NewsSingle} exact/>
      <Route path='/forms/:course' component={Forms} exact/>
      <Route path='/login' component={Form} exact/>
      <Route path='/signup/:status' component={SIgnup} exact/>
      <Route path='/alumni' component={AlumniContainer}/>
      <Route path='/staff' component={StaffContainer}/>
      <Route path='/achivement' component={AchivementContainer}/>
      <Footer/>
 
      </div>
    );
  }
}

export default App;
