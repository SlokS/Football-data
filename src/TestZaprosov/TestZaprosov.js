import React from 'react';
import gotService from '../services/gotService';


export default class TestZaprosov extends React.Component {

    gotService = new gotService();

    componentDidMount() {
        this.gotService.getTeamMatches(2013)
            .then((res) => {
                console.log(res);
            })
    }

    render() {
        return(
            <div>TestZaprosov</div>
        )
    }
}