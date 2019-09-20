import React, { Component } from 'react';
import { connect } from 'react-redux';

class LessonEditor extends Component {

    state = {
        name: this.props.reduxStore.chosenLessonInformation.name,
        description: this.props.reduxStore.chosenLessonInformation.description,
        id: 0
    }

    handleBackClick = () => {
        this.props.history.push('/course');
    }

    handleInputChange = (propertyName, event) => {
        event.preventDefault();
        console.log('in handle name change')
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        });
        this.setState({
            id: this.props.reduxStore.chosenLessonID
        });
    }

    editNewLesson = event => {
        // event.preventDefault();
        this.props.dispatch({ type: 'CHANGE_LESSON_INFORMATION', payload: this.state })
        this.setState({
            name: '',
            description: '',
            id: 0
        });
    }
    


    render() {

        let courseToRender;
        let courses = this.props.reduxStore.courses;
        let chosenCourseId = this.props.reduxStore.chosenCourse
        for (let course of courses) {
            if (course.id === chosenCourseId) {
                courseToRender = course.name;
                console.log('course name to render is: ', courseToRender);
            }
        }

        let lessonToRender;
        let lessonDescriptionToRender;
        let lessons = this.props.reduxStore.individualCourse;
        let chosenLessonID = this.props.reduxStore.chosenLessonID

        for (let lesson of lessons) {
            if (lesson.id === chosenLessonID) {
                lessonToRender = lesson.name;
                lessonDescriptionToRender = lesson.description;
                console.log('lesson name to render is : ', lessonToRender);
            }
        }

        return(
            <div>
                <h1>Lesson Editor</h1>
                <h1>{lessonToRender}</h1>
                <h1>{lessonDescriptionToRender}</h1>
                {/* {JSON.stringify(this.state)} */}
                <p>Please edit the name of your lesson below. If needed, also edit the description of your lesson.</p>
                <br />
                <form onSubmit={this.editNewLesson}>
                    <label>
                        Edit Lesson Name:
                        <input type="text" value={this.state.name} onChange={(event) => { this.handleInputChange('name', event) }} />
                    </label>
                    <label>
                        Edit Lesson Description:
                        <input type="text" value={this.state.description} onChange={(event) => { this.handleInputChange('description', event) }} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br/>
                <button className="backButton" onClick={() => this.handleBackClick()}>Back To Lessons</button>
            </div>
                )



    }











}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(LessonEditor);