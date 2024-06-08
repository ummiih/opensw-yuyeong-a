'use client';

import * as React from "react";
import {SVGProps, useEffect, useState} from "react";
import Header from "@/components/magazine/Header";
import Image from "next/image";
import CommentInput from "@/components/magazine/CommentInput";
import Comment from "@/components/magazine/Comment";
import {useParams} from "next/navigation";
import useGetArticleDetail from "@/lib/hooks/useGetArticleDetail";
import {useRecoilState, useRecoilValue} from "recoil";
import {userInfoAtom} from "@/recoil/atom";
import CommentMoreOptionModal from "@/components/magazine/CommentMoreOptionModal";
import {deleteCommentIdAtom} from "@/recoil/magazine/atom";
import {putClickedLikeButton} from "@/lib/api/magazine/magazine";

const ArticleDetail = () => {
    const [isLikeButtonClicked, setIsLikeButtonClicked] = useState(false);
    const [isCommentMoreOptionModalOpen, setIsCommentMoreOptionModalOpen] = useState(false);
    const [deleteCommentId, setDeleteCommentId] = useRecoilState(deleteCommentIdAtom);
    const userInfo = useRecoilValue(userInfoAtom);
    const query = useParams();

    const {article, mutate} = useGetArticleDetail(query.id);

    const formatDate = (dateString: string | undefined) => {
        const date = new Date(dateString ? dateString : 0);

        // 연, 월, 일 추출
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
        const day = String(date.getDate()).padStart(2, '0');

        // 원하는 형식으로 변환
        return `${year}.${month}.${day}`
    }

    return (
        <div className={'relative min-h-screen'}>
            {isCommentMoreOptionModalOpen ?
                <CommentMoreOptionModal
                    commentId={deleteCommentId}
                    articleId={query.id}
                    setIsCommentMoreOptionModalOpen={setIsCommentMoreOptionModalOpen}
                    isCommentMoreOptionModalOpen={isCommentMoreOptionModalOpen}/>
                : null}
            <Header path={'/magazine'} title={'Magazine'} rightElement={<EmptyIcon/>}></Header>
            <div className={'flex flex-col gap-y-4 px-5 py-4'}>
                {/*  title, date, writer */}
                <div className={'flex justify-between items-start'}>
                    <div className={'text-[20px] text-[#54515F] font-semibold'}>{article?.title}</div>
                    <div className={'flex flex-col items-end text-[14px] text-[#54515F] mt-1'}>
                        <div>{formatDate(article?.createdAt)}</div>
                        <div>{article?.user.username}</div>
                    </div>
                </div>

                {/* image, content */}
                <div className={'flex flex-col gap-y-4'}>
                    {/*Image*/}
                    <div className={'relative w-full h-[200px]'}>
                        {article?.imageUrl
                            ? <Image src={article?.imageUrl} alt={'/post.png'} className={'object-cover'} fill></Image>
                            : null
                        }
                    </div>
                    {/*content*/}
                    <div className={'text-[16px] break-words overflow-wrap break-word'}>{article?.content}</div>
                </div>

                {/* like, comment */}
                <div className={'flex justify-between items-center'}>
                    <div className={'flex gap-x-2'}>
                        <div className={'flex gap-x-1 text-[12px] text-[#727375]'}>
                            <div>관심</div>
                            <div>{article?.viewCount}</div>
                        </div>
                        <div className={'flex gap-x-1 text-[12px] text-[#727375]'}>
                            <div>좋아요</div>
                            <div>{article?.likeCount}</div>
                        </div>
                    </div>
                    <button
                        onClick={async () => {
                            await putClickedLikeButton(query.id)
                            await mutate();
                            setIsLikeButtonClicked(!isLikeButtonClicked);
                        }}
                        className={isLikeButtonClicked ? 'flex gap-x-1 items-center w-fit rounded-full px-3 py-1 text-white text-[14px] bg-[#8D8DC1]' : 'flex gap-x-1 items-center w-fit rounded-full px-3 py-1 text-[#727375] text-[14px] border-[1px] border-[#E4E5E7]'}>
                        {isLikeButtonClicked ? <WhiteHeartIcon /> : <LikeIcon/> }좋아요
                    </button>
                </div>
            </div>
            <div className={'h-[10px] bg-gray-100'}/>
            {/* comment */}

            <div className={'flex flex-col gap-y-[48px] px-5 py-4'}>
                {article?.comments.length !== 0 ? article?.comments.map((comment, index)=>{
                    return (
                        <Comment
                            key={index}
                            commentId={comment.commentId}
                            content={comment.content}
                            createAt={comment.createdAt}
                            profileImageUrl={comment.user.profileImageUrl}
                            loginUserId={userInfo.userId}
                            writerId={comment.user.userId}
                            setDeleteCommentId={setDeleteCommentId}
                            isCommentMoreOptionModalOpen={isCommentMoreOptionModalOpen}
                            setIsCommentMoreOptionModalOpen={setIsCommentMoreOptionModalOpen}
                            nickName={comment.user.nickName}/>
                    )
                }):null}
            </div>
            <div className={'h-[80px]'}/>
            <CommentInput articleId={query.id} userId={userInfo.userId} />
        </div>
    );
}
export default ArticleDetail;

const LikeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={14}
        fill="none"
        {...props}
    >
        <g fill="#D9D9D9" clipPath="url(#a)">
            <path d="M9.132 12.554a.47.47 0 0 0-.647-.198l-.16.083a1.83 1.83 0 0 1-1.65 0 13 13 0 0 1-2.298-1.485C1.683 8.753 1.113 6.187.992 5.176l-.02-.212C.96 4.83.96 4.747.96 4.734c0-1.792 1.414-3.366 3.027-3.366 1.51 0 2.867.717 3.545 1.869a.481.481 0 1 0 .832-.487C7.513 1.304 5.836.408 3.994.408 1.83.408 0 2.392 0 4.734c0 0 0 .115.013.307 0 .09.013.173.025.256.135 1.12.768 3.974 3.731 6.4a13.5 13.5 0 0 0 2.464 1.593c.397.198.832.3 1.26.3.43 0 .865-.102 1.261-.3l.173-.09a.47.47 0 0 0 .198-.646zM10.322 12.286a.5.5 0 1 0 0-.998.5.5 0 0 0 0 .998" />
            <path d="M11.666 11.141a.483.483 0 0 1-.34-.826c2.1-2.053 2.567-4.274 2.67-5.138.005-.07.018-.14.018-.211.013-.14.013-.224.013-.23 0-1.799-1.414-3.373-3.027-3.373-1.51 0-2.867.717-3.545 1.869a.481.481 0 1 1-.832-.487C7.474 1.3 9.151.403 10.993.403c2.164 0 3.988 1.984 3.988 4.333 0 0 0 .115-.013.307 0 .083-.013.172-.026.256-.115.953-.633 3.436-2.95 5.702a.5.5 0 0 1-.333.134z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .408h15v13.183H0z" />
            </clipPath>
        </defs>
    </svg>
);

const WhiteHeartIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={14}
        fill="none"
        {...props}
    >
        <g fill="#fff" clipPath="url(#a)">
            <path d="M9.132 12.554a.47.47 0 0 0-.647-.199l-.16.084a1.83 1.83 0 0 1-1.65 0 13 13 0 0 1-2.298-1.485C1.683 8.753 1.113 6.187.992 5.175l-.02-.21C.96 4.83.96 4.746.96 4.733c0-1.792 1.414-3.366 3.027-3.366 1.51 0 2.867.717 3.545 1.868a.481.481 0 1 0 .832-.486C7.513 1.304 5.836.408 3.994.408 1.83.408 0 2.392 0 4.734c0 0 0 .115.013.307 0 .09.013.173.025.256.135 1.12.768 3.974 3.731 6.4a13.5 13.5 0 0 0 2.464 1.593c.397.198.832.3 1.26.3.43 0 .865-.102 1.261-.3l.173-.09a.47.47 0 0 0 .198-.646zM10.322 12.286a.5.5 0 1 0 0-.999.5.5 0 0 0 0 .999" />
            <path d="M11.666 11.141a.483.483 0 0 1-.34-.825c2.1-2.055 2.567-4.275 2.67-5.139.005-.07.018-.14.018-.211.013-.141.013-.224.013-.23 0-1.799-1.414-3.373-3.027-3.373-1.51 0-2.867.717-3.545 1.869a.481.481 0 1 1-.832-.487C7.474 1.3 9.151.403 10.993.403c2.164 0 3.988 1.984 3.988 4.332 0 0 0 .116-.013.308 0 .083-.013.172-.026.256-.115.953-.633 3.436-2.95 5.701a.5.5 0 0 1-.333.135z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .408h15v13.183H0z" />
            </clipPath>
        </defs>
    </svg>
);

const EmptyIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <mask
            id="a"
            width={32}
            height={32}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
        </mask>
    </svg>
);
