import { client } from "@/lib/axios";
import {SignUpType} from "@/types/common/type";

export const postUserSignUp = async (data: FormData) => {
    try {
        const response = await client.post("/api/sign-up", data, {
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
