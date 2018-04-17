const clickUserAction = function(user){
    console.log("User Clicked: " + user.first)
    console.log("User Clicked: " + user.last)
    console.log("User Clicked: " + user.id)
    console.log("User Clicked: " + user.description)

     return ({
        type:"USER_CLICKED",
        myData:user
     });
    

}

export default clickUserAction;