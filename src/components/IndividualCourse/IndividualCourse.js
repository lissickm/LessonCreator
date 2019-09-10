import React, { Component } from 'react';
import { connect } from 'react-redux';

class IndividualCourse extends Component {

    componentDidMount() {
        this.getCourses();
    }

    getCourses = () => {
        this.props.dispatch({
            type: 'FETCH_COURSES'
        })
    }
    getLessons = () => {
        this.props.dispatch({
            type: 'FETCH_LESSON'
        })
    }


    render() {


        return(
            <div>
            <h1>In Individual Course</h1>
            <div>
                {JSON.stringify(this.props.reduxStore)}
            </div>
            </div>
        )

    }

}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(IndividualCourse);