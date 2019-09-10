import React, {Component} from 'react';
import { connect } from 'react-redux';
import { userInfo } from 'os';


class CoursesAvailable extends Component {

    componentDidMount() {
        this.getCourses();
    }

    getCourses = () => {
        this.props.dispatch({
            type: 'FETCH_COURSES'
        })
    }

    

    render() {

        return (
            <div>
                <div>In Courses Available</div>
                <br/>
                <div>
                    {JSON.stringify(this.props.reduxStore)}
                </div>
                <br/>
                <div>{this.props.reduxStore.user.first_name} {this.props.reduxStore.user.last_name} <button>Logout</button></div>

                <ul>
                    {this.props.reduxStore.courses.map  (course => {
                            return (
                            <div key={course.id}>
                                <li>{course.name}</li>
                                <li>{course.description}</li>
                                <button>go</button>
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