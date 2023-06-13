import Input from '@/components/UI/Input';
import { navElements } from '..';
import Navbar from '@/components/UI/Navbar';
import { useState } from 'react';
import Button from '@/components/UI/Button';
import styled from 'styled-components';
import Image from '../../src/assets/card-bg.jpg';
import SignUp from './SignUp';
import { validateEmail } from '@/utils/validation';

const StyledRightColumn = styled.div`
    background: url(${Image.src});
    background-size: cover;
`;

const StyledForm = styled.form`
    height: calc(100vh - 110px);
`;

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginPage, setIsLoginPage] = useState(true);
    return (
        <div className='bg-background w-full h-[100vh]'>
            <Navbar
                navElements={navElements}
                customStyle={{
                    justifyContent: 'space-around',
                    position: 'absolute',
                }}
            />
            <div className='flex h-[100vh] justify-center md:justify-start 2xl:justify-between'>
                {isLoginPage ? (
                    <StyledForm className='self-center basis-full md:basis-1/2 p-16 md:p-20 flex flex-col gap-14 max-w-max xl:max-w-none 2xl:items-center justify-center bg-background'>
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
                            onBlur={() => validateEmail(password)}
                            error={validateEmail(password)}
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
                            <Button>Login</Button>
                            <p className='mt-5'>
                                Don&apos;t have account?{' '}
                                <u onClick={() => setIsLoginPage(false)}>
                                    Sign up
                                </u>
                            </p>
                        </div>
                    </StyledForm>
                ) : (
                    <SignUp setIsLoginPage={setIsLoginPage} />
                )}

                <StyledRightColumn className='hidden md:block md:flex-grow bg-red-800 h-[100vh]'></StyledRightColumn>
            </div>
        </div>
    );
};
export default LoginPage;
