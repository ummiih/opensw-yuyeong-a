'use client';

import * as React from "react";
import type { SVGProps } from "react";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import {useRouter} from "next/navigation";
import ArticlePost from "@/components/magazine/ArticlePost";

const Home = () => {
    const router = useRouter();
    return (
        <>
            <div className={'bg-[#F0F0F5] min-h-screen'}>
                <Header />
                <div className={'flex flex-col gap-y-8 p-5'}>
                    {/* 오늘의 퀴즈 */}
                    <div className={'flex flex-col gap-y-4'}>
                        {/* Title */}
                        <div className={'flex justify-between'}>
                            <div className={'text-[24px] font-bold text-[#3C3C3C]'}>오늘의 퀴즈</div>
                            <button
                                onClick={() => {
                                    router.push('/quiz');
                                }}
                                className={'flex items-center gap-x-1 rounded-full px-3 py-1 text-[#8D8DC1] bg-white shadow-md text-[14px]'}>전체보기<ArrowIcon/></button>
                        </div>
                        {/* content */}
                        <div className={'flex flex-col gap-y-4 p-5 bg-white rounded-[32px]'}>
                            <div className={'font-semibold'}>Q. 생리시 관계를 하면 임신이 되지 않는다?</div>
                            <div className={'flex gap-x-4'}>
                                <button className={'p-6 w-full bg-red-200 rounded-[24px] text-[#3C3C3C] text-[30px] shadow-md hover:scale-105 transform duration-150'}>X</button>
                                <button className={'p-6 w-full bg-blue-200 rounded-[24px] text-[#3C3C3C] text-[30px] shadow-md hover:scale-105 transform duration-150'}>O</button>
                            </div>
                        </div>
                    </div>

                    {/* 인기메거진 */}
                    <div className={'flex flex-col gap-y-4'}>
                        {/* Title */}
                        <div className={'flex justify-between'}>
                            <div className={'text-[24px] font-bold text-[#3C3C3C]'}>인기 메거진</div>
                            <button
                                onClick={() => {
                                    router.push('/magazine');
                                }}
                                className={'flex items-center gap-x-1 rounded-full px-3 py-1 text-[#8D8DC1] bg-white shadow-md text-[14px]'}>전체보기<ArrowIcon/>
                            </button>
                        </div>
                        {/* content */}
                        <ArticlePost />
                    </div>
                </div>
                <Navbar></Navbar>
            </div>
        </>
    )
}
export default Home;

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={13}
        fill="none"
        {...props}
    >
        <path
            stroke="#8D8DC1"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.664 6.529H.806M11.194 6.529l-4-5M8.1 10.191l3.094-3.662"
        />
        <path fill="#8D8DC1" d="M6.684 11.348a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0" />
    </svg>
);
