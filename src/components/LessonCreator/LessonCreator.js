import React, { Component } from 'react';
import { connect } from 'react-redux';

class LessonCreator extends Component {


    render() {

        return(
            <div>In Lesson Creator</div>
        )

    }


}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(LessonCreator);