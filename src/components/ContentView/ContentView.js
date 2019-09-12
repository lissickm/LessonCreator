import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

class ContentView extends Component {

    componentDidMount() {
        this.getContent();
    }

    getContent = () => {
        this.props.dispatch({
            type:'FETCH_INDIVIDUAL_CONTENT',
            payload: this.props.reduxStore.chosenLessonID
        })
    }

render() {

    let courseToRender;
    let courses = this.props.reduxStore.courses;
    let chosenCourseId = this.props.reduxStore.chosenCourse
    for (let course of courses) {
        if (course.id === chosenCourseId) {
            courseToRender = course.name;
            console.log(courseToRender);
        }
    } 

    let lessonToRender;
    let lessons = this.props.reduxStore.individualCourse;
    let chosenLessonID = this.props.reduxStore.chosenLessonID
        for (let lesson of lessons) {
        if (lesson.id === chosenLessonID) {
            lessonToRender = lesson.name;
            console.log(lessonToRender);
        }
    }

    let videoDescription = this.props.reduxStore.individualLesson.description;
    let videoURL = this.props.reduxStore.individualLesson.url;




    return (
        <div>
        <h1>In Content View</h1>
            <h2>{courseToRender} - {lessonToRender}</h2>
        <br/>
        <div>{videoDescription}</div>
            <div>{videoURL}</div>
            
            <YouTube videoId="MRao7VIBOaQ"/>
            <YouTube videoId={videoURL}/>


        </div>
            
                
        
        
       
    )


}



}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(ContentView);