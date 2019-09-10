import React, {Component} from 'react';
import { connect } from 'react-redux';


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
                    {JSON.stringify(this.props.reduxStore.courses)}
                </div>
                <ul>
                    {this.props.reduxStore.courses.map
                        (course => {
                            return <li>{course.name}</li>
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