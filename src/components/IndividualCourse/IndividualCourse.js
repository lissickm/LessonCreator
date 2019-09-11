import React, { Component } from 'react';
import { connect } from 'react-redux';

class IndividualCourse extends Component {

    componentDidMount() {
        // this.getCourses();
        this.getLessons();
    }

    // getCourses = () => {
    //     this.props.dispatch({
    //         type: 'FETCH_COURSES'
    //     })
    // }

    getLessons = () => {
        this.props.dispatch({
            type: 'FETCH_INDIVIDUAL_LESSON',
            payload: this.props.reduxStore.chosenCourse
        })
    }


    render() {


        return(
            <div>
            <h1>In Individual Course</h1>
            <div>
                {JSON.stringify(this.props.reduxStore)}
                <br/>
                {JSON.stringify(this.props.reduxStore.chosenCourse)}
            </div>
            </div>
        )

    }

}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(IndividualCourse);