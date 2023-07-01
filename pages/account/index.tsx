import React, { useEffect, useState } from 'react';
import Layout from '@/components/account-page/Layout';
import { supabase } from '../api/supabase';
import protectedRoute from './protectedRoute';
import { gql } from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Map from '@/components/account-page/Map';

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
                <h1>Welcome</h1>
                <Map />
            </Layout>
        </div>
    );
};

export default protectedRoute(Account);
