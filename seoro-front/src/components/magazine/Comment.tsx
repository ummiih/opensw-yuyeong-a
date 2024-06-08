import Image from "next/image";
import {SVGProps} from "react";
import * as React from "react";

interface Props {
    commentId: number;
    profileImageUrl: string;
    nickName: string;
    createAt: string;
    loginUserId: number;
    writerId: number;
    content: string;
    isCommentMoreOptionModalOpen: boolean;
    setDeleteCommentId: React.Dispatch<React.SetStateAction<number>>;
    setIsCommentMoreOptionModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Comment = (props: Props) => {
    const {commentId, profileImageUrl, nickName, createAt, content, loginUserId, writerId, isCommentMoreOptionModalOpen, setIsCommentMoreOptionModalOpen, setDeleteCommentId} = props;

    const formattedDate = (dateString: string) => {
        const date = new Date(dateString);

        // 날짜를 "YY.MM.DD" 형식으로 변환
        const formattedDate = date.toLocaleDateString('ko-KR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        }).replace(/\. /g, '.');

        // 시간을 "HH:MM" 형식으로 변환 (24시간 형식)
        const formattedTime = date.toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        return `${formattedDate} | ${formattedTime}`;
    }

    return (
        <div>
            {/* profile */}
            <div className={'flex gap-x-2'}>
                <div className={'relative rounded-full w-[32px] h-[32px]'}>
                    <Image alt={profileImageUrl} src={profileImageUrl} fill
                           className={'object-cover rounded-full'}></Image>
                </div>
                <div className={'flex flex-col w-full'}>
                    <div className={'flex justify-between'}>
                        <div>
                            <div className={'text-[14px]'}>{nickName}</div>
                            <div className={'text-[14px] text-[#9E9FA1]'}>{formattedDate(createAt)}</div>
                        </div>
                        {loginUserId === writerId ? <MoreIcon onClick={()=>{
                            setDeleteCommentId(commentId);
                            setIsCommentMoreOptionModalOpen(!isCommentMoreOptionModalOpen);
                        }}/> : null}
                    </div>

                    {/* commentContent */}
                    <div className={'mt-1'}>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment;

const MoreIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        {...props}
    >
        <path
            fill="#9E9FA1"
            d="M24 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M24 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M24 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
        />
    </svg>
);

