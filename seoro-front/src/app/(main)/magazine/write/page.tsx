'use client';
import Header from "@/components/magazine/Header";
import {useRouter} from "next/navigation";

const WriteMagazine = () => {
    const router = useRouter();
    return (
        <div className={'min-h-screen relative'}>
            <Header title={'글쓰기'}></Header>
            <div className={'p-5 flex flex-col gap-y-5'}>
                <div className={'flex flex-col gap-y-5'}>
                    <div className={'text-[#727375]'}>제목 <span className={'text-[#8D8DC1]'}>*</span></div>
                    <input
                        placeholder={'제목을 입력해주세요.'}
                        className={'w-full py-[14px] px-3 rounded-[12px] border-[1px] border-[#E4E5E7] placeholder:text-[#9E9FA1]'}></input>

                    <div className={'text-[#727375]'}>내용 <span className={'text-[#8D8DC1]'}>*</span></div>
                    <textarea
                        placeholder={'제목을 입력해주세요.'}
                        className={'w-full h-[200px] py-[14px] px-3 rounded-[12px] border-[1px] border-[#E4E5E7] placeholder:text-[#9E9FA1]'}></textarea>

                </div>
            </div>
            <button
                onClick={()=>{
                    router.push('/magazine')
                }}
                className={'absolute bottom-[8px] right-[20px] left-[20px] bg-[#8D8DC1] rounded-[12px] text-white py-4 text-[14px]'}>작성
                완료
            </button>
        </div>
    )
}
export default WriteMagazine;
