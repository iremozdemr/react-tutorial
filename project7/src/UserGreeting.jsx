import PropTypes from "prop-types"

function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message">{props.userName} welcome</h2>

    const loginMessage = <h2 className="login-message">{props.userName} please log in to continue</h2>

    if(props.isLoggedIn){
        return welcomeMessage
    }
    else{
        return loginMessage
    }

    //return(props.isLoggedIn ? <h2>welcome</h2> : <h2>please log in to continue</h2>);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string
}

export default UserGreeting