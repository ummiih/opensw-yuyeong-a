'use client';

import {FiCheckSquare, FiClipboard, FiHome, FiUser} from "react-icons/fi";
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {NavbarType} from "@/types/common/type";


const Navbar = () => {
    const [isClicked, setIsClicked] = useState<NavbarType>('home');
    const router = useRouter();
    const query = usePathname();

    return (
        <>
            <div className={'fixed bottom-0 w-full flex justify-between bg-white rounded-t-[20px] px-5 py-4 shadow-md'}>
                {/*홈*/}
                <div
                    onClick={() => {
                        setIsClicked('home')
                        router.push('/home')
                    }}
                    className={'flex flex-col items-center gap-y-[6px] w-[51px] h-[52px]'}>
                    <FiHome className={query === '/home' ? 'text-[#54515F] w-[24px] h-[24px]' : 'text-[#9E9FA1] w-[24px] h-[24px]'}/>
                    <div className={query === '/home' ? 'text-[#54515F] text-[12px]' : 'text-[#9E9FA1] text-[12px]'}>홈</div>
                </div>
                {/*메거진*/}
                <div
                    onClick={() => {
                        setIsClicked('magazine')
                        router.push('/magazine')
                    }}
                    className={'flex flex-col items-center gap-y-[6px] w-[51px] h-[52px]'}>
                    <FiClipboard className={query === '/magazine' ? 'text-[#54515F] w-[24px] h-[24px]' : 'text-[#9E9FA1] w-[24px] h-[24px]'}/>
                    <div className={query === '/magazine' ? 'text-[#54515F] text-[12px]' : 'text-[#9E9FA1] text-[12px]'}>메거진</div>
                </div>
                {/*퀴즈*/}
                <div
                    onClick={() => {
                        setIsClicked('quiz')
                        router.push('/quiz')
                    }}
                    className={'flex flex-col items-center gap-y-[6px] w-[51px] h-[52px]'}>
                    <FiCheckSquare className={query === '/quiz' ? 'text-[#54515F] w-[24px] h-[24px]' : 'text-[#9E9FA1] w-[24px] h-[24px]'}/>
                    <div className={query === '/quiz' ? 'text-[#54515F] text-[12px]' : 'text-[#9E9FA1] text-[12px]'}>퀴즈</div>
                </div>
                {/*마이페이지*/}
                <div
                    onClick={() => {
                        setIsClicked('mypage')
                        router.push('/mypage')
                    }}
                    className={'flex flex-col items-center gap-y-[6px] w-[51px] h-[52px]'}>
                    <FiUser className={query === '/mypage' ? 'text-[#54515F] w-[24px] h-[24px]' : 'text-[#9E9FA1] w-[24px] h-[24px]'}/>
                    <div className={query === '/mypage' ? 'text-[#54515F] text-[11px]' : 'text-[#9E9FA1] text-[11px]'}>마이페이지</div>
                </div>
            </div>
        </>
    )
}
export default Navbar;
