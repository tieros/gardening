const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    gardener: (_, { id }) => prisma.gardener.findUnique({ where: { id } }),
    gardeners: () => prisma.gardener.findMany(),
    service: (_, { id }) => prisma.service.findUnique({ where: { id } }),
    services: () => prisma.service.findMany(),
    location: (_, { id }) => prisma.location.findUnique({ where: { id } }),
    locations: () => prisma.location.findMany(),
    appointment: (_, { id }) => prisma.appointment.findUnique({ where: { id } }),
    appointments: () => prisma.appointment.findMany(),
    review: (_, { id }) => prisma.review.findUnique({ where: { id } }),
    reviews: () => prisma.review.findMany(),
    user: (_, { id }) => prisma.user.findUnique({ where: { id } }),
    users: () => prisma.user.findMany(),
  },
  Mutation: {
    createGardener: (_, args) => prisma.gardener.create({ data: args.data }),
    createService: (_, args) => prisma.service.create({ data: args.data }),
    createLocation: (_, args) => prisma.location.create({ data: args.data }),
    updateLocation: (_, { id, data }) => prisma.location.update({ where: { id }, data }),
    deleteLocation: (_, { id }) => prisma.location.delete({ where: { id } }),
    createAppointment: (_, args) => prisma.appointment.create({ data: args.data }),
    updateAppointment: (_, { id, data }) => prisma.appointment.update({ where: { id }, data }),
    deleteAppointment: (_, { id }) => prisma.appointment.delete({ where: { id } }),
    createReview: (_, args) => prisma.review.create({ data: args.data }),
    updateReview: (_, { id, data }) => prisma.review.update({ where: { id }, data }),
    deleteReview: (_, { id }) => prisma.review.delete({ where: { id } }),
    createUser: (_, args) => prisma.user.create({ data: args.data }),
    updateUser: (_, { id, data }) => prisma.user.update({ where: { id }, data }),
    deleteUser: (_, { id }) => prisma.user.delete({ where: { id } }),
  },
  Gardener: {
    services: (parent) => prisma.gardener.findUnique({ where: { id: parent.id } }).services(),
    location: (parent) => prisma.gardener.findUnique({ where: { id: parent.id } }).location(),
    reviews: (parent) => prisma.gardener.findUnique({ where: { id: parent.id } }).reviews(),
    appointments: (parent) => prisma.gardener.findUnique({ where: { id: parent.id } }).appointments(),
  },
}