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
                {JSON.stringify(this.props.reduxStore.individualCourse)}
            </div>
            <ul>
                {this.props.reduxStore.individualCourse.map (lesson => {
                    return(
                        <div key={lesson.id}>
                            <li>{lesson.name}</li>
                            <li onClick={() => this.handleClick(lesson.id)}>{lesson.description}</li>
                        </div>
                    )
                })}
            </ul>
            </div>
        )

    }

}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(IndividualCourse);