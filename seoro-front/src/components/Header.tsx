import Image from "next/image";
import {useRecoilValue} from "recoil";
import {userInfoAtom} from "@/recoil/atom";

const Header = () => {
    const userInfo = useRecoilValue(userInfoAtom)
    return (
        <>
            <div className='flex flex-col gap-y-[5px] bg-[#8D8DC1] rounded-b-[30px] p-[20px] shadow-md'>
                {/*날짜*/}
                <div className={'text-white'}>4월 10일 수요일</div>

                {/*안에 내용물*/}
                <div className={'flex gap-x-[16px] items-center'}>
                    {/*이미지*/}
                    <Image src={'/profile.png'} alt={'/profile.png'} width={83} height={83}/>
                    {/*내용물*/}
                    <div className={'flex flex-col gap-y-[7px]'}>
                        <div className={'text-[28px] font-semibold text-white'}>안녕하세요,</div>
                        <div className={'text-[26px] font-semibold text-white'}>{userInfo.nickName}님</div>
                        <div className={'text-[14px] text-white'}>오늘도 ‘서로’와 함께 서로 알아가봐요!</div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Header;
