// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { addTodo } from '../actions/index'

// import AddTodo from './AddTodo'
// import TodoList from './TodoList'

// class Apps extends Component {
//    render() {
//       const { dispatch, visibleTodos } = this.props
	
//       return (
//          <div>
//             <AddTodo onAddClick = {text => dispatch(addTodo(text))} />
//             <TodoList todos = {visibleTodos}/>
//          </div>
//       )
//    }
// }

// function select(state) {
//    return {
//       visibleTodos: state.todos
//    }
// }

// export default connect(select)(Apps)