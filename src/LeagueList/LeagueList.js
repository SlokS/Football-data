import React from 'react';
import gotService from '../services/gotService';
import {Link} from 'react-router-dom';
import checkLeagueAvailability from '../services/checkLeagueAvailability';

export default class LeagueList extends React.Component {
    state = {
        competitionsList: null
    }

    gotService = new gotService();

    componentDidMount() {
        this.gotService.getAllCompetitions()
            .then((competitionsList) => {
                this.setState({competitionsList});
                console.log(this.state);
            })
    }

    renderItems(arr) {
        const {url} = this.props.match;

        return arr.map((item) => {
            const {id, name, code} = item;

            if (checkLeagueAvailability(code)) {
                return (
                    <li key={id}>
                        <Link to={`${url}${code}/`}>{name}</Link>
                    </li>
                )
            } else {
                return (
                    <li key={id}>
                        {name}
                    </li>
                )
            }
            
        })
    }

    render() {
        const {competitionsList} = this.state;

        if (!competitionsList) {
          return <div>Загрузка</div>
        }
    
        const items = this.renderItems(competitionsList.competitions);

        return(
            <div className="App">
                <h1>Список лиг</h1>
                {items}
            </div>
        )
    }


}