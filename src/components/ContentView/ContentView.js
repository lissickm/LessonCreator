import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import './ContentView.css'

class ContentView extends Component {
    state = {
        editBox: false,
        description:'',
        url: '',
        lesson_id: 0,
        prior_content: 0
    }

    componentDidMount() {
        this.getContent();
        this.getChoiceVideos();
    }


//*********** */
    handleEditInputChange = (propertyName, event) => {
        console.log('in handle edit input change')
        this.props.dispatch({
            type: 'UPDATE_EDIT_INFO',
            payload: {
                [propertyName] : event.target.value
            }
        });
    }

    handleInputChange = (propertyName, event) => {
        console.log('in handle input change')
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        });
        

    }

    addNewContent = event => {
        event.preventDefault();
        let newContent = {...this.state, chosenLessonID: this.props.reduxStore.chosenLessonID };

        this.props.dispatch({
            type: 'ADD_NEW_CONTENT',
            payload: newContent,
        })
        this.setState({
            description: '',
            url: ''
        });
        this.props.history.push('/course');
        
    }

    // sends final edits to the saga to PUT
    editContent = event => {
        event.preventDefault();
        this.props.dispatch({ 
            type: 'CHANGE_CONTENT_INFORMATION', 
            payload: this.props.reduxStore.individualLesson 
        })
        this.setState({
            description: '',
            url: '',
            lesson_id: 0,
            prior_content: 0,
            editBox: false,
        });
        this.props.history.push('/course');
    }

    getContent = () => {
        // console.log('chosen Lesson Id', this.props.match.params)
        // if (this.props.match.params.id) {
        //     this.props.dispatch({
        //         type: 'FETCH_INDIVIDUAL_LESSON',
        //         payload: this.props.match.params.id,
        //     })            
        // } else {
            this.props.dispatch({
                type: 'FETCH_INDIVIDUAL_LESSON',
                payload: this.props.reduxStore.chosenLessonID
            })
        // }
       
    }

    getChoiceVideos = () => {
        this.props.dispatch({
            type: 'FETCH_CHOICE_VIDEOS',
            payload: this.props.reduxStore.chosenLessonID
        })
    }

    handleClick = (id) => {
        console.log('in content view handle click', id);
        this.props.history.push('/course');
    }

    handleEditClick = () => {
        console.log('pushed the edit button');
        this.setState({
            ...this.state,
            editBox: true,
        });
        this.props.dispatch({
            type: 'SET_EDIT_BOX_CLICK',
            payload: {
                editBox: true,
                description: this.props.reduxStore.individualLesson.description,
                url: this.props.reduxStore.individualLesson.url
            }
        });
        
    }

    handleGoClick = (id) => {
        this.props.dispatch({
            type: 'SET_CHOSEN_PARENT_VIDEO_ID',
            payload: id
        });
        this.props.history.push('/content/' + id);
    }

    demoClick = () => {
        this.setState({
            editBox: false,
            description: 'How can you use a limit to create a definition of a derivative?',
            url: '71DwCbpdaOo',
            lesson_id: 0,
            prior_content: 0
        });
    }



    render() {

        let courseToRender;
        let courses = this.props.reduxStore.courses;
        let chosenCourseId = this.props.reduxStore.chosenCourse
        for (let course of courses) {
            if (course.id === chosenCourseId) {
                courseToRender = course.name;
                console.log('course name to render is: ', courseToRender);
            }
        }

        let lessonToRender;
        let lessons = this.props.reduxStore.individualCourse;
        let chosenLessonID = this.props.reduxStore.chosenLessonID
        
        for (let lesson of lessons) {
            if (lesson.id === chosenLessonID) {
                lessonToRender = lesson.name;
                console.log('lesson name to render is : ', lessonToRender);
            }
        }

        let videoDescription = this.props.reduxStore.individualLesson.description;
        let videoURL = this.props.reduxStore.individualLesson.url;

        const isAdmin = this.props.reduxStore.user.administrator;
        let showEditBox = this.state.editBox


        // isAdmin === true, videoURL, videoDescription === false && 

        return (
            <div>
                
                <h1>{courseToRender}</h1>
                <br/>
                <h2>{lessonToRender}</h2>
                
                {/* {JSON.stringify(this.state)} */}
               
                {/* {isAdmin === true && <button className="deleteButton" onClick={() => this.handleDeleteClick(lesson.id)}>Delete</button>} */}

                <h3>{videoDescription}</h3>
                
                {/* {isAdmin === true && <button>Delete Video</button>} */}
                {videoURL && <YouTube className="video" videoId={videoURL} />}
                <br />
                <br/>
                {isAdmin, !videoURL, !videoDescription && <p className="directions" onClick={this.demoClick}>Use the form below to add a description and url for your video.</p>}
                {isAdmin, videoURL, videoDescription, showEditBox && <p className="directions">Use the form below to EDIT a description and url for your video.</p>}
                
                {/* ADD NEW FORM */}
                {isAdmin, !videoURL, !videoDescription  && 
                    <form className="newContentForm" onSubmit={this.addNewContent}>
                    <label>
                        enter video description:
                        <input className="descriptionInput" type="text" value={this.state.description} onChange={(event) => { this.handleInputChange('description', event) }} />
                    </label>
                    <br />
                    <label>
                        enter a YouTube url:
                        <input className="descriptionInput" type="text" value={this.state.url} onChange={(event) => { this.handleInputChange('url', event) }} />
                    </label>
                    <br />
                    <input class="submitButton" type="submit" value="Submit" />
                </form>}

                {isAdmin && <button className="editContent" onClick={() => this.handleEditClick(chosenLessonID)}>Edit Content Information</button>}

                {/* EDIT FORM */}
                {isAdmin, videoURL, videoDescription, showEditBox &&
                    <form className="newContentForm" onSubmit={this.editContent}>
                        <label>
                            edit video description:
                        <input className="descriptionInput" type="text" value={this.props.reduxStore.individualLesson.description} onChange={(event) => { this.handleEditInputChange('description', event) }} />
                        </label>
                        <br />
                        <label>
                            edit YouTube url:
                        <input className="descriptionInput" type="text" value={this.props.reduxStore.individualLesson.url} onChange={(event) => { this.handleEditInputChange('url', event) }} />
                        </label>
                        <br />
                    <input class="submitButton" type="submit" value="Submit" />
                    </form>}
                
                <br/>
                
                
                <div className="choices">
                    <h3>Click a choice for your next video:</h3>

                    <ul>
                        {this.props.reduxStore.choiceVideos.map(video => {
                            return (
                                <div key={video.id}>
                                    <li>{video.description}<button className="goButton" onClick={() => this.handleGoClick(video.id)}>Go</button></li>
                                </div>
                            )
                        })}
                    </ul>
                    </div>
                    
                <br/>
                <button className="backButton" onClick={() => this.handleClick(chosenLessonID)}>Back to Lessons</button>


            </div>





        )


    }



}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(ContentView);