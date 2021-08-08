const { RESTDataSource } = require('apollo-datasource-rest');

class PeopleAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/';
    }
    async getPerson(url) {
        console.log(url)
        
        const response = await this.get(url.url)
        // console.log(response)
        return this.peopleReducer(response.results[0]) 
    }

    async getHomewolrd(url) {
        console.log(url)
        
        const response = await this.get(url)
        // console.log(response)
        // return this.peopleReducer(response.properties) 
    }
    async getAllPeople(page) {
        console.log(page)
        page=page.page
        const response = await this.get(`people/?page=${page}`)
    //    console.log(response)
        return Array.isArray(response.results) ?
            response.results.map(person => {return {name : person.name} }  ) :
            [];
    }

    peopleReducer(person) {
console.log(person)
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
