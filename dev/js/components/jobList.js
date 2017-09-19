import React from 'react';
import { connect } from 'react-redux';
//import { fetchPostsWithRedux } from '../actions/index';

class App extends React.Component {

  componentDidMount(){
    console.log(this.props.job)
  }

  render(){
    return (
        <ul>
           {this.props.job.map(j =>
               <li key = {j.id}>{j.id}{j.name}</li>
            )}     
        </ul>
    )
  }
}


function mapStateToProps(state){
    console.log(state);
    return {
        job: state.job //[{"id": 1, "name": "A"},{"id": 2, "name": "B"},{"id": 3, "name": "C"}]
    }
}

//let Container = connect(mapStateToProps, {fetchPostsWithRedux})(App);
export default connect(
    mapStateToProps
)(App);
