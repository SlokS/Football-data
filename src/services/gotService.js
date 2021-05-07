export default class GotService {
    constructor() {
        this._apiBase = 'http://api.football-data.org/v2';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`,
            {
                method: 'GET',
                headers: {
                    'X-Auth-Token': 'f8083278e8ef4832a89f76e168b9d7b9'
                }
            }
        );
            
        if (!res.ok) {
            const errorRes = await res.json();
          throw new Error(`Could not fetch ${url}` +
            `,${res.status}. ${errorRes.message}`);
        }
        return await res.json();
    }

    getTestResource = async (url) => {
        const res = await this.getResource(url);
        return res;
    }
    
    // Получить все матчи за промежуток времени
    // Например /matches?competitions=PL&dateFrom=2021-04-25&dateTo=2021-05-05
    // Нельзя взять промежуток времени больше 10 дней, вернет ошибку со статусом 400
    getAllMatches = async (id) => {
        const res = await this.getResource(`/matches?competitions=${id}&dateFrom=2021-04-25&dateTo=2021-05-05`);
        return res;
    }

    // Получить все доступные лиги
    //работает
    getAllCompetitions = async () => {
        const res = await this.getResource(`/competitions/`);
        return res;
    }

    // Получить лигу по id
    // работает /competitions/BL1/ пример
    getCompetition = async (id) => {
        const res = await this.getResource(`/competitions/${id}/`);
        return res;
    }

    // Получить все команды в лиге
    // Работает, пример /competitions/BL1/teams/
    getAllTeams = async (id) => {
        const res = await this.getResource(`/competitions/${id}/teams/`);
        return res;
    }

    // Получить команду по id
    // Работает /teams/5529/
    getTeam = async (id) => {
        const res = await this.getResource(`/teams/${id}/`);
        return res;
    }

    // Получить матчи команды по id
    // Работает, пример /teams/5529/matches/
    getTeamMatches = async (id) => {
        const res = await this.getResource(`/teams/${id}/matches/`);
        return res;
    }

}