import React, {Component} from 'react';
import { connect } from 'react-redux';


class CoursesAvailable extends Component {




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