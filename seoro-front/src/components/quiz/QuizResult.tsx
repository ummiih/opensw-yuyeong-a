import {FiHeart} from "react-icons/fi";
import * as React from "react";
import type { SVGProps } from "react";
import {useRouter} from "next/navigation";
const QuizResult = () => {
    const router = useRouter();
    return (
        <div
            className={
                'absolute left-0 right-0 z-50 flex flex-col gap-y-2 justify-center bg-[rgba(0,0,0,0.6)] px-8 min-h-screen'
            }>
            {/* 카드내용 */}
            <div className={'flex flex-col justify-center items-center gap-y-8 bg-white p-5 rounded-[32px]'}>
                <div className={'flex flex-col justify-center items-center gap-y-5'}>
                    <div className={'font-semibold text-[18px]'}>퀴즈 결과</div>
                    <div>5문제 중 3문제를 맞추셨어요!</div>
                </div>
                <div className={'flex gap-x-2'}>
                    <FiHeart className={'text-[#8D8DC1]'} size={40}/>
                    <FiHeart className={'text-[#8D8DC1]'} size={40}/>
                    <FiHeart className={'text-[#8D8DC1]'} size={40}/>
                    <FiHeart className={'text-[#8D8DC1]'} size={40}/>
                    <FiHeart className={'text-[#8D8DC1]'} size={40}/>
                </div>
                <button
                    onClick={()=>{
                        router.push('/quiz')
                    }}
                    className={'mt-20 flex gap-x-2 items-center text-[14px] text-[#7D7D7D] '}>문제 더 풀러가기 <Icon/></button>
            </div>
        </div>
    )
}
export default QuizResult;

const Icon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={6}
        height={10}
        fill="none"
        {...props}
    >
        <path fill="#9E9FA1" d="M.904 0 6 5 .904 10 0 9.113 4.191 5 0 .888z" />
    </svg>
);
