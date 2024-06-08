import useSWR from 'swr';

import { swrGetFetcher } from '@/lib/axios';
import {QuizType} from "@/types/quiz/type";

const useGetQuizzes = () => {
    const { data, error } = useSWR<QuizType[]>('/api/quizzes', swrGetFetcher);

    const parseResultList = data ? data.map((article) => article).flat() : null;

    return {
        quizzes: parseResultList,
        isLoading: !error && !data,
        isError: error,
    };
};
export default useGetQuizzes;
