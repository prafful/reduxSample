import React from 'react';
import {connect} from 'react-redux'

class UserDetailContainer extends React.Component{

        render(){
            if(!this.props.clickedUser){
               return (
               <div>
                    <h1> Click on any user to see details...</h1>
                </div>
                   ); 
            }
            return(
                <div>
                    <h3>
                         Id: {this.props.clickedUser.id} <br></br>   
                         Name: {this.props.clickedUser.first} {this.props.clickedUser.last} <br></br> 
                         Description: {this.props.clickedUser.description}  
                    </h3>
                </div>
            );
        }

}

function convertStateToProps(state){
    console.log("User Detail: " )
    console.log(state.activeuser)
    return ({
        clickedUser:state.activeuser
    })

}

export default connect(convertStateToProps)(UserDetailContainer);
