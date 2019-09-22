import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LessonCreator.css';

class LessonCreator extends Component {

    state = {
        name: '',
        description: '',
        course_id: 0
    }
    
    
    handleBackClick = () => {
        this.props.history.push('/course');
    }

    handleInputChange = (propertyName, event) => {
        console.log('in handle input change')
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        });
        this.setState({
            course_id: this.props.reduxStore.chosenCourse
        });
    }

    addNewLesson = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_NEW_LESSON', payload: this.state })
        this.setState({
            name: '',
            description: ''
        });
        // this.props.history.push('/course');
    }

    demoClick = () => {
        this.setState({
            name: 'Section 2.5',
            description: 'The Definition of a Derivative',
            course_id: this.props.reduxStore.chosenCourse
        });
    }
    

    render() {

    

        return(
            <div>
                <h1>Lesson Creator</h1>
                {/* {JSON.stringify(this.state)} */}
                <br/>
                <p className="directions" onClick={this.demoClick}>Please enter the name of your lesson and a description of the topics covered. After submitting your new lesson information, you can add another lesson or navigate back to your course page.</p>
                <br/>
                <form className="newLessonForm" onSubmit={this.addNewLesson}>
                    <label>
                        Lesson Name:
                        <input className="nameInput" type="text" value={this.state.name} onChange={(event) => { this.handleInputChange('name', event) }} />
                    </label>
                    <br/>
                    <label>
                        Lesson Description:
                        <input className="descriptionInput" type="text" value={this.state.description} onChange={(event) => { this.handleInputChange('description', event) }} />
                    </label>
                    <br/>
                    <input class="submitButton" type="submit" value="Submit" />
                </form>
                <br/>
                <button className="backButton" onClick={() => this.handleBackClick()}>Back to Lessons</button>
            </div>
        )

    }


}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(LessonCreator);