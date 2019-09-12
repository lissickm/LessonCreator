import React, { Component } from 'react';
import { connect } from 'react-redux';

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




    return (
        <div>
        <h1>In Content View</h1>
            <h2>{courseToRender} - {lessonToRender}</h2>
        <br/>
        <div>{JSON.stringify(this.props.reduxStore.individualLesson.description)}</div>
        {/* <h3>{this.props}</h3> */}
            
                
        
        
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/6ZfuNTqbHE8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='allowFullScreen' ></iframe> */}
        </div>
    )


}



}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(ContentView);