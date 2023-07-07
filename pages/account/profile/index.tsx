import EditIcon from '@/components/Icons/EditIcon';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import Layout from '@/components/account-page/Layout';
import { useState } from 'react';
import Toast from '../../../src/components/UI/Toast';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import OnePlant from '../../../src/assets/oneplant.png';

const StyledContainer = styled.div`
    background: url(${OnePlant.src});
    background-repeat: no-repeat;
    background-position: left -40% bottom;
    height: calc(100vh - 110px);
    background-size: 60%;
`;

const StyledCardContainer = styled.div`
    background: linear-gradient(
        131.19deg,
        rgba(212, 215, 210, 0.2) 13.41%,
        rgba(215, 225, 154, 0.2) 37.88%,
        rgba(195, 209, 115, 0.2) 68.42%,
        rgba(135, 146, 73, 0.2) 89.58%
    );
    border: 1px solid #fcfcfc;
    backdrop-filter: blur(5px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        inset -2px -2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: min-content;

    .edit-icon-wrapper {
        width: 30px;
        svg {
            position: absolute;
            top: 50%;
            right: 0;
        }
    }

    button {
        margin-top: 30px;
    }
`;

type UserInfo = {
    name: string;
    surname: string;
    email: string;
    password: string;
};

const Profile = () => {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        name: 'Josh',
        surname: 'Jello',
        email: 'eekde@gmail.com',
        password: 'lakjd',
    });
    const [isEditMode, setIsEditMode] = useState(false);
    return (
        <Layout>
            <ToastContainer />
            <StyledContainer className='p-10 flex justify-center w-full h-full'>
                <StyledCardContainer className='gap-7 lg:gap-50px p-8 lg:p-14'>
                    <h4 className='text-dark'>Profile</h4>
                    <div className='flex gap-7 flex-col lg:flex-row'>
                        <div className='inline-flex items-end relative'>
                            <Input
                                value={userInfo.name}
                                onChange={(event) =>
                                    setUserInfo({
                                        ...userInfo,
                                        name: event.target.value,
                                    })
                                }
                                label='Name'
                                disabled={!isEditMode}
                            />
                            {isEditMode ? (
                                <div className='edit-icon-wrapper'>
                                    <EditIcon />
                                </div>
                            ) : null}
                        </div>
                        <div className='inline-flex items-end relative'>
                            <Input
                                value={userInfo.surname}
                                onChange={(event) =>
                                    setUserInfo({
                                        ...userInfo,
                                        surname: event.target.value,
                                    })
                                }
                                label='Surname'
                                disabled={!isEditMode}
                            />
                            {isEditMode ? (
                                <div className='edit-icon-wrapper'>
                                    <EditIcon />
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className='flex gap-7 flex-col lg:flex-row'>
                        <div className='inline-flex items-end relative'>
                            <Input
                                value={userInfo.email}
                                onChange={() =>
                                    console.log('you cannot change email')
                                }
                                label='Email'
                                disabled={true}
                            />
                            {isEditMode ? (
                                <div className='edit-icon-wrapper'>
                                    <EditIcon className='opacity-20' />
                                </div>
                            ) : null}
                        </div>
                        <div className='inline-flex items-end relative'>
                            <Input
                                value={userInfo.password}
                                onChange={() =>
                                    console.log('you cannot change email')
                                }
                                type='password'
                                label='Password'
                                disabled={!isEditMode}
                            />
                            {isEditMode ? (
                                <div className='edit-icon-wrapper'>
                                    <EditIcon />
                                </div>
                            ) : null}
                        </div>
                    </div>
                    {isEditMode ? (
                        <Button
                            onClick={() => {
                                Toast({
                                    content: <p>Successfully changed!</p>,
                                    mode: 'success',
                                });
                                setTimeout(() => setIsEditMode(false), 1000);
                            }}
                        >
                            Save Changes
                        </Button>
                    ) : (
                        <Button
                            onClick={() => setIsEditMode(true)}
                            mode='white'
                        >
                            Edit Profile
                        </Button>
                    )}
                </StyledCardContainer>
            </StyledContainer>
        </Layout>
    );
};

export default Profile;
