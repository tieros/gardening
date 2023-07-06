import EditIcon from '@/components/Icons/EditIcon';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import Layout from '@/components/account-page/Layout';
import { useState } from 'react';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
    background: linear-gradient(
        131.19deg,
        rgba(212, 215, 210, 0.2) 13.41%,
        rgba(215, 225, 154, 0.2) 37.88%,
        rgba(195, 209, 115, 0.2) 68.42%,
        rgba(135, 146, 73, 0.2) 89.58%
    );
    border: 1px solid #fcfcfc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        inset -2px -2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    padding: 4rem 10rem;
    gap: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
            <div className='p-10 flex justify-center items-center'>
                <StyledCardContainer>
                    <h4 className='text-dark'>Profile</h4>
                    <div className='inline-flex items-end'>
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
                        {isEditMode ? <EditIcon /> : null}
                    </div>
                    <div className='inline-flex items-end'>
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
                        {isEditMode ? <EditIcon /> : null}
                    </div>
                    <div className='inline-flex items-end'>
                        <Input
                            value={userInfo.email}
                            onChange={() =>
                                console.log('you cannot change email')
                            }
                            label='Email'
                            disabled={true}
                        />
                        {isEditMode ? (
                            <EditIcon className='opacity-20' />
                        ) : null}
                    </div>
                    <div className='inline-flex items-end'>
                        <Input
                            value={userInfo.password}
                            onChange={() =>
                                console.log('you cannot change email')
                            }
                            type='password'
                            label='Password'
                            disabled={!isEditMode}
                        />
                        {isEditMode ? <EditIcon /> : null}
                    </div>
                    {isEditMode ? (
                        <Button onClick={() => setIsEditMode(false)}>
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
            </div>
        </Layout>
    );
};

export default Profile;
