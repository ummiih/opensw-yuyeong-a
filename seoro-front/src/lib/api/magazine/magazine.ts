import { client } from "@/lib/axios";
import {CommentPostType} from "@/types/magazine/type";

export const postArticle = async (data: FormData) => {
    try {
        const response = await client.post("/api/articles", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        // 성공적인 응답 처리
        return response.data;

    } catch (error) {
        // 에러 처리
        console.error("유저 post 에러 발생:", error);
    }
};

export const postArticleComment = async (articleId: string| string[], data: CommentPostType) => {
    try {
        const response = await client.post(`/api/articles/${articleId}/comments`, data);
        // 성공적인 응답 처리
        return response.data;

    } catch (error) {
        // 에러 처리
        console.error("유저 post 에러 발생:", error);
    }
};

export const deleteArticleComment = async (articleId: string| string[], commentId: number) => {
    try {
        const response = await client.delete(`/api/articles/${articleId}/comments/${commentId}`);
        // 성공적인 응답 처리
        return response.data;

    } catch (error) {
        // 에러 처리
        console.error("유저 post 에러 발생:", error);
    }
};
