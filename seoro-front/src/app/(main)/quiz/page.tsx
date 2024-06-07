'use client';

import Navbar from "@/components/Navbar";
import Header from "@/components/magazine/Header";
import QuizContent from "@/components/quiz/QuizContent";

const Quiz = () => {
    return (
        <div className={'bg-[#DCDCF4] min-h-screen'}>
            <Header title={'Quiz'}></Header>
            <div className={'flex flex-col gap-y-5 p-5'}>
                <div>
                    <div className={'text-[20px] font-semibold text-[#54515F]'}>홍길동님,</div>
                    <div className={'text-[20px] font-semibold text-[#54515F]'}>오늘도 같이 문제를 풀어보시겠어요?</div>
                </div>
                <div className={'flex flex-col gap-y-5'}>
                    <QuizContent />
                    <QuizContent />
                    <QuizContent />
                    <QuizContent />
                </div>
            </div>
            <Navbar></Navbar>
        </div>
    )
}
export default Quiz;
