import React, { Component } from 'react';

import './Title.css';


class Title extends Component{
    render(){
        return(
            <div className="Title">
                <div className="Title-Headline">
                    70 Jahre Luftbrücke
                </div>

                <br></br>

                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Title;