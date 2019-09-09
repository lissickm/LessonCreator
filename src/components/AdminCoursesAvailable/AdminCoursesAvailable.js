import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminCoursesAvailable extends Component {


    render() {


        return(
            <div>In Admin Courses Available</div>
        )

    }

}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(AdminCoursesAvailable);