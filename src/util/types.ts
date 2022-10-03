import { PrismaClient } from "@prisma/client";
import { ISODateString } from "next-auth";

/**
 * Server Configuration
 */
export interface GraphQLContext {
    session: Session | null
    prisma: PrismaClient
    // pubsub
}
export interface Session {
    user?: User
    expires: ISODateString
}

/**
 * Users
 */
export interface User {
    id: string
    username: string
    email: string
    emailVerified: boolean
    image: string
    name:string
}
export interface CreateUsernameResponse {
    success?: boolean
    error?: string
}