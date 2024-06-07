'use client'
import Header from "@/components/magazine/Header";
import {FiHeart} from "react-icons/fi";
import * as React from "react";
import {useState} from "react";
import QuizCard from "@/components/quiz/QuizCard";
import QuizResult from "@/components/quiz/QuizResult";

const QuizDetail = () => {
    const [isQuizCardClicked, setIsQuizCardClicked] = useState(false);
    return (
        <div>
            {/*<QuizCard setIsQuizCardClicked={setIsQuizCardClicked}/>*/}
            {isQuizCardClicked ? <QuizResult /> : null}
            <Header title={'Quiz'}></Header>
            <div className={'flex flex-col justify-start gap-y-4 p-5'}>
                <div className={'flex flex-col items-center w-fit'}>
                    <FiHeart className={'text-[#8D8DC1]'} size={30}/>
                    <div className={'font-semibold text-[#8D8DC1] w-fit'}>1/5</div>
                </div>
                <div className={'text-[20px] font-semibold text-[#54515F]'}>Q. 생리 시 성관계를 하면 임신이 되지 않을까?</div>
                <div className={'flex gap-x-4'}>
                    <button
                        onClick={()=>{
                            setIsQuizCardClicked(!isQuizCardClicked)
                        }}
                        className={'p-6 h-[200px] w-full bg-[#EEE3F3] rounded-[24px] text-[#3C3C3C] text-[100px] shadow-md'}>X</button>
                    <button
                        onClick={()=>{
                            setIsQuizCardClicked(!isQuizCardClicked)
                        }}
                        className={'p-6 h-[200px] w-full bg-[#8D8DC1] rounded-[24px] text-[#3C3C3C] text-[100px] shadow-md'}>O</button>
                </div>
            </div>
        </div>
    );
}
export default QuizDetail;
