import React, { useState } from 'react';
import Layout from '@/components/account-page/Layout';

import protectedRoute from './protectedRoute';
import { gql } from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Map from '@/components/account-page/Map';
import GardenerProfileCard, {
    GardenerProfile,
} from '@/components/account-page/GardenerProfileCard';
import GardenerSearchBox from '@/components/account-page/GardenerSearchBox';
import LoadingSpinner from '@/components/UI/LoadingSpinner';

const Account = () => {
    const GET_GARDENERS = gql`
        query Gardeners {
            gardeners {
                id
                location {
                    address
                    latitude
                    longitude
                }
                name
                surname
                profilePic
                points
                services {
                    name
                }
            }
        }
    `;

    const { data, loading } = useQuery(GET_GARDENERS);

    const [filteredGardeners, setFilteredGardeners] =
        useState<GardenerProfile[]>();

    const [isLoading, setIsLoading] = useState(false);
    return (
        <div>
            <Layout>
                <div className='lg:p-8 lg:bg-white flex flex-col-reverse lg:flex-row rounded-[30px] m-3 lg:m-[30px] lg:shadow-mapContainer gap-[50px]'>
                    <div className='basis-[40%] flex flex-col gap-5 h-[572px] overflow-y-scroll p-2'>
                        <GardenerSearchBox
                            setFilteredGardeners={setFilteredGardeners}
                            setIsLoading={setIsLoading}
                        />

                        {isLoading ? (
                            <LoadingSpinner />
                        ) : filteredGardeners &&
                          filteredGardeners?.length > 0 ? (
                            filteredGardeners.map(
                                (gardener: GardenerProfile) => (
                                    <GardenerProfileCard
                                        gardener={gardener}
                                        key={gardener.id}
                                    />
                                ),
                            )
                        ) : (
                            data?.gardeners?.map(
                                (gardener: GardenerProfile) => (
                                    <GardenerProfileCard
                                        gardener={gardener}
                                        key={gardener.id}
                                    />
                                ),
                            )
                        )}
                    </div>
                    <div className='basis-[60%]'>
                        <Map gardeners={data?.gardeners} />
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default protectedRoute(Account);
