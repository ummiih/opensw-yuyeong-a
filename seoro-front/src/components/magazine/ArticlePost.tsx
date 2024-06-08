'use client';

import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import * as React from "react";
import { AiOutlineEye } from "react-icons/ai";
import {useRouter} from "next/navigation";

interface Props {
    articleId: number;
    title: string;
    content: string;
    likeCount: number;
    viewCount: number;
    imageUrl: string;
}

const ArticlePost = (props: Props) => {
    const {articleId, title, content, likeCount, viewCount, imageUrl} = props;
    const router = useRouter();
    return (
        <div
            onClick={() => {
                router.push(`/magazine/${articleId}`)
            }}
            className={'flex flex-col px-5 py-4 bg-white rounded-[20px] shadow-md'}>
            <div className={'flex flex-col gap-y-2'}>
                <div className={'text-[16px] font-semibold text-black'}>{title}</div>
                <div className={'flex justify-between gap-x-3'}>
                    <div className={'w-[50%]'}>
                        <div className={'line-clamp-2'}>{content}</div>
                    </div>
                    <div className={'relative w-[80px] h-[80px]'}>
                        <Image src={imageUrl} alt={imageUrl} fill className={'object-cover'}/>
                    </div>
                </div>
            </div>
            <div className={'flex gap-x-2'}>
                <div className={'flex gap-x-1 items-center'}>
                    <FiHeart className={'text-[#727375]'} size={13}/>
                    <div className={'text-[#727375] text-[12px]'}>{likeCount}</div>
                </div>
                <div className={'flex gap-x-1 items-center'}>
                    <AiOutlineEye className={'text-[#727375]'} size={18}/>
                    <div className={'text-[#727375] text-[12px]'}>{viewCount}</div>
                </div>
            </div>
        </div>
    )
}
export default ArticlePost;
