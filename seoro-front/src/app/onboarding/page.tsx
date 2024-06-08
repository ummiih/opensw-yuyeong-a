'use client';

import * as React from "react";
import {SVGProps} from "react";
import {useRouter} from "next/navigation";
import {useRecoilState} from "recoil";
import {userInfoAtom, userSignInInfoAtom} from "@/recoil/atom";
import {getUserSignIn} from "@/lib/api/onboarding/onboarding";
import {UserType} from "@/types/magazine/type";
import Image from "next/image";

const OnBoarding = () => {
    const router = useRouter();
    const [userSignInInfo, setUserSignInInfo] = useRecoilState(userSignInInfoAtom)
    const [userInfo, setUserInfo] = useRecoilState(userInfoAtom)

    return (
        <div className={'p-5 flex flex-col justify-center min-h-screen bg-[#EEEDF5]'}>
            <Image src={'/seoroLogo.png'} width={50} height={50} alt={'/seoroLogo.png'}></Image>
            <div className={'flex flex-col gap-y-5'}>
                <input
                    onChange={(e)=>{
                        setUserSignInInfo((prevUser) => ({
                            ...prevUser,
                            nickname: e.target.value,
                        }));
                    }}
                    className={'py-4 px-4 bg-white rounded-[12px] shadow-md w-full outline-none'}
                    placeholder={'아이디를 입력해주세요.'}></input>
                <input
                    onChange={(e)=>{
                        setUserSignInInfo((prevUser) => ({
                            ...prevUser,
                            password: e.target.value,
                        }));
                    }}
                    className={'py-4 px-4 bg-white rounded-[12px] shadow-md w-full outline-none'}
                    placeholder={'비밀번호를 입력해주세요.'}></input>
            </div>
            <div className={'mt-5 flex flex-col items-center'}>
                <button
                    onClick={()=>{router.push('/sign-up')}}
                    className={'flex gap-x-1 text-[#6D6D6D] text-[14px]'}>회원가입 하러가기 <ArrowIcon/></button>
            </div>
            <button
                onClick={async ()=>{
                    router.push('/home')
                    await getUserSignIn(userSignInInfo.nickname, userSignInInfo.password).then((response)=>{
                        setUserInfo((prevUser: UserType) => ({
                            ...prevUser,
                            userId: response.userId,
                            username: response.username,
                            nickName: response.nickName,
                            password: response.password,
                            profileImageUrl: response.profileImageUrl,
                            createdAt: response.createdAt,
                            modifiedAt: response.modifiedAt,
                        }));
                        router.push('/home')
                    })
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
