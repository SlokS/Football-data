import React from 'react';
import gotService from '../services/gotService';
import {Link} from 'react-router-dom';

export default class CommandsList extends React.Component {

    gotService = new gotService();

    state = {
        teamsList: null,
        nameCompetition: null
    }

    componentDidMount() {
        this.gotService.getAllTeams(this.props.leagueId)
            .then((teamsList) => {
                this.setState({teamsList, nameCompetition: teamsList.competition.name});
                console.log('thisTeams');
                console.log(this.state);
            })
    }

    renderTeams(arr) {
        return arr.map(({name, id}) => {
            return (
                <li key={id}><Link to={`${id}/`}>{name}</Link></li>
            )
        })
    }

    render() {
        const {teamsList, nameCompetition} = this.state;
        if (!teamsList) {
            return <div>Загрузка</div>
        }
        const items = this.renderTeams(teamsList.teams);
        
        return (
            <div className="teams">
                <h1>Список команд {nameCompetition}</h1>
                <ul>
                    {items.map(item => item)}
                </ul>
            </div>
        )
    }
    
}