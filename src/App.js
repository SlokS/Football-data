import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'antd/dist/antd.css';
import Header from '../src/header';
import gotService from '../src/services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LeagueList from './LeagueList';
import CommandsList from './CommandsList';
import TestZaprosov from './TestZaprosov';
import TeamCalendar from './TeamCalendar';


export default class App extends React.Component {

  render() {
    return (
      <Router>
        <TestZaprosov/>
        <Header/>
        <Route path='/' component={() => <h1>Welcome to Football DB</h1>} exact/>
        <Route path='/league-list/' component={LeagueList} exact/>
        <Route path='/league-list/:id' render={
          ({match}) => {
            const {id} = match.params;
            return <CommandsList leagueId={id} />}} exact/>
        <Route path='/league-list/:id/:command' render={
          ({match}) => {
            const {id, command} = match.params;
            return <TeamCalendar leagueId={id} commandId={command} />}} exact/>
      </Router>
    );
  }
}




