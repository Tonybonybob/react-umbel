import React, { Component } from 'react';
import Info from './Component/Info'
import Form from './Component/Form'
import Wether from './Component/Wether'
import './App.css';

const API_KEY = "2693fb56727c9e9f3603890b72bcd9ae";


export default class App extends Component {
  

state = {
  temp: undefined,
  city: undefined,
  country: undefined,
  error: undefined
}



gettingWether = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  
  if(city){
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();

    const cels = data.main.temp.toFixed(1);

  
  this.setState({
    temp: cels,
    city: data.name,
    country: data.sys.country,
    error: ''
    });
  } else {
    this.setState({
      temp: undefined,
      city: undefined,
      country: undefined,
      error: "Введите название города!"
    });

  }
}

  render() {
   return(
   <div style={{margin:"0 auto",textAlign: "center",
   paddingTop: "200px"}}>
     <Info/>
     <Form weatherMethods={this.gettingWether}/>
     <Wether
      temp={this.state.temp}
      city={this.state.city}
      country={this.state.country}
      error={this.state.error}
     />
    </div>
   )
  }
}

