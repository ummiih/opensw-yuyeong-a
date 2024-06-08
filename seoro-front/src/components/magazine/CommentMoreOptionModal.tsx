import * as React from "react";
import {deleteArticleComment} from "@/lib/api/magazine/magazine";
import useGetArticleDetail from "@/lib/hooks/useGetArticleDetail";
import {useEffect} from "react";

interface Props{
    articleId: string | string[];
    commentId: number;
    isCommentMoreOptionModalOpen: boolean;
    setIsCommentMoreOptionModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentMoreOptionModal = (props: Props) => {
    const {articleId, commentId, isCommentMoreOptionModalOpen, setIsCommentMoreOptionModalOpen} = props;
    const {mutate} = useGetArticleDetail(articleId);


    useEffect(() => {
        console.log('articleId',articleId, 'commentId', commentId)
    }, [articleId, commentId]);

    return (
        <div className={
            'absolute left-0 right-0 z-50 flex flex-col gap-y-2 justify-center bg-[rgba(0,0,0,0.6)] min-h-screen'
        }>
            {/* 삭제하기 모달창 */}
            <div className={'flex flex-col gap-y-3 fixed bottom-0 bg-[#F4F5F7] w-full p-5 rounded-t-[32px]'}>
                <div className={'bg-white rounded-[24px]'}>
                    <div className={'flex justify-center items-center w-full border-b-[1px] border-b-[#F5F5F5] text-[#9E9FA1] py-4'}>댓글 메뉴</div>
                    <button
                        onClick={async ()=>{
                            await deleteArticleComment(articleId, commentId);
                            await mutate();
                            setIsCommentMoreOptionModalOpen(!isCommentMoreOptionModalOpen)
                        }}
                        className={'flex justify-center items-center w-full text-[#FF6A3B] py-4'}>삭제하기</button>
                </div>
                <button
                    onClick={()=>{
                        setIsCommentMoreOptionModalOpen(!isCommentMoreOptionModalOpen)
                    }}
                    className={'flex justify-center items-center bg-white rounded-[24px] py-4 w-full text-[#727375] text-[14px]'}>닫기</button>
            </div>
        </div>
    )
}
export default CommentMoreOptionModal;
