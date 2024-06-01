import Quiz_header from "@/components/Quiz_header";
import Navbar from "@/components/Navbar";
import { FiChevronRight } from "react-icons/fi";

const Quiz = () => {
    return (
        <>
            <div className="bg-[#F0F0F5] min-h-screen ">
                <Quiz_header></Quiz_header>
                <Navbar></Navbar>
                <div className="px-[20px]">
                    <div className="flex flex-col font-semibold text-[20px] py-[19px]">
                        <div>홍길동님,</div>
                        <div>오늘도 같이 문제를 풀어보시겠어요?</div>
                    </div>
                    <div className="flex flex-col gap-y-[20px]">
                        <div className="flex flex-col gap-y-[8px] bg-white rounded-[20px] w-[335px] h-[107px] px-[20px] py-[20px]">
                            <div className="text-[16px] font-semibold">남자친구 어디까지 알고 계신가요?</div>
                            <div className="flex items-center gap-x-[30px]" >
                                <div className="flex items-center text-[30px] font-semibold">
                                    <div>퀴즈 풀러가기</div>
                                    <FiChevronRight />
                                </div>
                                <div className="text-[16px] font-extrabold"> 5문제</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[8px] bg-white rounded-[20px] w-[335px] h-[107px] px-[20px] py-[20px]">
                            <div className="text-[16px] font-semibold">여자친구 어디까지 알고 계신가요?</div>
                            <div className="flex items-center gap-x-[30px]" >
                                <div className="flex items-center text-[30px] font-semibold">
                                    <div>퀴즈 풀러가기</div>
                                    <FiChevronRight />
                                </div>
                                <div className="text-[16px] font-extrabold"> 5문제</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[8px] bg-white rounded-[20px] w-[335px] h-[107px] px-[20px] py-[20px]">
                            <div className="text-[16px] font-semibold">연인과의 사랑 어디까지 알고 계신가요?</div>
                            <div className="flex items-center gap-x-[30px]" >
                                <div className="flex items-center text-[30px] font-semibold">
                                    <div>퀴즈 풀러가기</div>
                                    <FiChevronRight />
                                </div>
                                <div className="text-[16px] font-extrabold"> 5문제</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[8px] bg-white rounded-[20px] w-[335px] h-[107px] px-[20px] py-[20px]">
                            <div className="text-[16px] font-semibold">연인과의 사랑 어디까지 알고 계신가요?</div>
                            <div className="flex items-center gap-x-[30px]" >
                                <div className="flex items-center text-[30px] font-semibold">
                                    <div>퀴즈 풀러가기</div>
                                    <FiChevronRight />
                                </div>
                                <div className="text-[16px] font-extrabold"> 5문제</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Quiz;
