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
                
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(CoursesAvailable);