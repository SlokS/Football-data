import React from 'react';
import gotService from '../services/gotService';
import {Link} from 'react-router-dom';
import checkLeagueAvailability from '../services/checkLeagueAvailability';

export default class LeagueList extends React.Component {
    state = {
        competitionsList: null,
        page: 1
    }

    gotService = new gotService();

    componentDidMount() {
        this.gotService.getAllCompetitions()
            .then((competitionsList) => {
                this.setState({competitionsList});
                console.log(this.state);
            })
        this.gotService.getAllMatches('PL')
            .then((allmatches) => {
                console.log('all');
                console.log(allmatches);
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id, name, code} = item;

            if (checkLeagueAvailability(code)) {
                return (
                    <li key={id}>
                        <Link to={`/league-list/${code}/`}>{name}</Link>
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