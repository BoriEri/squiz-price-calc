import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentsInput from './UIComponents/StudentsInput';
import StudysetInput from './UIComponents/StudysetInput';
import UserOutput from './UIComponents/UserOutput';

class App extends Component {
  state = {
    unit: 'USD',
    timeframe: 'year',
    studysets: 0,
    students: 0,
}

setStudysetsChangeState = (newStudysets) => {
 this.setState({
    studysets: newStudysets,

 })
}

setStudentsChangeState = (newStudents) => {
 this.setState({
    students: newStudents
 })
}

studysetsChangedHandler = (event) => {
 console.log('event 1: ', event.target.value);
 this.setState( {
    studysets: event.target.value,
 } )
}

studentsChangedHandler = (event) => {
 console.log('event 2: ', event.target.value);
 this.setState( {   
    students: event.target.value
 } )
}

calculateTotalAmount = () => { 
 return parseInt(this.state.studysets, 10)*0.1452 + parseInt(this.state.students, 10)*0.08*12; 
} 

render() {
 return (
   <div className="App">
     <div>
     <StudentsInput changed={this.studentsChangedHandler} click={this.setStudentsChangeState.bind(this)}/>
     <StudysetInput changed={this.studysetsChangedHandler} click={this.setStudysetsChangeState.bind(this)}/>
     <UserOutput 
       amount = {this.calculateTotalAmount()}
       />
     </div>
   </div>
   
 );
}
}

export default App;
