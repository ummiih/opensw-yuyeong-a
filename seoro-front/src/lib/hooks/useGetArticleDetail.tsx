import { AxiosResponse } from 'axios';
import useSWR from 'swr';

import { swrGetFetcher } from '@/lib/axios';

const useGetArticleDetail = () => {
    const { data, error } = useSWR<AxiosResponse>('/api/articles/1', swrGetFetcher);

    return {
        article: data,
        isLoading: !error && !data,
        isError: error,
    };
};
export default useGetArticleDetail;
