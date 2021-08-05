module.exports = {
    Query: {
      people: (_, __, { dataSources }) =>
        dataSources.peopleAPI.getAllPeople()
    }
  };