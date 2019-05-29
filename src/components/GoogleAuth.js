import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { NONAME } from 'dns';


class GoogleAuth extends React.Component{
    


    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '516535046599-b8fq93not4ota5me36mjasrd5l55ahci.apps.googleusercontent.com',
                scope: 'email'
            }).then( () => {
               this.auth = window.gapi.auth2.getAuthInstance();
              this.onAuthChange(this.auth.isSignedIn.get());
               this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    onAuthChange = (isSignedIn) => {
        
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    }

    renderAuthButton(){
        
       
        if( this.props.isSignedIn === null){
            return null;
        }
        else if( this.props.isSignedIn === true){
            return(
                <div className="right floated content">
                <button className="ui inverted red button" size="small" onClick = { this.onSignOutClick } float="right">
                    <i className="google icon"></i>
                    SignOut
                    </button>
                </div>
                
            );
        }
        else {
            return(
                <div className="right floated content">
                    <button className="ui blue button" size="small" onClick = { this.onSignInClick } float="right">
                    <i className="google icon"></i>
                    Sign In
                    </button>
                </div>
            );
        }
        
    }
    render(){

        return (
            <div>
               { this.renderAuthButton()}
            </div>
        );

    }
    

};
const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn};
};



export default connect( mapStateToProps, {signIn, signOut})(GoogleAuth);