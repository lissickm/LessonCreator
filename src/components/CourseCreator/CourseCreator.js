import React, { Component } from 'react';
import { connect } from 'react-redux';

class CourseCreator extends Component {

    state = {
        name: '',
        description: ''
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

    addNewPlant = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PLANT', payload: this.state })
        this.setState({
            newPlant: {
                id: this.state.id + 1,
                name: '',
            }
        });
    }

    addNewCourse = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_NEW_COURSE', payload: this.state})
        this.setState({
            name: '',
            description: ''
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
                        <input type="text" value={this.state.name} onChange={(event) => {this.handleInputChange('name', event)}} />
                    </label>
                    <label>
                        Course Description:
                        <input type="text" value={this.state.description} onChange={(event) => { this.handleInputChange('description', event) }} />
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