import React, {Component} from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

class UserPage extends Component {


  // this could also be written with destructuring parameters as:
  // const UserPage = ({ user }) => (
  // and then instead of `props.user.username` you could use `user.username`

  render() {


    return (
      < div >

      <h1 className="welcome">
        Welcome, {this.props.reduxStore.user.first_name}!
    </h1>
      <p>Your ID is: {this.props.reduxStore.user.id}</p>
      <LogOutButton className="log-in" />
      <br />


      <p>Thanks for visiting LessonCreator.</p>
      <br />
      <p>As a student, you will be given access to many different courses. Each course will have numerous lessons for you to explore. Simply click into the lesson of your choice and you will find a video to watch. After you have completed the video, choose your next video from the list to the right of the video player. When there are no more choices left, head back to the lesson page to complete your next lesson</p>
      <br />
      <p>As a course creator, you will be able to craft your own lessons in a linear or "tree-diagram" style. Name each course and lesson, then add video content by a YouTube url. Once a student views the first video in your lesson. They will be given options to choose from for their next video. Based on your descriptions and choices, students will have multiple paths through each lesson.</p>
      <br />
      <button onClick={() => this.props.history.push('/coursesAvailable')}>Check out courses!</button>
    
  </div >
);

  }
}


// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = reduxStore => ({
  reduxStore,
})

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
