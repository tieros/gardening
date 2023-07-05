import { gql } from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        gardener(id: String!): Gardener
        gardeners: [Gardener!]!
        searchGardeners(searchQuery: [String!]): [Gardener!]!
        service(id: String!): Service
        services: [Service!]!
        location(id: String!): Location
        locations: [Location!]!
        appointment(id: String!): Appointment
        appointments: [Appointment!]!
        review(id: String!): Review
        reviews: [Review!]!
        user(id: ID!): User
        users: [User!]!
        currentUser: User
    }
    type Mutation {
        createAppointment(input: AppointmentInput!): Appointment!
        updateAppointment(id: String!, input: AppointmentInput!): Appointment!
        deleteAppointment(id: String!): Appointment!
        createReview(input: ReviewInput!): Review!
        updateReview(id: String!, input: ReviewInput!): Review!
        deleteReview(id: String!): Review!
        createUser(input: UserInput!): User!
        updateUser(id: String!, input: UserInput!): User!
        deleteUser(id: String!): User!
        signup(input: RegisterInput!): AuthPayload!
        login(input: LoginInput!): AuthPayload!
        logout: Boolean!
    }
    type Gardener {
        id: String!
        name: String!
        surname: String!
        services: [Service!]!
        location: Location!
        points: Float
        profilePic: String
        reviews: [Review]
        appointments: [Appointment]
    }

    type Service {
        id: String!
        name: ServiceName!
        price: Float!
        gardeners: [Gardener!]!
    }

    type Location {
        latitude: String!
        longitude: String!
        address: String!
        gardener: Gardener
    }

    type Appointment {
        id: String!
        date: String!
        status: Status!
        review: Review
        gardener: Gardener!
        user: User!
    }

    type Review {
        id: String!
        comment: String!
        points: Float!
        gardener: Gardener!
        appointment: Appointment
    }

    type User {
        id: String!
        name: String!
        surname: String!
        email: String!
        appointments: [Appointment!]!
    }

    type AuthPayload {
        accessToken: String!
        uid: String!
    }

    enum ServiceName {
        MOWING
        WEEDCONTROL
        DESIGN
        PESTCONTROL
        MULCHING
        TRIMMING
        FERTILIZING
        LEAFREMOVAL
        MAINTENANCE
        LANDSCAPING
        PLANTING
        PRUNING
    }
    enum Status {
        DONE
        ONGOING
        SCHEDULED
    }

    input AppointmentInput {
        date: String!
        status: Status!
        gardenerId: String!
        userId: ID!
        review: ReviewInput
    }

    input ReviewInput {
        comment: String!
        rating: Float!
        gardenerId: ID!
        appointmentId: String
    }

    input UserInput {
        name: String!
        surname: String!
        email: String!
    }

    input RegisterInput {
        name: String!
        surname: String!
        email: String!
        password: String!
    }

    input LoginInput {
        email: String!
        password: String!
    }
`;
