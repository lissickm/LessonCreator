import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContentView extends Component {


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