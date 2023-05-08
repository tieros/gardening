import { gql } from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        gardener(id: String!): Gardener
        gardeners: [Gardener!]!
        service(id: String!): Service
        services: [Service!]!
        location(id: String!): Location
        locations: [Location!]!
        appointment(id: String!): Appointment
        appointments: [Appointment!]!
        review(id: String!): Review
        reviews: [Review!]!
        user(id: String!): User
        users: [User!]!
    }
    type Mutation {
        createGardener(input: GardenerInput!): Gardener!
        createService(input: ServiceInput!): Service!
        createLocation(input: LocationInput!): Location!
        updateLocation(id: String!, input: LocationInput!): Location!
        deleteLocation(id: String!): Location!
        createAppointment(input: AppointmentInput!): Appointment!
        updateAppointment(id: String!, input: AppointmentInput!): Appointment!
        deleteAppointment(id: String!): Appointment!
        createReview(input: ReviewInput!): Review!
        updateReview(id: String!, input: ReviewInput!): Review!
        deleteReview(id: String!): Review!
        createUser(input: UserInput!): User!
        updateUser(id: String!, input: UserInput!): User!
        deleteUser(id: String!): User!
    }
    type Gardener {
        id: String!
        name: String!
        surname: String!
        services: [Service!]!
        points: Int!
        location: Location!
        profilePic: String
        reviews: [Review]
        appointments: [Appointment]
        appointmentId: String
    }

    type Service {
        id: String!
        name: String!
        price: Float!
        gardeners: [Gardener!]!
    }

    type Location {
        latitude: String!
        longitude: String!
        address: String!
        gardener: Gardener
        gardenerId: String
    }

    type Appointment {
        id: String!
        date: String!
        status: String!
        review: Review
        reviewId: String
        gardener: Gardener!
        gardenerId: String!
        user: User!
        userId: String!
    }

    type Review {
        id: String!
        comment: String!
        rating: Float!
        gardener: Gardener!
        gardenerId: String!
        appointment: Appointment
        appointmentId: String
    }

    type User {
        id: String!
        name: String!
        surname: String!
        email: String!
        appointments: [Appointment!]!
    }

    input GardenerInput {
        name: String!
        surname: String!
        services: [ServiceInput]
        points: Int!
        location: LocationInput
        profilePic: String
        reviews: [ReviewInput]
        appointments: [AppointmentInput]
    }

    input ServiceInput {
        name: String!
        price: Float!
        gardeners: [GardenerInput!]
    }

    input LocationInput {
        latitude: String!
        longitude: String!
        address: String!
    }

    input AppointmentInput {
        date: String!
        status: String!
        reviewId: String
        gardenerId: String!
        userId: String!
    }

    input ReviewInput {
        comment: String!
        rating: Float!
        gardenerId: String!
        appointmentId: String
    }

    input UserInput {
        name: String!
        surname: String!
        email: String!
    }
`;
