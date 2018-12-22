import React, {Component} from 'react';
import './css/form.css';

export default class Form extends Component{
render(){
    return(
        <form onSubmit = {this.props.weatherMethods}>
        <div style={{display:"flex", justifyContent:"center"}}>
            <input className="formInp" type="text" name="city" placeholder="Город"/>
            <button className="formBtn"></button>
        </div>
        </form>


         )
    }
    
}
