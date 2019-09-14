import React, { Component } from 'react';
import { connect } from 'react-redux';

class LessonCreator extends Component {

    state = {
        name: '',
        description: '',
        course_id: 0
    }
    
    
    handleBackClick = () => {
        this.props.history.push('/course');
    }

    handleInputChange = (propertyName, event) => {
        console.log('in handle name change')
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        });
        this.setState({
            course_id: this.props.reduxStore.chosenLessonID
        });
    }

    render() {

        

        return(
            <div>
                <h1>Lesson Creator</h1>
                {JSON.stringify(this.state)}
                <br/>
                <p>Please enter the name of your lesson and a description of the topics covered.</p>
                <br/>
                <form>
                    <label>
                        Lesson Name:
                        <input type="text" value={this.state.name} onChange={(event) => { this.handleInputChange('name', event) }} />
                    </label>
                    <br/>
                    <label>
                        Lesson Description:
                        <input type="text" value={this.state.description} onChange={(event) => { this.handleInputChange('description', event) }} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <br/>
                <button onClick={() => this.handleBackClick()}>Back to Lessons</button>
            </div>
        )

    }


}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(LessonCreator);