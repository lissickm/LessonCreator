import React, { Component } from 'react';
import { connect } from 'react-redux';

class CourseCreator extends Component {

    handleBackClick = () => {
        this.props.history.push('/coursesAvailable');
    }

    render() {


        return(
            <div>
                <h1>New Course Creator</h1>
                <p>Please enter the name of your course below. Also enter a detailed description of your course, including all topics covered.</p>
                <br/>
                <form>
                    <label>
                        Course Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Course Description:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br/>
                <button className="backButton" onClick={() => this.handleBackClick()}>Back To Courses</button>
            </div>
        )


    }


}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(CourseCreator);