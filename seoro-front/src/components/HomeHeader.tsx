'use client';
import Image from "next/image";

const HomeHeader = () => {
    return (
        <div className={'w-full h-[198px] bg-[#8D8DC1] rounded-b-[30px] px-5 py-5 shadow-lg flex flex-col gap-y-3'}>
            <div className={'text-white text-[18px]'}>4월 26일 금요일</div>
            <div className={'flex gap-x-5 items-center'}>
                <div>
                    <Image src={"/profile.png"} alt={"/profile.png"} width={90} height={90}/>
                </div>
                <div className={'flex flex-col gap-y-2'}>
                    <div className={'flex flex-col gap-y-0'}>
                        <div className={'text-white text-[30px]'}>안녕하세요,</div>
                        <div className={'text-white text-[26px]'}>황유림님</div>
                    </div>
                    <div className={'text-white text-[14px]'}>오늘도 '서로'와 함께 서로 알아가봐요!</div>
                </div>
            </div>
        </div>
    )
}
export default HomeHeader;
