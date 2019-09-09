import React, { Component } from 'react';
import { connect } from 'react-redux';

class CourseCreator extends Component {


    render() {


        return(
            <div>In Course Creator</div>
        )


    }


}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(CourseCreator);