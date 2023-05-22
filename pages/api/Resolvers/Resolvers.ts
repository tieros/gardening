import { ServiceName } from '@prisma/client';
import { createClient } from '@supabase/supabase-js'

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
);

export const resolvers = {
    Query: {
        gardener: (_, { id }) => prisma.gardener.findUnique({ where: { id } }),
        gardeners: () => prisma.gardener.findMany(),
        service: (_, { servicename }: ServiceName) =>
            prisma.service.findUnique({ where: { servicename } }),
        services: () => prisma.service.findMany(),
        location: (_, { address }) => prisma.location.findUnique({ where: { address } }),
        locations: () => prisma.location.findMany(),
        appointment: (_, { id }) => prisma.appointment.findUnique({ where: { id } }),
        appointments: () => prisma.appointment.findMany(),
        review: (_, { id }) => prisma.review.findUnique({ where: { id } }),
        reviews: () => prisma.review.findMany(),
        user: (_, { id }) => prisma.user.findUnique({ where: { id } }),
        users: () => prisma.user.findMany(),
    },
    Mutation: {
        createAppointment: (_, args) => prisma.appointment.create({ data: args.data }),
        updateAppointment: (_, { id, data }) => prisma.appointment.update({ where: { id }, data }),
        deleteAppointment: (_, { id }) => prisma.appointment.delete({ where: { id } }),
        createReview: (_, args) => prisma.review.create({ data: args.data }),
        updateReview: (_, { id, data }) => prisma.review.update({ where: { id }, data }),
        deleteReview: (_, { id }) => prisma.review.delete({ where: { id } }),
        createUser: (_, args) => prisma.user.create({ data: args.data }),
        updateUser: (_, { id, data }) => prisma.user.update({ where: { id }, data }),
        deleteUser: (_, { id }) => prisma.user.delete({ where: { id } }),
        register: async (_, { input }) => {
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
                    email: input.email,
                    name: input.name,
                    surname: input.surname,
                },
            });

            return createdUser; // Return the created user
        },
        login: async (_, { input }) => {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: input.email,
                password: input.password,
            });

            if (error) {
                throw new Error(error.message);
            }
          const currentUser = prisma.user.findUnique({where: {id: data?.user?.id}})
          return {
            accessToken: data?.session?.access_token,
            expiresIn: data?.session?.expires_in,
            user: currentUser
          }
        },
    },
    Gardener: {
        services: (parent) => prisma.gardener.findUnique({ where: { id: parent.id } }).services(),
        location: (parent) => prisma.gardener.findUnique({ where: { id: parent.id } }).location(),
        reviews: (parent) => prisma.gardener.findUnique({ where: { id: parent.id } }).reviews(),
        appointments: (parent) =>
            prisma.gardener.findUnique({ where: { id: parent.id } }).appointments(),
    },
};
