import React, { Component } from 'react';
import { connect } from 'react-redux';

class IndividualCourse extends Component {


    render() {


        return(
            <div>In Individual Course</div>
        )

    }

}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(IndividualCourse);