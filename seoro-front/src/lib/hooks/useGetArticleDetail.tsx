import { AxiosResponse } from 'axios';
import useSWR from 'swr';

import { swrGetFetcher } from '@/lib/axios';
import {ArticleType} from "@/types/magazine/type";

const useGetArticleDetail = (articleId: string | string[]) => {
    const { data, error, mutate } = useSWR<ArticleType>(`/api/articles/${articleId}`, swrGetFetcher);

    return {
        article: data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
export default useGetArticleDetail;
