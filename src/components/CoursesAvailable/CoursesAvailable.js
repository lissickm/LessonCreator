import React, {Component} from 'react';
import { connect } from 'react-redux';
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

    

    render() {

        return (
            <div>
                <h1>Courses Available</h1>
                <br/>
                
                <div>
                    {JSON.stringify(this.props.reduxStore)}
                </div>
                <br/>
                <div>{this.props.reduxStore.user.first_name} {this.props.reduxStore.user.last_name} 
                </div>

                <ul>
                    {this.props.reduxStore.courses.map  (course => {
                            return (
                            <div key={course.id}>
                                <li>{course.name}</li>
                                <li>{course.description}</li>
                                    <button onClick={() => this.handleGoClick(course.id)}>go</button>
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