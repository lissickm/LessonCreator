import React, { Component } from 'react';
import { connect } from 'react-redux';

class CourseEditor extends Component {
    
    state = {
        name: '',
        description: '',
        creator_id: 0
    }


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
            creator_id: this.props.reduxStore.user.id
        });
    }


    editNewCourse = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_NEW_COURSE', payload: this.state })
        this.setState({
            name: '',
            description: '',
            creator_id: 0
        });
    }



    // <input type='text' value={this.state.name} placeholder='name' onChange={(event) => { this.handleNameChange('name', event) }} />
    //     <input type='text' value={this.state.kingdom} placeholder='kingdom' onChange={(event) => { this.handleNameChange('kingdom', event) }} />
    render() {

        let courseToRender;
        let courses = this.props.reduxStore.courses;
        let chosenCourseId = this.props.reduxStore.chosenCourse
        for (let course of courses) {
            if (course.id === chosenCourseId) {
                courseToRender = course.name;
                console.log('the individual course name to render is : ', courseToRender);
            }
        }

        return (
            <div>
                <h1>Course Editor</h1>
                <h1>{courseToRender}</h1>
                {JSON.stringify(this.state)}
                <p>Please edit the name of your course below. If needed, also edit the description of your course, including all topics covered.</p>
                <br />
                <form onSubmit={this.editNewCourse}>
                    <label>
                        Edit Course Name:
                        <input type="text" value={this.state.name} onChange={(event) => { this.handleInputChange('name', event) }} />
                    </label>
                    <label>
                        Edit Course Description:
                        <input type="text" value={this.state.description} onChange={(event) => { this.handleInputChange('description', event) }} />
                    </label>
                    <input type="submit" value="Submit" />
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