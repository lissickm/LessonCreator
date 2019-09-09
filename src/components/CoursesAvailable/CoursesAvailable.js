import React, {Component} from 'react';
import { connect } from 'react-redux';


class CoursesAvailable extends Component {




    render() {

        return (
            <div>In Courses Available</div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(CoursesAvailable);