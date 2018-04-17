export default function(state=null, action){

    switch (action.type) {
        case "USER_CLICKED":
            console.log("Action received: ");
            console.log(action.myData)
            return action.myData;
            
    
        default:
            break;
    }


    return state;

}