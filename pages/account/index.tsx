import React, { useEffect, useState } from 'react';
import Layout from '@/components/account-page/Layout';
import { supabase } from '../api/supabase';
import protectedRoute from './protectedRoute';
import { gql } from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Map from '@/components/account-page/Map';
import GardenerProfileCard from '@/components/account-page/GardenerProfileCard';
import Input from '@/components/UI/Input';

const mockGardeners = [
    {
        id: 1,
        name: 'Gardener 1',
        latitude: 51.5283,
        longitude: -0.0648,
        profilePic: 'https://randomuser.me/api/portraits/men/33.jpg',
        points: 4.7,
        address: 'London',
        services: ['MOWING'],
        info: 'I am a hebe hube auedm euroed meejösö.',
    },
    {
        id: 2,
        name: 'Gardener 2',
        latitude: 51.5145,
        longitude: -0.1416,
        profilePic: 'https://randomuser.me/api/portraits/men/33.jpg',
        points: 4.7,
        address: 'London',
        services: ['MOWING'],
    },
    {
        id: 3,
        name: 'Gardener 3',
        latitude: 51.5077,
        longitude: -0.1226,
        profilePic: 'https://randomuser.me/api/portraits/men/33.jpg',
        points: 4.7,
        address: 'London',
        services: ['MOWING'],
    },
    {
        id: 4,
        name: 'Gardener 4',
        latitude: 51.5007,
        longitude: -0.1246,
        profilePic: 'https://randomuser.me/api/portraits/men/33.jpg',
        points: 4.7,
        address: 'London',
        services: ['MOWING'],
    },
];
const Account = () => {
    const [user, setUser] = useState();

    // const GET_USER = gql`
    //     mutation Login($email: String!, $password: String!) {
    //         login(input: { email: $email, password: $password }) {
    //             accessToken
    //             uid
    //         }
    //     }
    // `;
    // const { data, loading } = useQuery(GET_USER);

    return (
        <div>
            <Layout>
                <div className='p-8 bg-white flex rounded-[30px] m-[30px] shadow-mapContainer gap-[50px]'>
                    <div className='basis-1/3 flex flex-col gap-5 h-[572px] overflow-y-scroll p-2'>
                        <GardenerProfileCard gardener={mockGardeners[0]} />
                        <GardenerProfileCard gardener={mockGardeners[1]} />
                        <GardenerProfileCard gardener={mockGardeners[1]} />
                    </div>
                    <div className='basis-2/3'>
                        <Map gardeners={mockGardeners} />
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default protectedRoute(Account);
