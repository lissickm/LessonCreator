import React, {Component} from 'react';
import { connect } from 'react-redux';
import './CoursesAvailable.css';
// import { userInfo } from 'os';



class CoursesAvailable extends Component {

    componentDidMount() {
        this.getCourses();
    }

    getCourses = () => {
        this.props.dispatch({
            type: 'FETCH_COURSES'
        })
    }

    handleGoClick = (id) => {
        console.log('in handle go click')
        this.props.dispatch({
            type: 'SET_CHOSEN_COURSE_ID',
            payload: id
        })
        this.props.history.push('/course');
    }

    handleEditClick = (course) => {
        console.log('in handle edit click')
        this.props.dispatch({
            type: 'SET_CHOSEN_COURSE_ID',
            payload: course.id
        });
        this.props.dispatch({
            type: 'SET_CHOSEN_COURSE_INFO',
            payload: {
                name: course.name,
                description: course.description
            }
    });
        this.props.history.push('/courseEditor');
    }

    handleAddCourseClick = () => {
        this.props.history.push('/courseCreator');
    }

    // handleAddLessonClick = () => {
    //     this.props.history.push('/lessonCreator');
    // }

    handleDeleteClick = (id) => {
        console.log('in handleDeleteClick');
        this.props.dispatch({
            type: 'REMOVE_COURSE',
            payload: id
        })
    }

    

    render() {

        const isAdmin = this.props.reduxStore.user.administrator;


        return (



            <div className="wholePage">
                
                <div className="welcome">Welcome, {this.props.reduxStore.user.first_name}&#33;
                </div>
                { !isAdmin && <div className="directionsCourses">Thanks for visiting LessonCreator! As a student you will be given access to many different courses. Each class will have numerous lesson for you to explore. Simply click into the lesson of you choice and you will find a video to watch. After you have completed the video, you may be able choose your next video from a list below the video player. When you are complete, head back to the lesson page to complete your lesson.</div>}

                {isAdmin && <div className="directionsCourses">Thanks for visiting LessonCreator! As a course creator you will be given the ability on this page to add a new course. Once a course is created, you have the ability to edit the course information or delete it. You can also navigate to lesson view to add lessons to your course. </div>}
                
                <div>
                    {isAdmin === true && <button className="addCourseButton" onClick={() => this.handleAddCourseClick()}>Add New Course</button>}
                </div>
                <div className="available">Available Courses:</div>
                
                <ul>
                    {this.props.reduxStore.courses.map  (course => {
                            return (
                            <div key={course.id}>
                                
                                <li className="courseNameCA">{course.name}</li>
                                <li className="courseDescriptionCA">{course.description}</li>
                                    {/* {isAdmin === true && <button onClick={() => this.handleAddLessonClick()}>Add New Lesson</button>} */}
                                    
                                    {isAdmin ? (<button className="editgoButton" onClick={() => this.handleGoClick(course.id)}>Go to Course Lesson View</button>) :
                                        <button className="goButton" onClick={() => this.handleGoClick(course.id)}>Go</button>}
                                    
                                    {isAdmin === true && <button className="edit" onClick={() => this.handleEditClick(course)}>Edit Course Name and Description</button>}
                                    
                                    {isAdmin === true && <button className="deleteButton" onClick={() => this.handleDeleteClick(course.id)}>Delete Course</button>}
                                    
                                
                            </div>
                            )

                        })
                    }
                </ul>
                
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(CoursesAvailable);