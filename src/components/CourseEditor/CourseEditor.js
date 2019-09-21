import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CourseEditor.css';

class CourseEditor extends Component {
    
    // componentDidMount() {
    //     this.getCurrentCourseToRedux();
    // }

    state = {
        name: this.props.reduxStore.chosenCourseInformation.name,
        description: this.props.reduxStore.chosenCourseInformation.description,
        id: 0
    }

    // getCurrentCourseToRedux = () => {
    //     this.props.dispatch({
    //         type: 'SEND_COURSE_INFO_TO_REDUX',
    //         payload: courseNameToRender, courseDescriptionToRender
    //     })
    // }

    handleBackClick = () => {
        this.props.history.push('/coursesAvailable');
    }

    handleInputChange = (propertyName, event) => {
        event.preventDefault();
        console.log('in handle name change')
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        });
        this.setState({
            id: this.props.reduxStore.chosenCourse
        });
    }


    editNewCourse = event => {
        // event.preventDefault();
        this.props.dispatch({ type: 'CHANGE_COURSE_INFORMATION', payload: this.state })
        this.setState({
            name: '',
            description: '',
            id: 0
        });
        // this.props.history.push('/coursesAvailable');
    }



    // <input type='text' value={this.state.name} placeholder='name' onChange={(event) => { this.handleNameChange('name', event) }} />
    //     <input type='text' value={this.state.kingdom} placeholder='kingdom' onChange={(event) => { this.handleNameChange('kingdom', event) }} />
    render() {

        let courseNameToRender;
        let courseDescriptionToRender;
        let courses = this.props.reduxStore.courses;
        let chosenCourseId = this.props.reduxStore.chosenCourse
        for (let course of courses) {
            if (course.id === chosenCourseId) {
                courseNameToRender = course.name;
                courseDescriptionToRender = course.description;
                console.log('the individual course name to render is : ', courseNameToRender);
            }
        }

        return (
            <div>
                <h1>Course Editor</h1>
                {/* <h1>Course name to edit: {courseNameToRender}</h1>
                <h1>Course description to edit: {courseDescriptionToRender}</h1>
                {JSON.stringify(this.state)} */}
                <p>Please edit the name of your course below. If needed, also edit the description of your course, including all topics covered. Once you submit your changes, navigate back to the courses available to see your changes.</p>
                <br />
                <form className="newCourseEditor" onSubmit={this.editNewCourse}>
                    <label>
                        Edit Course Name:
                        <input className="nameEdit" type="text" value={this.state.name} onChange={(event) => { this.handleInputChange('name', event) }} />
                    </label>
                    <label>
                        Edit Course Description:
                        <input className="descriptionEdit" type="text" value={this.state.description} onChange={(event) => { this.handleInputChange('description', event) }} />
                    </label>
                    <input class="submitButton" type="submit" value="Submit" />
                </form>
                <br />
                <button className="backButton" onClick={() => this.handleBackClick()}>Back To Courses</button>
            </div>
        )


    }





}




const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(CourseEditor);