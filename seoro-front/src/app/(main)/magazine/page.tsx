import Navbar from "@/components/Navbar";
import Magazine_header from "@/components/Magazine_header";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const Magazine = () => {
    return (
        <>
            <div className={'bg-[#F0F0F5] min-h-screen'}>
                <Navbar></Navbar>
                <div className={'flex flex-col gap-y-[17px]'}>
                    <Magazine_header></Magazine_header>
                    <div className={'flex flex-col gap-y-[17px] px-[17px]'}>
                        <div className={'flex items-center px-[12px] py-[3.5px] gap-x-[5px] bg-white rounded-[999px] w-[88px] h-[28px]'}>
                            <div className={'text-[13px] text-[#727375]'}>최신순</div>
                            <FiChevronDown />
                        </div>
                        <div className={'overflow-y-scroll flex flex-col gap-y-[20px] px-[3px]'} style={{ maxHeight: '2000px' }}>
                            <div className={'flex items-center px-[19px] gap-x-[13px] bg-white rounded-[20px] w-[335px] h-[137px]'}>
                                <div className={'flex flex-col gap-y-[19px]'}>
                                    <div className={'text-[16px] text-[#54515F] font-semibold'}>생리 중 예민한 이유는?... </div>
                                    <div  className={'text-[14px] text-[#727375]'}>생리 기간만 다가오면 유독 짜증이 나고, 예민하다면 월경전 증후군 때문이에요. 이는 주로</div>
                                </div>
                                <Image src={'./next.svg'} alt={'./next.svg'} width={83} height={81} ></Image>
                            </div>

                            <div className={'flex items-center px-[19px] gap-x-[13px] bg-white rounded-[20px] w-[335px] h-[137px]'}>
                                <div className={'flex flex-col gap-y-[19px]'}>
                                    <div className={'text-[16px] text-[#54515F] font-semibold'}>생리 중 예민한 이유는?... </div>
                                    <div  className={'text-[14px] text-[#727375]'}>생리 기간만 다가오면 유독 짜증이 나고, 예민하다면 월경전 증후군 때문이에요. 이는 주로</div>
                                </div>
                                <Image src={'./next.svg'} alt={'./next.svg'} width={83} height={81} ></Image>
                            </div>

                            <div className={'flex items-center px-[19px] gap-x-[13px] bg-white rounded-[20px] w-[335px] h-[137px]'}>
                                <div className={'flex flex-col gap-y-[19px]'}>
                                    <div className={'text-[16px] text-[#54515F] font-semibold'}>생리 중 예민한 이유는?... </div>
                                    <div  className={'text-[14px] text-[#727375]'}>생리 기간만 다가오면 유독 짜증이 나고, 예민하다면 월경전 증후군 때문이에요. 이는 주로</div>
                                </div>
                                <Image src={'./next.svg'} alt={'./next.svg'} width={83} height={81} ></Image>
                            </div>

                            <div className={'flex items-center px-[19px] gap-x-[13px] bg-white rounded-[20px] w-[335px] h-[137px]'}>
                                <div className={'flex flex-col gap-y-[19px]'}>
                                    <div className={'text-[16px] text-[#54515F] font-semibold'}>생리 중 예민한 이유는?... </div>
                                    <div  className={'text-[14px] text-[#727375]'}>생리 기간만 다가오면 유독 짜증이 나고, 예민하다면 월경전 증후군 때문이에요. 이는 주로</div>
                                </div>
                                <Image src={'./next.svg'} alt={'./next.svg'} width={83} height={81} ></Image>
                            </div>

                            <div className={'flex items-center px-[19px] gap-x-[13px] bg-white rounded-[20px] w-[335px] h-[137px]'}>
                                <div className={'flex flex-col gap-y-[19px]'}>
                                    <div className={'text-[16px] text-[#54515F] font-semibold'}>생리 중 예민한 이유는?... </div>
                                    <div  className={'text-[14px] text-[#727375]'}>생리 기간만 다가오면 유독 짜증이 나고, 예민하다면 월경전 증후군 때문이에요. 이는 주로</div>
                                </div>
                                <Image src={'./next.svg'} alt={'./next.svg'} width={83} height={81} ></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Magazine;
