'use client';

import * as React from "react";
import type { SVGProps } from "react";
import {useRouter} from "next/navigation";

const OnBoarding = () => {
    const router = useRouter();
    return (
        <div className={'p-5 flex flex-col justify-center min-h-screen bg-[#EEEDF5]'}>

            <div className={'flex flex-col gap-y-5'}>
                <input className={'py-4 px-4 bg-white rounded-[12px] shadow-md w-full outline-none'}
                       placeholder={'아이디를 입력해주세요.'}></input>
                <input className={'py-4 px-4 bg-white rounded-[12px] shadow-md w-full outline-none'}
                       placeholder={'비밀번호를 입력해주세요.'}></input>
            </div>
            <div className={'mt-5 flex flex-col items-center'}>
                <div className={'flex gap-x-1 text-[#6D6D6D] text-[14px]'}>회원가입 하러가기 <ArrowIcon/></div>
            </div>
            <button
                onClick={()=>{
                    router.push('/home')
                }}
                className={'mt-20 bg-[#8D8DC1] py-4 rounded-[12px] text-white'}>로그인</button>
        </div>
    )
}
export default OnBoarding

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={21}
        fill="none"
        {...props}
    >
        <path
            stroke="#6D6D6D"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m7.5 4.5 6 6-6 6"
        />
    </svg>
);
