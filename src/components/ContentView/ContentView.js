import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import './ContentView.css'

class ContentView extends Component {
    state = {
        description: '',
        url: '',
        lesson_id: 0
    }

    componentDidMount() {
        this.getContent();
    }

    handleInputChange = (propertyName, event) => {
        console.log('in handle input change')
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        });
        this.setState({
            lesson_id: this.props.reduxStore.chosenLessonID
        });
    }

    getContent = () => {
        console.log('chosen Lesson Id', this.props.reduxStore.chosenLessonID)
        this.props.dispatch({
            type: 'FETCH_INDIVIDUAL_LESSON',
            payload: this.props.reduxStore.chosenLessonID
        })
    }

    handleClick = (id) => {
        console.log('in content view handle click', id);
        this.props.history.push('/course');
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
        let lessons = this.props.reduxStore.individualCourse;
        let chosenLessonID = this.props.reduxStore.chosenLessonID
        
        for (let lesson of lessons) {
            if (lesson.id === chosenLessonID) {
                lessonToRender = lesson.name;
                console.log('lesson name to render is : ', lessonToRender);
            }
        }

        let videoDescription = this.props.reduxStore.individualLesson.description;
        let videoURL = this.props.reduxStore.individualLesson.url;

        const isAdmin = this.props.reduxStore.user.administrator;




        return (
            <div>
                
                <h2>{courseToRender} - {lessonToRender}</h2>
                <br />
                {JSON.stringify(this.state)}
                <br/>
                <h3>Use the form below to edit an existing description and url OR add one that is completely new!</h3>
                {isAdmin === true && <form>
                    <label>
                        enter video description:
                        <input type="text" value={this.state.description} onChange={(event) => { this.handleInputChange('description', event) }} />
                    </label>
                    <br />
                    <label>
                        enter a YouTube url:
                        <input type="text" value={this.state.url} onChange={(event) => { this.handleInputChange('url', event) }} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>}
                
                <br/>
                {isAdmin === false && <h3>{videoDescription}</h3>}
                <br/>
               
                <YouTube className="video" videoId={videoURL} />
                <br/>
                {isAdmin === false && 
                    <div className="choices">
                    <h3>Click a choice for your next video</h3>
                    <h4>This would be your first choice.</h4>
                    <button className="goButton">Go</button>
                    <h4>This would be your second choice.</h4>
                    <button className="goButton">Go</button>
                    <h4>This would be you third button</h4>
                    <button className="goButton">Go</button>
                    </div>
                    }
                <br/>
                <button className="backButton" onClick={() => this.handleClick(chosenLessonID)}>Back to Lessons</button>


            </div>





        )


    }



}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(ContentView);