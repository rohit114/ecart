import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItem } from '../actions';
import  Test from '../components/Test';
import '../assets/style1.css';





class ListItem extends Component {

  componentDidMount() {
    this.props.fetchItem();
  }

  renderItem() {
    return this.props.item.map( eachItem => {
      
      return(

         <div className="ui card" key={eachItem.id}>
            <div className="image">
              <img src={eachItem.imageUrl}/>
            </div>
            <div className="content">
              <a className="header">{eachItem.name}</a>
              <div className="meta">
                <span className="date">{eachItem.quantity} unit remaining</span>
              </div>
              <div className="description">
                Kristy is an art director living in New York.
              </div>
            </div>
              <div className="ui tag labels">
                <a className="ui label">
                <b>₹ </b>{eachItem.price}/-
                </a>
  
              <button className="ui primary button"> Buy </button>
            </div>
            <br/>
          </div>

       );

     });

  }

  
  render() {
  
     if( this.props.isSignedIn  || this.props.isSignedIn === false ){
        return(
          
          <div className="main-content">  
            Welcome!
           {this.renderItem()}   
          </div>
        ) ;

    } else {
        return ( 
        <div className="main-content">  
          
        </div>);
    }
  }

};

const mapStateToProps = (state) => {
    return { 
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        item: state.product.item
    }
};

export default connect( mapStateToProps, {fetchItem})(ListItem);
