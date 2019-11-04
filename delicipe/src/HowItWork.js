import React from 'react';
import './HowItWork.css';
import Taskbar from './taskbar';
import HowItWork from '../picture/How_It_Work.svg';

class How_It_Work extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
    }
  render() {
    return (
      <div className='How_It_Work'>
        <Taskbar/>
        <div className='Picture-Box'></div>
        <img src = {HowItWork} className='Pic'/>
      </div>
    )
  }
}
  
export default How_It_Work;
