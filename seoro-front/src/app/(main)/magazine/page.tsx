import Header from "@/components/magazine/Header";
import ArticlePost from "@/components/magazine/ArticlePost";
import Navbar from "@/components/Navbar";
import * as React from "react";
import type { SVGProps } from "react";

const Magazine = () => {
    return (
        <div className={'bg-[#DCDCF4] min-h-screen flex flex-col gap-y-4'}>
            <Header />
            <div className={'mx-5 flex items-center gap-x-2 bg-white rounded-full w-fit px-3 py-[5px]'}>
                <div className={'text-[#727375] '}>최신순</div>
                <Icon></Icon>
            </div>
            <div className={'px-5 flex flex-col gap-y-4'}>
                <ArticlePost />
                <ArticlePost />
                <ArticlePost />
                <ArticlePost />
            </div>
            <Navbar></Navbar>
        </div>
    )
}
export default Magazine;

const Icon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={10}
        height={6}
        fill="none"
        {...props}
    >
        <path
            fill="#727375"
            d="M4.293 5.293.707 1.707C.077 1.077.523 0 1.414 0h7.172c.89 0 1.337 1.077.707 1.707L5.707 5.293a1 1 0 0 1-1.414 0"
        />
    </svg>
);
