import React from 'react';
import gotService from '../services/gotService';


export default class TestZaprosov extends React.Component {

    gotService = new gotService();

    componentDidMount() {

        // Все матчи сегодня
        this.gotService.getTestResource('/matches')
            .then((res) => {
                console.log(res);
            })

        // Матчи премьер лиги matches?competitions=PL&dateFrom=2021-05-01&dateTo=2021-05-07
        // Матчи (возможно все) команды CD Nacional /teams/5529/matches/ 

        // this.gotService.getTestResource('/competitions/2017/teams/')
        //     .then((res) => {
        //         console.log(res);
        //     })

        // this.gotService.getTestResource('/teams/503/matches/')
        //     .then((res) => {
        //         console.log(res);
        //     })
    }

    render() {
        return(
            <div></div>
        )
    }
}