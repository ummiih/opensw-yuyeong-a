'use client'
import Header from "@/components/magazine/Header";
import {FiHeart} from "react-icons/fi";
import * as React from "react";
import {SVGProps, useState} from "react";
import QuizResult from "@/components/quiz/QuizResult";
import QuizCard from "@/components/quiz/QuizCard";
import useGetQuizQuestions from "@/lib/hooks/useGetQuizQuestions";
import {useParams} from "next/navigation";
import {correctCountAtom} from "@/recoil/quiz/atom";
import {useRecoilState} from "recoil";

const QuizDetail = () => {
    const [isQuizCardClicked, setIsQuizCardClicked] = useState(false);
    const query = useParams();
    const {quizQuestions} = useGetQuizQuestions(query.id);
    const [sequence, setSequence] = useState<number>(0);
    const [clickedAnswer, setClickedAnswer] = useState<boolean>(false);
    const [correctCount, setCorrectCount] = useRecoilState(correctCountAtom);

    return (
        <div>
            { sequence === 5 ? <QuizResult setCorrectCount={setCorrectCount} correctCount={correctCount} sequence={sequence} setSequence={setSequence} /> : null}
            {isQuizCardClicked && sequence !== 5 ?
                <QuizCard
                    setCorrectCount={setCorrectCount}
                    clickedAnswer={clickedAnswer}
                    content={quizQuestions ? quizQuestions[sequence].content : ''}
                    answer={quizQuestions ? quizQuestions[sequence].answer : false}
                    sequence={sequence}
                    setSequence={setSequence}
                    setIsQuizCardClicked={setIsQuizCardClicked}/>
                : null}
            <Header title={'Quiz'} rightElement={<EmptyIcon/>}></Header>
            <div className={'flex flex-col justify-start gap-y-4 p-5'}>
                <div className={'flex flex-col items-center w-fit'}>
                    <FiHeart className={'text-[#8D8DC1]'} size={30}/>
                    <div className={'font-semibold text-[#8D8DC1] w-fit'}>{quizQuestions && sequence !== 5 ? quizQuestions[sequence].questionId.sequence : 1}/5</div>
                </div>
                <div className={'text-[20px] font-semibold text-[#54515F]'}>{quizQuestions && sequence !== 5 ? quizQuestions[sequence].content : ''}</div>
                <div className={'flex gap-x-4'}>
                    <button
                        onClick={()=>{
                            setClickedAnswer(false);
                            setIsQuizCardClicked(!isQuizCardClicked)
                        }}
                        className={'p-6 h-[200px] w-full bg-[#EEE3F3] rounded-[24px] text-[#3C3C3C] text-[100px] shadow-md'}>X</button>
                    <button
                        onClick={()=>{
                            setClickedAnswer(true);
                            setIsQuizCardClicked(!isQuizCardClicked)
                        }}
                        className={'p-6 h-[200px] w-full bg-[#8D8DC1] rounded-[24px] text-[#3C3C3C] text-[100px] shadow-md'}>O</button>
                </div>
            </div>
        </div>
    );
}
export default QuizDetail;



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

