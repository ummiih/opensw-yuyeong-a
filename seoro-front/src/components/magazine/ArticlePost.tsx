'use client';

import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import * as React from "react";
import type { SVGProps } from "react";
import { FiMessageCircle } from "react-icons/fi";
import {useRouter} from "next/navigation";

const ArticlePost = () => {
    const router = useRouter();
    return (
        <div
            onClick={() => {
                router.push('/magazine/1')
            }}
            className={'flex flex-col px-5 py-4 bg-white rounded-[20px] shadow-md'}>
            <div className={'flex flex-col gap-y-2'}>
                <div className={'text-[16px] font-semibold text-black'}>생리중 예민한 이유는?...</div>
                <div className={'flex gap-x-3'}>
                    <div className={'flex flex-col'}>
                        <div className={'text-[14px] text-[#727375]'}>
                            생리 기간만 다가오면 유독 짜증이
                        </div>
                        <div className={'text-[14px] text-[#727375] truncate'}>
                            예민하다면 월경전 증후군 때문이에요.
                        </div>
                        <div className={'text-[14px] text-[#727375] truncate'}>
                             월경전 증후군이란 보통 호르몬의...
                        </div>
                    </div>
                    <Image src={'/post.png'} alt={'/post.png'} width={100} height={80}/>
                </div>
            </div>
            <div className={'flex gap-x-2'}>
                <div className={'flex gap-x-1 items-center'}>
                    <FiHeart className={'text-[#727375]'} size={13}/>
                    <div className={'text-[#727375] text-[12px]'}>3</div>
                </div>
                <div className={'flex gap-x-1 items-center'}>
                    <FiMessageCircle className={'text-[#727375]'} size={13}/>
                    <div className={'text-[#727375] text-[12px]'}>3</div>
                </div>
            </div>
        </div>
    )
}
export default ArticlePost;

const CommentIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        fill="none"
        {...props}
    >
        <path
            fill="#727375"
            d="M6.003.75c2.896 0 5.252 1.905 5.252 4.25S8.899 9.25 6.003 9.25c-.046 0-.086 0-.13-.005h-.116s-.02-.005-.03-.005a.75.75 0 0 0-.67.415l-.8 1.595L2.91 8.56a.8.8 0 0 0-.255-.29C1.441 7.455.746 6.265.746 5 .75 2.655 3.105.75 6.002.75m0-.75C2.686 0 0 2.24 0 5c0 1.575.875 2.98 2.24 3.895l1.346 2.69c.14.275.406.415.67.415.266 0 .536-.14.671-.415l.8-1.595c.09 0 .18.01.27.01C9.314 10 12 7.76 12 5S9.319 0 6.003 0"
        />
        <path
            fill="#9E9FA1"
            d="M8.197 5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6.1 5.565a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4.002 5.565a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
        />
    </svg>
);
