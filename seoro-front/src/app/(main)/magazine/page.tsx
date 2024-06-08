'use client';

import Header from "@/components/magazine/Header";
import ArticlePost from "@/components/magazine/ArticlePost";
import Navbar from "@/components/Navbar";
import * as React from "react";
import {SVGProps, useEffect, useState} from "react";
import {FilterType} from "@/types/magazine/type";
import Filter from "@/components/magazine/Filter";
import {filterContents} from "@/utils/magazine/filterContents";
import WriteButton from "@/components/magazine/WriteButton";
import useGetArticleDetail from "@/lib/hooks/useGetArticleDetail";
import useGetArticles from "@/lib/hooks/useGetArticles";

const Magazine = () => {
    const [isFilterClicked, setIsFilterClicked] = useState<boolean>(false);
    const [filterContent, setFilterContent] = useState<FilterType>('최신순');
    const {articles} = useGetArticles();


    useEffect(() => {
        console.log('articles',articles)
    }, [articles]);


    return (
        <div className={'bg-[#DFDFED] min-h-screen flex flex-col gap-y-4'}>
            <Header title={'Magazine'}/>
            {/* 필터 */}
            <div
                onClick={() => {
                    setIsFilterClicked(!isFilterClicked);
                }}
                className={'relative mx-5 flex items-center gap-x-2 bg-white rounded-full w-fit px-3 py-[5px]'}>
                <div className={'text-[#727375] text-[14px]'}>{filterContent}</div>
                <Icon />
            </div>
            { isFilterClicked ? <Filter filterContents={filterContents} setFilterContent={setFilterContent} setIsFilterClicked={setIsFilterClicked}/> : null }
            <div className={'px-5 flex flex-col gap-y-4'}>
                {articles?.map((article, index)=>{
                    return (
                        <div key={index}>
                            <ArticlePost
                                imageUrl={article.imageUrl}
                                likeCount={article.likeCount}
                                viewCount={article.viewCount}
                                content={article.content}
                                title={article.title}
                                articleId={article.articleId}/>
                        </div>
                    )
                })}
            </div>
            <WriteButton />
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
