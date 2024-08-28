import PropTypes from "prop-types"

function Student(props){
    return(
        <div className="student-div">
            <p>name: {props.name} </p>
            <p>age: {props.age} </p>
            <p>is student: {props.isStudent ? "yes" : "no"} </p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "guest",
    age: 0,
    isStudent: false
}

export default Student