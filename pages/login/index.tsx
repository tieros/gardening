import Input from '@/components/UI/Input';
import { navElements } from '..';
import Navbar from '@/components/UI/Navbar';
import { useContext, useState } from 'react';
import Button from '@/components/UI/Button';
import styled from 'styled-components';
import PlantImage from '../../src/assets/card-bg.jpg';
import SignUp from './SignUp';
import { validateEmail } from '@/utils/validation';
import OnePlantImage from '../../src/assets/oneplant.png';
import Image from 'next/image';
import MobilePlantImage from '../../src/assets/heroImage.png';
import { useMutation } from '@apollo/client';
import { gql } from 'graphql-tag';
import { useRouter } from 'next/router';
import { AuthContext } from '../AuthContext';
const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        login(input: { email: $email, password: $password }) {
            accessToken
            uid
        }
    }
`;

const StyledLoginPageWrapper = styled.div<{ isLoginPage: boolean }>`
    overflow: ${({ isLoginPage }) => (isLoginPage ? 'hidden' : 'scroll')};
`;

const StyledRightColumn = styled.div`
    background: url(${PlantImage.src});
    background-size: cover;
`;

const StyledForm = styled.form`
    height: calc(100vh - 110px);
`;

const StyledMobileImage = styled.div<{ isLoginPage: boolean }>`
    display: ${({ isLoginPage }) => (isLoginPage ? 'visible' : 'none')};
    position: absolute;
    bottom: 0;
    right: -5%;
    rotate: 240deg;
`;

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginPage, setIsLoginPage] = useState(true);

    const router = useRouter();

    const [loginMutation] = useMutation(LOGIN_MUTATION);
    const { setAuthData } = useContext(AuthContext);
    const loginHandler = async () => {
        try {
            const { data } = await loginMutation({
                variables: { email, password },
            });

            const user = data.login;

            if (user) {
                setAuthData({ uid: user?.uid, isAuthenticated: true });
                localStorage.setItem('accessToken', user.accessToken);
                localStorage.setItem('uid', user.uid);
                router.push('/account');
            }
        } catch (error) {
            console.log('Login failed:', error);
        }
    };

    return (
        <StyledLoginPageWrapper
            isLoginPage={isLoginPage}
            className='bg-background w-full h-[100vh] relative'
        >
            <Navbar
                navElements={navElements}
                customStyle='md:!absolute !justify-around'
            />
            <div className='flex justify-center 2xl:justify-between items-center bg-background'>
                {isLoginPage ? (
                    <StyledForm
                        onSubmit={(event) => {
                            event.preventDefault();
                            loginHandler();
                        }}
                        className='self-center basis-full md:basis-1/2 p-8 md:p-20 flex flex-col gap-14 max-w-max xl:max-w-none 2xl:items-center md:justify-center z-10'
                    >
                        <h1 className='text-dark max-w-[357px]'>Login</h1>
                        <Input
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            onBlur={() => validateEmail(email)}
                            error={validateEmail(email)}
                            errorMessage={<span>Please enter valid email</span>}
                            label={
                                <span className='text-2xl text-dark font-semibold'>
                                    Email
                                </span>
                            }
                        />
                        <Input
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            onBlur={() => console.log(password)}
                            error={password.length < 1}
                            errorMessage={
                                <span>Please enter valid password</span>
                            }
                            label={
                                <span className='text-2xl text-dark font-semibold'>
                                    Password
                                </span>
                            }
                        />
                        <div className='self-center flex flex-col items-center'>
                            <Button type='submit'>Login</Button>
                            <p className='mt-5 inline-flex items-center'>
                                Don&apos;t have account?{' '}
                                <u
                                    onClick={() => setIsLoginPage(false)}
                                    className='cursor-pointer ml-1'
                                >
                                    Sign up
                                </u>
                                <Image
                                    className='ml-2'
                                    width={30}
                                    height={30}
                                    src={OnePlantImage}
                                    alt='one-plant-image'
                                />
                            </p>
                        </div>
                    </StyledForm>
                ) : (
                    <SignUp setIsLoginPage={setIsLoginPage} />
                )}

                <StyledRightColumn className='hidden md:block md:flex-grow bg-red-800 h-[100vh]'></StyledRightColumn>
                <StyledMobileImage
                    isLoginPage={isLoginPage}
                    className='md:hidden'
                >
                    <Image
                        src={MobilePlantImage}
                        alt='plant-image'
                        width={188}
                        height={124}
                    />
                </StyledMobileImage>
            </div>
        </StyledLoginPageWrapper>
    );
};
export default LoginPage;
