'use client';

import * as React from "react";
import {SVGProps, useEffect, useState} from "react";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import {useRouter} from "next/navigation";
import ArticlePost from "@/components/magazine/ArticlePost";
import useGetArticleDetail from "@/lib/hooks/useGetArticleDetail";
import QuizCard from "@/components/quiz/QuizCard";
import useGetQuizQuestions from "@/lib/hooks/useGetQuizQuestions";
const Home = () => {
    const router = useRouter();
    const {article} = useGetArticleDetail('1');
    const [isClickedAnswer, setIsClickedAnswer] = useState(false);
    const [isQuizCardClicked, setIsQuizCardClicked] = useState(false);
    const {quizQuestions} = useGetQuizQuestions('1');

    return (
        <div>
            {isQuizCardClicked ?
                <QuizCard
                    content={quizQuestions? quizQuestions[0].content : ''}
                    setIsQuizCardClicked={setIsQuizCardClicked}
                    sequence={quizQuestions? quizQuestions[0].questionId.sequence : 0}
                    answer={quizQuestions? quizQuestions[0].answer : false}
                    clickedAnswer={isClickedAnswer}/>
                : null}
            <div className={'bg-[#EEEDF5] min-h-screen'}>
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
                            <div className={'font-semibold'}>Q. {quizQuestions ? quizQuestions[0].content : ''}</div>
                            <div className={'flex gap-x-4'}>
                                <button
                                    onClick={()=>{
                                        setIsQuizCardClicked(!isQuizCardClicked)
                                        setIsClickedAnswer(false)
                                    }}
                                    className={'p-6 h-[130px] w-full bg-[#FFE8DE] rounded-[24px] text-[#3C3C3C] text-[40px] shadow-md'}>X</button>
                                <button
                                    onClick={()=>{
                                        setIsQuizCardClicked(!isQuizCardClicked)
                                        setIsClickedAnswer(true)
                                    }}
                                    className={'p-6 w-full bg-[#D8EAFF] rounded-[24px] text-[#3C3C3C] text-[40px] shadow-md'}>O</button>
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
                        <ArticlePost articleId={article? article.articleId : 1} content={article? article.content : ''} title={article? article.title : ''} likeCount={article? article.likeCount : 0} viewCount={article? article.viewCount : 0} imageUrl={article? article.imageUrl : ''}/>
                    </div>
                </div>
                <Navbar></Navbar>
            </div>
        </div>
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
