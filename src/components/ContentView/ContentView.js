import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContentView extends Component {

    componentDidMount() {
        this.getContent();
    }

    getContent = () => {
        this.props.dispatch({
            type:'FETCH_INDIVIDUAL_CONTENT',
            payload: this.props.reduxStore.chosenLessonID
        })
    }

render() {

    return (
        <div>
        <h1>In Content View</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6ZfuNTqbHE8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='allowfullscreen' ></iframe>
        </div>
    )


}



}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(ContentView);