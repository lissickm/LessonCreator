import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import './ContentView.css'

class ContentView extends Component {
    state = {
        description: '',
        url: '',
        lesson_id: 0,
        prior_content: null
    }

    componentDidMount() {
        this.getContent();
        this.getChoiceVideos();
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

    addNewContent = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_NEW_CONTENT', payload: this.state })
        this.setState({
            description: '',
            url: ''
        });
        this.getContent();
    }

    getContent = () => {
        console.log('chosen Lesson Id', this.props.reduxStore.chosenLessonID)
        this.props.dispatch({
            type: 'FETCH_INDIVIDUAL_LESSON',
            payload: this.props.reduxStore.chosenLessonID
        })
    }

    getChoiceVideos = () => {
        this.props.dispatch({
            type: 'FETCH_CHOICE_VIDEOS',
            payload: this.props.reduxStore.chosenLessonID
        })
    }

    handleClick = (id) => {
        console.log('in content view handle click', id);
        this.props.history.push('/course');
    }

    handleGoClick = (id) => {
        this.props.dispatch({
            type: 'SET_CHOSEN_PARENT_VIDEO_ID',
            payload: id
        })
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
                {/* {isAdmin === true && <button className="deleteButton" onClick={() => this.handleDeleteClick(lesson.id)}>Delete</button>} */}
                <br/>
                {isAdmin === true, videoURL, videoDescription === false  && <h3>Use the form below to edit the description and url.</h3>}
                {isAdmin === true && 
                    <form onSubmit={this.addNewContent}>
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
                <h3>{videoDescription}</h3>
                <br/>
                {/* {isAdmin === true && <button>Delete Video</button>} */}
                {videoURL && <YouTube className="video" videoId={videoURL} />}
                <br/>
                
                    {/* <div className="choices">
                    <h3>Click a choice for your next video</h3>

                    <ul>
                        {this.props.reduxStore.choiceVideos.map(video => {
                            return (
                                <div key={video.id}>
                                    <li>{video.description}<button onClick={() => this.handleGoClick(video.id)}>Go</button></li>
                                </div>
                            )
                        })}
                    </ul>
                    </div> */}
                    
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