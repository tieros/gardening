import { ServiceName } from '@prisma/client';
import { supabase } from '../supabase';

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export const resolvers = {
    Query: {
        gardener: (_, { id }) => prisma.gardener.findUnique({ where: { id } }),
        gardeners: () => prisma.gardener.findMany(),
        searchGardeners: async (_, { searchQuery }) => {
            let gardeners;

            if (
                Array.isArray(searchQuery) &&
                searchQuery.some((item) =>
                    Object.values(ServiceName).includes(item),
                )
            ) {
                // If searchQuery is a valid enum value, search by service name
                gardeners = await prisma.gardener.findMany({
                    where: {
                        AND: searchQuery.map((service) => ({
                            services: {
                                some: {
                                    name: service,
                                },
                            },
                        })),
                    },
                });
            } else {
                // If searchQuery is not an enum value, search by name, surname, and location
                gardeners = await prisma.gardener.findMany({
                    where: {
                        OR: [
                            { name: { contains: searchQuery[0] || '' } },
                            { surname: { contains: searchQuery[0] || '' } },
                            {
                                location: {
                                    address: { contains: searchQuery[0] || '' },
                                },
                            },
                        ],
                    },
                });
            }

            return gardeners;
        },

        service: (_, { servicename }: ServiceName) =>
            prisma.service.findUnique({ where: { servicename } }),
        services: () => prisma.service.findMany(),
        location: (_, { address }) =>
            prisma.location.findUnique({ where: { address } }),
        locations: () => prisma.location.findMany(),
        appointment: (_, { id }) =>
            prisma.appointment.findUnique({ where: { id } }),
        appointments: () => prisma.appointment.findMany(),
        review: (_, { id }) => prisma.review.findUnique({ where: { id } }),
        reviews: () => prisma.review.findMany(),
        user: (_, { id }) => prisma.user.findUnique({ where: { id } }),
        users: () => prisma.user.findMany(),
    },
    Mutation: {
        createAppointment: (_, args) =>
            prisma.appointment.create({ data: args.data }),
        updateAppointment: (_, { id, data }) =>
            prisma.appointment.update({ where: { id }, data }),
        deleteAppointment: (_, { id }) =>
            prisma.appointment.delete({ where: { id } }),
        createReview: (_, args) => prisma.review.create({ data: args.data }),
        updateReview: (_, { id, data }) =>
            prisma.review.update({ where: { id }, data }),
        deleteReview: (_, { id }) => prisma.review.delete({ where: { id } }),
        createUser: (_, args) => prisma.user.create({ data: args.data }),
        updateUser: (_, { id, data }) =>
            prisma.user.update({ where: { id }, data }),
        deleteUser: (_, { id }) => prisma.user.delete({ where: { id } }),
        signup: async (_, { input }) => {
            const { data, error } = await supabase.auth.signUp({
                email: input.email,
                password: input.password,
            });

            if (error) {
                throw new Error(error.message);
            }

            // Create the user in the public schema using Prisma
            const createdUser = await prisma.user.create({
                data: {
                    id: data?.user?.id,
                    email: data?.user?.email,
                    name: input.name,
                    surname: input.surname,
                },
            });
            return {
                uid: data?.user?.id,
                accessToken: data?.session?.access_token,
            };
        },
        login: async (_, { input }) => {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: input.email,
                password: input.password,
            });

            if (error) {
                throw new Error(error.message);
            }

            return {
                uid: data?.user?.id,
                accessToken: data?.session?.access_token,
            };
        },
        logout: async () => {
            const { error } = await supabase.auth.signOut();
            if (!error) {
                return true;
            }
            return false;
        },
    },
    Gardener: {
        services: (parent) =>
            prisma.gardener.findUnique({ where: { id: parent.id } }).services(),
        location: (parent) =>
            prisma.gardener.findUnique({ where: { id: parent.id } }).location(),
        reviews: (parent) =>
            prisma.gardener.findUnique({ where: { id: parent.id } }).reviews(),
        appointments: (parent) =>
            prisma.gardener
                .findUnique({ where: { id: parent.id } })
                .appointments(),
    },
};
