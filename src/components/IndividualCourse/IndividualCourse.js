import React, { Component } from 'react';
import { connect } from 'react-redux';
import './IndividualCourse.css';

class IndividualCourse extends Component {

   
    
    componentDidMount() {
        // this.getCourses();
        this.getLessons();
    }

    getLessons = () => {
        console.log('get lessons', this.props.reduxStore.chosenCourse)
        this.props.dispatch({
            //GETS ALL LESSONS FOR SELECTED COURSE
            type: 'FETCH_INDIVIDUAL_COURSE',
            payload: this.props.reduxStore.chosenCourse
        })
    }

    handleClick = (lesson) => {
        console.log('in lesson handle click');
        this.props.dispatch({
            type: 'SET_CHOSEN_LESSON_ID',
            payload: lesson.id
        });
        this.props.dispatch({
            type: 'SET_CHOSEN_LESSON_CONTENT_INFO',
            payload: {
                name: lesson.name,
                description: lesson.description
            }
        });
        this.props.history.push('/content');
    }

    handleEditClick = (lesson) => {
        console.log('in handle edit click')
        this.props.dispatch({
            type: 'SET_CHOSEN_LESSON_ID',
            payload: lesson.id
        })
        this.props.dispatch({
            type: 'SET_CHOSEN_LESSON_INFO',
            payload: {
                name: lesson.name,
                description: lesson.description
            }
        });
        this.props.history.push('/lessonEditor');
    }

    handleDeleteClick = (id) => {
        console.log('in handleDeleteClick');
        this.props.dispatch({
            type: 'REMOVE_LESSON',
            payload: {
                id: id,
                course_id: this.props.reduxStore.chosenCourse
            }
        })
    }

    handleBackClick = (id) => {
        this.props.history.push('/coursesAvailable');
    }

    handleAddNewLessonClick = () => {
        this.props.history.push('/lessonCreator');
    }


    render() {

        let courseToRender;
        let courses = this.props.reduxStore.courses;
        let chosenCourseId = this.props.reduxStore.chosenCourse
        for (let course of courses) {
            if (course.id === chosenCourseId) {
                courseToRender=course.name;
                console.log('the individual course name to render is : ', courseToRender);
            }
        }

        const isAdmin = this.props.reduxStore.user.administrator;

        return(
            <div>
            {/* <h1>In Individual Course</h1>
            <div>
                {JSON.stringify(this.props.reduxStore)}
                <br/>
                {JSON.stringify(this.props.reduxStore.individualCourse)} */}

            <div className="courseName">
                <h1>{courseToRender}</h1>
            </div>
            <div>
                {isAdmin === true && <button onClick={() => this.handleAddNewLessonClick()}>Add a New Lesson</button>}
            </div>
            <ul>
                {this.props.reduxStore.individualCourse.map (lesson => {
                    return(
                        <div key={lesson.id}>
                            <li className="lessonName">{lesson.name}</li>
                            <li className="lessonDescription" >{lesson.description}</li>
                            <button className="goButton" onClick={() => this.handleClick(lesson)}>Go to lesson content</button>
                            {isAdmin === true && <button onClick={() => this.handleEditClick(lesson)}>Edit Lesson</button>}
                            {isAdmin === true && <button className="deleteButton" onClick={() => this.handleDeleteClick(lesson.id)}>Delete</button>}

                           
                        </div>
                    )
                })}
            </ul>
                <button className="backButton" onClick={() => this.handleBackClick()}>Back to Courses</button>
            </div>
        )

    }

}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(IndividualCourse);