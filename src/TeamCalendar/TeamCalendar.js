import React from 'react';
import gotService from '../services/gotService';
import { DatePicker, Descriptions } from 'antd';




export default class TeamCalendar extends React.Component {

    gotService = new gotService();

    state = {
        matches: null,
    }

    componentDidMount() {
        this.gotService.getTeamMatches(this.props.commandId)
            .then(({matches}) => {
                const itemsToState = matches.map(({id, awayTeam: {name: awayTeamName}, competition: {name: competitionName}, homeTeam: {name: homeTeamName},
                    status, utcDate}) => {
                    return {
                        id,
                        awayTeamName,
                        competitionName,
                        homeTeamName,
                        status,
                        utcDate
                    }
                })
                this.setState({matches: itemsToState})
                console.log(this.state);
            })
    }

    renderItems(arr) {
        
        return arr.map(({id, awayTeamName, competitionName, homeTeamName, status, utcDate}) => {
            const localDate = new Date(utcDate).toLocaleString();
           return ( 
                <Descriptions key={id} title={competitionName}>
                    <Descriptions.Item label="Home Team">{homeTeamName}</Descriptions.Item>
                    <Descriptions.Item label="Away Team">{awayTeamName}</Descriptions.Item>
                    <Descriptions.Item label="Status">{status}</Descriptions.Item>
                    <Descriptions.Item label="Date">{localDate}</Descriptions.Item>
                </Descriptions>
            )
        })
    }

    render() {
        const {matches} = this.state;

        if (!matches) {
            return <div>Загрузка</div>
        }

        const items = this.renderItems(matches);
        const { RangePicker } = DatePicker;
        const dateFormat = 'YYYY/MM/DD';
        return (
            
            <>
            <RangePicker
            format={dateFormat}
            />
            {items.map(item => item)}
            </>
        )
    }
}