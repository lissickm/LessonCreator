import React, { Component } from 'react';
import { connect } from 'react-redux';

class LessonCreator extends Component {


    render() {

        return(
            <div>
                <h1>Lesson Creator</h1>
                <br/>
                <p>Please enter the name of your lesson and a description of the topics covered.</p>
                <br/>
                <form>
                    <label>
                        Lesson Name:
                        <input type="text" name="name" />
                    </label>
                    <br/>
                    <label>
                        Lesson Description:
                        <input type="text" name="name" />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <br/>
                
            </div>
        )

    }


}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(LessonCreator);