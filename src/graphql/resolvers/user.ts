import { GraphQLContext } from "../../util/types";

const resolvers = {
    Query: {
        searchUsers: () => {},
    },
    Mutation: {
        createUsername: (_: any, args: {username: string}, context: GraphQLContext) => {
            const {username} = args
            const {session, prisma} = context
            
            console.log("HEY", username)
            console.log("HERE IS CONTEXT", context);
        },
    },
}

export default resolvers