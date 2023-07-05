import StarRating from '@/components/UI/StarRating';
import Layout from '@/components/account-page/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import LocationTagIcon from '@/components/Icons/LocationTagIcon';
import DoneIcon from '@/components/Icons/DoneIcon';
import OngoingIcon from '@/components/Icons/OngoingIcon';
import Tag from '@/components/UI/Tag';
import Button from '@/components/UI/Button';
import { useState } from 'react';
import ReviewModal from '@/components/account-page/ReviewModal';

const mockData = [
    {
        id: 1,
        status: 'Scheduled',
        date: '2023-07-01',
        gardener: {
            profilePic: 'https://randomuser.me/api/portraits/men/40.jpg',
            points: 5,
            name: 'Sofia',
            surname: 'Hel',
            location: {
                address: '123 Garden Street',
            },
        },
    },
    {
        id: 2,
        status: 'DONE',
        date: '2023-07-02',
        gardener: {
            profilePic: 'https://randomuser.me/api/portraits/men/40.jpg',
            name: 'Sofia',
            surname: 'Hel',
            points: 8,
            location: {
                address: '456 Green Avenue',
            },
        },
    },
];
const StyledImage = styled(Image)`
    border-radius: 50%;
`;
const StyledAppointmentCard = styled.div`
    border-radius: 15px;
    padding: 30px;
    background: #fffffc;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1),
        0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 5px 5px 0px rgba(0, 0, 0, 0.09),
        0px 11px 6px 0px rgba(0, 0, 0, 0.05),
        0px 19px 8px 0px rgba(0, 0, 0, 0.01), 0px 29px 8px 0px rgba(0, 0, 0, 0);
`;
const MyAppointments = () => {
    const [reviewModalIsOpen, setReviewModalIsOpen] = useState(false);
    return (
        <Layout>
            <div className='flex gap-5 p-10 flex-col h-[90vh] overflow-y-scroll overflow-x-hidden w-full'>
                {reviewModalIsOpen ? (
                    <ReviewModal onClose={setReviewModalIsOpen} />
                ) : null}
                {mockData.map((appointment) => (
                    <StyledAppointmentCard key={appointment.id}>
                        <div className='flex gap-4 items-center w-full'>
                            <StyledImage
                                src={appointment.gardener.profilePic}
                                alt='gardener-profile-picture'
                                width={50}
                                height={50}
                            />

                            <div className='flex justify-between min-w-[226px] items-baseline w-full'>
                                <div className='flex flex-col'>
                                    <h6 className='text-dark font-semibold'>
                                        {appointment.gardener.name}
                                    </h6>
                                    <StarRating rating={4.4} readOnly={true} />
                                </div>
                                <div className='inline-flex gap-[5px]'>
                                    <LocationTagIcon width={16} height={23} />
                                    {appointment.gardener.location.address}
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 p-7'>
                            <div className='inline-flex gap-3'>
                                <Tag
                                    mode='light'
                                    label='Services Requested: '
                                    size='small'
                                />
                                <Tag label='#mowing' size='small' />
                                <Tag label='#fertilizing' size='small' />
                            </div>

                            <Tag
                                mode='light'
                                label={
                                    <div className='inline-flex items-center'>
                                        Status:
                                        {appointment.status === 'DONE' ? (
                                            <DoneIcon />
                                        ) : (
                                            <OngoingIcon />
                                        )}
                                        {appointment.status.toLocaleLowerCase()}
                                    </div>
                                }
                                size='small'
                            />
                            <Tag
                                mode='light'
                                label={
                                    <div className='inline-flex items-center'>
                                        Date: {appointment.date}
                                    </div>
                                }
                                size='small'
                            />
                        </div>

                        <div className='flex gap-10 justify-center'>
                            <Button mode='secondary'>Book Again</Button>
                            <Button
                                mode='white'
                                onClick={() => setReviewModalIsOpen(true)}
                            >
                                Write Review
                            </Button>
                        </div>
                    </StyledAppointmentCard>
                ))}
                <StyledAppointmentCard></StyledAppointmentCard>
            </div>
        </Layout>
    );
};
export default MyAppointments;
