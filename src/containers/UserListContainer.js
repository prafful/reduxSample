import React from 'react';
import {connect } from "react-redux";
import  {bindActionCreators} from 'redux'

import clickUserAction from "../actions/userAction";

class UserListContainer extends React.Component{


renderList(){
    return this.props.myusers.map((user)=>{
        return (
            <li 
            key={user.id} 
            onClick={() => this.props.clickUserProp(user)}
            >{user.first} {user.last}
            </li>
        );
    })
}
    


render(){
        return(
            <div>
                users List will be rendered here
                {this.renderList()}
            </div>
        );
    }
}

function convertStoreToProps(store){
    console.log(store)
    return {
                myusers:store.users
          };
}

function mapActionToProps(dispatch){
    return bindActionCreators(
        {
            clickUserProp:clickUserAction
        }, dispatch
        
    );
}




export default connect(convertStoreToProps, mapActionToProps)(UserListContainer);



