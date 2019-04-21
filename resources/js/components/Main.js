import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router-dom';

class Main extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">ToDoList</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><Link to="create">Create</Link></li>
              <li><a href="#">List</a></li>
            </ul>
          </div>
      </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default Main;