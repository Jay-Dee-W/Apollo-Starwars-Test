const { gql } = require('apollo-server');

const typeDefs = gql`
type Person {
    url: String
    name: String
    height: String
    mass: String
    gender: String
}
type Query {
    people: [Person]
    person(url: String): Person
}
`;

module.exports = typeDefs;

