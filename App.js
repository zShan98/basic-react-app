import React from 'react';
import logo from './logo.svg';
import './App.css';


function App(data) {
  return (
    <div>   
      <title>meri App</title>
      <h1>Class:3 Assigment by ~Zeeshan Ahmed</h1>
      <h3>Trying to figure out what to do ?</h3>
      <hr/><br/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/G25BM3nPk3s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <hr/><br/>
      <ol type= "1;">
        <li><i><strong><a href="https://www.youtube.com">This Link is a Pop-up</a></strong></i></li>
        <li><i><strong>This is not a pop-up </strong></i></li>
        <li>My Name is {data.name} & Age is {data.age}</li>
      </ol> 
      
    </div>
  )
}

export default App;
