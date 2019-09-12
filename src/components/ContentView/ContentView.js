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
        <div>In Content View</div>
    )


}



}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(ContentView);