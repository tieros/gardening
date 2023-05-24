import { FunctionComponent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from 'graphql-tag';

const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        login(input: { email: $email, password: $password }) {
            accessToken
            expiresIn
            user {
                name
            }
        }
    }
`;

const Account = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginMutation, { data }] = useMutation(LOGIN_MUTATION);

    console.log(data);
    return (
        <div>
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={() =>
                    loginMutation({ variables: { email, password } })
                }
            >
                Click
            </button>
        </div>
    );
};

export default Account;
