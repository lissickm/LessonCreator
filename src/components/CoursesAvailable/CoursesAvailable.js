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

    handleAddCourseClick = () => {
        this.props.history.push('/courseCreator');
    }

    handleAddLessonClick = () => {
        this.props.history.push('/lessonCreator');
    }

    

    render() {

        const isAdmin = this.props.reduxStore.user.administrator;


        return (
            <div>
                <h1>Courses Available</h1>
                <br/>
                
                <h2>{this.props.reduxStore.user.first_name} {this.props.reduxStore.user.last_name} 
                </h2>
                <br/>
                <div>
                    {isAdmin === true && <button onClick={() => this.handleAddCourseClick()}>Add New Course</button>}
                </div>
                <ul>
                    {this.props.reduxStore.courses.map  (course => {
                            return (
                            <div key={course.id}>
                                
                                <li className="courseName">{course.name}</li>
                                <li className="courseDescription">{course.description}</li>
                                    {isAdmin === true && <button onClick={() => this.handleAddLessonClick()}>Add New Lesson</button>}
                                    {isAdmin === true && <button>Delete Course</button>}
                                    {isAdmin ? (<button className="editgoButton" onClick={() => this.handleGoClick(course.id)}>Edit</button>) :
                                        <button className="editgoButton" onClick={() => this.handleGoClick(course.id)}>Go</button>}
                                
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