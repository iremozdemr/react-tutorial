import PropTypes from "prop-types"

function UserGreeting(props){

    if(props.isLoggedIn){
        return <h2 className="welcome-message">{props.userName} welcome</h2>
    }
    else{
        return <h2 className="login-message">{props.userName} please log in to continue</h2>
    }

    //return(props.isLoggedIn ? <h2>welcome</h2> : <h2>please log in to continue</h2>);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string
}

export default UserGreeting