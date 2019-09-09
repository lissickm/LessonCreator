import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoCreator extends Component {

    render() {

        return(
            <div>In Video Creator</div>
        )


    }


}

const mapStateToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStateToProps)(VideoCreator);