import React, { Component } from 'react';
import '../assets/style1.css';

export default class Test extends Component {

    renderCheckBox(){
        
        return(
            <div class="navStyle">
                <div className="ui checkbox">
                    <input type="checkbox" name="samsung" />
                    <label>Samsung</label>
                    <br/>
                    <br/>
                </div>

                <div className="ui checkbox">
                    <input type="checkbox" name="apple" />
                    <label>Apple</label>
                    <br/>
                    <br/>
                </div>

                <div className="ui checkbox">
                    <input type="checkbox" name="motorola" />
                    <label>Mototola</label>
                </div>
            </div>
        );
    }

    render() {
        return (
        <div className="check-box">
            {this.renderCheckBox()}
        </div>
        )
    }
}
