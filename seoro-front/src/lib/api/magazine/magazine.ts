import { client } from "@/lib/axios";

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
