const { RESTDataSource } = require('apollo-datasource-rest');

class PeopleAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/';
    }

    async getAllPeople(page) {

        page = page.page
        const response = await this.get(`people/?page=${page}`)

        return Array.isArray(response.results) ?
            response.results.map(person => this.peopleReducer(person)) :
            [];
    }
    async getPerson(url) {

        url = url.url
        console.log(url)
        const response = await this.get(url)
        console.log(response)
        return this.peopleReducer(response) 
    }
    peopleReducer(person) {
        return {
            url: person.url,
            name: person.name,
            height: person.height,
            mass: person.mass,
            gender: person.gender,
            homeworld: person.homeworld
        }
    }

}

module.exports = PeopleAPI;
