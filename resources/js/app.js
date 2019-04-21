
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import {  BrowserRouter, Router, Link, Route, browserHistory } from 'react-router-dom';
import Main   from './components/Main';
import Create from './components/Create';
import List from './components/List';
import Edit from './components/Edit';
//
class Hello extends React.Component {
    render() {
		return (
			<BrowserRouter>
			<div>
				<ul>
					<li><Link to="/create">Create</Link></li>
					<li><Link to="/list">List</Link></li>
				</ul>
				<Route path="/create" component={Create} />
				<Route path="/list" component={List} />
				<Route path="/todos/:id/edit" component={Edit} />
			</div>
			</BrowserRouter>
		);
    }
}
render(
    <Hello />,
    document.getElementById('example')
);
