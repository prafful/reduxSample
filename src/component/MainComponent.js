import React from 'react';
import UserListContainer from '../containers/UserListContainer';
import UserDetailContainer from '../containers/UserDetailContainer';

class MainComponent extends React.Component{
    render(){
        return(
            <div>
                <div>
                    User List Container Goes here
                    <UserListContainer />
                </div>
                <hr></hr>
                <div>
                    User Detail Container Goes here
                    <UserDetailContainer />
                </div>


            </div>    
        );
    }


}

export default MainComponent;