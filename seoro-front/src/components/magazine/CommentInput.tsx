import {useRecoilState} from "recoil";
import {commentAtom} from "@/recoil/magazine/atom";
import {CommentPostType} from "@/types/magazine/type";
import {postArticleComment} from "@/lib/api/magazine/magazine";
import {FormEvent, useEffect} from "react";
import useGetArticleDetail from "@/lib/hooks/useGetArticleDetail";

interface Props {
    articleId: string | string[];
    userId: number;
}
const CommentInput = (props: Props) => {
    const {articleId, userId} = props;
    const [comment, setComment] = useRecoilState(commentAtom);
    const {mutate} = useGetArticleDetail(articleId);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); // 폼 제출 시 새로고침 방지
        postArticleComment(articleId, comment).then(async (r)=>{
            await mutate(); // 댓글 작성하고 게시글 바로 새로 불러옴
        })
    }

    return (
        <div className={'border-[1px] border-[#F4F5F7] rounded-t-[28px] px-5 py-4 w-full fixed bottom-0 bg-white'}>
            <form onSubmit={handleSubmit} className={'flex justify-between rounded-full bg-[#F4F5F7] px-4 py-2'}>
                <input
                    onChange={(e)=>{
                        setComment((prevUser: CommentPostType) => ({
                            ...prevUser,
                            userId: userId,
                            content:e.target.value,
                        }));
                    }}
                    className={'bg-[#F4F5F7] placeholder:text-[#9E9FA1] placeholder:text-[14px] outline-none'}
                    placeholder={'댓글을 남겨주세요'}>
                </input>
                <button type={'submit'} className={'text-white text-[14px] bg-[#8D8DC1] rounded-full px-3 py-2'}>등록</button>
            </form>
        </div>
    )
}
export default CommentInput;
