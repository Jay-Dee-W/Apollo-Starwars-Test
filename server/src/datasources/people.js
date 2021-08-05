const { RESTDataSource } = require('apollo-datasource-rest');

class PeopleAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/';
    }

    async getAllPeople() {
         const response = await this.get(`people`)
         console.log(response)
        return Array.isArray(response.result) ?
        response.result.map(person => this.peopleReducer(person)) :
        [];
    }
    peopleReducer(person){
        return{
            url: person.url,
            name: person.name,
            height: person.height,
            mass: person.mass,
            gender: person.gender
        }
    }

}

module.exports = PeopleAPI;
