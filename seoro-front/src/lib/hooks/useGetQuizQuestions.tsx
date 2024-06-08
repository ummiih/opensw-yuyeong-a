import useSWR from 'swr';

import { swrGetFetcher } from '@/lib/axios';
import {QuizQuestionType} from "@/types/quiz/type";

const useGetQuizQuestions = (quizId: string | string[]) => {
    const { data, error, mutate } = useSWR<QuizQuestionType[]>(`/api/${quizId}/questions`, swrGetFetcher);

    const parseResultList = data ? data.map((quizQuestion) => quizQuestion).flat() : null;

    return {
        quizQuestions: parseResultList,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
export default useGetQuizQuestions;
