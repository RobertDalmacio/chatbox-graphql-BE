
const resolvers = {
    Query: {
        searchUsers: () => {},
    },
    Mutation: {
        createUsername: () => {
            console.log("HEY")
        },
    },
}

export default resolvers