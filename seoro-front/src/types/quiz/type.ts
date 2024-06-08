export interface QuizQuestionType {
    questionId: QuizQuestionIdType;
    quiz: QuizType;
    answer: boolean;
    content: string;
}
export interface QuizType {
    quizId: 1,
    title: "string"
}

export interface QuizQuestionIdType {
    quizId: number;
    sequence: number;
}
