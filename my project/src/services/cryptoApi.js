import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeader = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',  // Corrected the syntax here
    'x-rapidapi-key': '2260101f85msh06433a18877f6a4p1947e0jsnf49385fd0a24'
};


const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
        }),  
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
        
          getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
})
})

export const { useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,} = cryptoApi