import React, {Component} from 'react';

export default class Wether extends Component{
render(){
    return(
    <div>
        {this.props.city &&
        <div>
        <p>Город: {this.props.city} {this.props.country} </p>
        <p>Температура {this.props.temp}</p>
        <p></p>
        </div>
        }
        <p>{this.props.error}</p>
    </div>

         )
    }
}