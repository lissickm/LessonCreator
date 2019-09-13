import React, { Component } from 'react';
import { connect } from 'react-redux';

class CourseCreator extends Component {

    state = {
        courseName: "",
        courseDescription: ""
    }

    handleBackClick = () => {
        this.props.history.push('/coursesAvailable');
    }

    handleInputChange = (propertyName, event) => {
        console.log('in handle name change')
        this.setState({

            ...this.state,

            [propertyName]: event.target.value,

        })
    }



    // <input type='text' value={this.state.name} placeholder='name' onChange={(event) => { this.handleNameChange('name', event) }} />
    //     <input type='text' value={this.state.kingdom} placeholder='kingdom' onChange={(event) => { this.handleNameChange('kingdom', event) }} />
    render() {


        return(
            <div>
                <h1>New Course Creator</h1>
                {JSON.stringify(this.state)}
                <p>Please enter the name of your course below. Also enter a detailed description of your course, including all topics covered.</p>
                <br/>
                <form>
                    <label>
                        Course Name:
                        <input type="text" value={this.state.courseName} onChange={(event) => {this.handleInputChange('courseName', event)}} />
                    </label>
                    <label>
                        Course Description:
                        <input type="text" value={this.state.courseDescription} onChange={(event) => { this.handleInputChange('courseDescription', event) }} />
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