import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoHeader={
 'x-rapidapi-key': 'your key',
 'x-rapidapi-host': 'host'
}

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest=(url)=>({
    url,
    headers:cryptoHeader
});

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
        })
    })
});

export const { useGetCryptosQuery } = cryptoApi;
