'use client';

import Navbar from "@/components/Navbar";
import Header from "@/components/magazine/Header";
import QuizContent from "@/components/quiz/QuizContent";
import useGetQuizzes from "@/lib/hooks/useGetQuizzes";
import {SVGProps} from "react";
import * as React from "react";
import {useRecoilValue} from "recoil";
import {userInfoAtom} from "@/recoil/atom";
const Quiz = () => {
    const {quizzes} = useGetQuizzes();
    const userInfo = useRecoilValue(userInfoAtom)

    return (
        <div className={'bg-[#EEEDF5] min-h-screen'}>
            <Header title={'Quiz'} rightElement={<EmptyIcon/>}></Header>
            <div className={'flex flex-col gap-y-5 p-5'}>
                <div>
                    <div className={'text-[20px] font-semibold text-[#54515F]'}>{userInfo.nickName}님,</div>
                    <div className={'text-[20px] font-semibold text-[#54515F]'}>오늘도 같이 문제를 풀어보시겠어요?</div>
                </div>
                <div className={'flex flex-col gap-y-5'}>
                    {quizzes?.map((quiz, index)=>{
                        return (
                            <QuizContent key={index} title={quiz.title} quizId={quiz.quizId}/>
                        )
                    })}
                </div>
            </div>
            <Navbar></Navbar>
        </div>
    )
}
export default Quiz;

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


