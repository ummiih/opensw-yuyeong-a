import { AxiosResponse } from 'axios';
import useSWR from 'swr';

import { swrGetFetcher } from '@/lib/axios';
import {ArticleType} from "@/types/magazine/type";

const useGetArticles = () => {
    const { data, error } = useSWR<ArticleType[]>('/api/articles', swrGetFetcher);

    const parseResultList = data ? data.map((article) => article).flat() : null;

    return {
        articles: parseResultList,
        isLoading: !error && !data,
        isError: error,
    };
};
export default useGetArticles;
