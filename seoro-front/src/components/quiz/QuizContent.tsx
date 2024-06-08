import * as React from "react";
import type { SVGProps } from "react";
import {useRouter} from "next/navigation";

interface Props {
    title: string;
    quizId: number;
}

const QuizContent = (props: Props) => {
    const router = useRouter();
    const {title, quizId} = props;

    return (
        <div className={'flex flex-col gap-y-1 rounded-[24px] bg-white p-5 shadow-md '}>
            <div className={'font-semibold text-[#54515F]'}>{title}</div>
            <div className={'flex justify-between items-end'}>
                <button
                    onClick={()=>{
                       router.push(`/quiz/${quizId}`)
                    }}
                    className={'flex items-center text-[24px] font-semibold text-[#54515F]'}>
                    퀴즈 풀러가기
                    <ArrowIcon />
                </button>
                <div className={'font-semibold text-[#54515F]'}>{5} 문제</div>
            </div>
        </div>
    );
}
export default QuizContent;

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <mask
            id="a"
            width={24}
            height={24}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <path fill="#D9D9D9" d="M24 23.888H0V0h24z" />
        </mask>
        <g mask="url(#a)">
            <path
                fill="#54515F"
                d="m14 1.99 10 9.954-10 9.954-1.775-1.767 8.225-8.187-8.225-8.187z"
            />
        </g>
    </svg>
);
